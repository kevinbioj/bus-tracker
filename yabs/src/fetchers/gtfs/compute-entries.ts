import dayjs from 'dayjs';
import { P, match } from 'ts-pattern';

import type { YabsEntry } from '../../types.js';
import { getVehicleLedColor } from '../../vehicles/get-vehicle-led-color.js';
import { decodeTripUpdate, decodeVehiclePosition } from './decode-gtfsrt.js';
import type { GtfsProperties, GtfsResource } from './types.js';
import { checkCalendar } from './utils/check-calendar.js';
import { checkTrip } from './utils/check-trip.js';
import { parseTime } from './utils/parse-time.js';

export async function computeGtfsEntries(
  resource: GtfsResource,
  properties: GtfsProperties,
): Promise<YabsEntry[] | null> {
  const entries = await match([properties.tripUpdateHref, properties.vehiclePositionHref])
    .with([P.string, P.string], async () => {
      const [realtimeEntries, canceledTrips] = await fetchVehiclePositionAndTripUpdate(resource, properties);
      const scheduledEntries = computeScheduled(resource, properties, [
        ...realtimeEntries.map((rt) => rt.trip.id),
        ...canceledTrips,
      ]);
      return [realtimeEntries, scheduledEntries].flat();
    })
    .with([P.string, P.nullish], async () => {
      const [realtimeEntries, canceledTrips] = await fetchTripUpdate(resource, properties);
      const scheduledEntries = computeScheduled(resource, properties, [
        ...realtimeEntries.map((rt) => rt.trip.id),
        ...canceledTrips,
      ]);
      return [realtimeEntries, scheduledEntries].flat();
    })
    .otherwise(() => computeScheduled(resource, properties));

  return entries;
}

// ---

export function computeScheduled(resource: GtfsResource, properties: GtfsProperties, processedTrips: string[] = []) {
  const entries: YabsEntry[] = [];
  for (const trip of resource.scheduledTrips) {
    if (processedTrips.includes(trip.id)) continue;
    if (trip.block !== null && processedTrips.some((id) => resource.trips.get(id)!.block === trip.block)) continue;
    if (!checkCalendar(trip.service) || !checkTrip(trip)) continue;

    const stopTimes = trip.stops.map((stopTime) => ({
      id: stopTime.stop.id,
      name: stopTime.stop.name,
      sequence: stopTime.sequence,
      timestamp: parseTime(stopTime.time).unix(),
      distanceTraveled: stopTime.distanceTraveled,
      delta: null,
      isRealtime: false,
    }));

    const currentStopTime =
      stopTimes.toReversed().find((stopTime) => Date.now() >= +stopTime.timestamp * 1000) ?? stopTimes[0];
    const currentStopTimeIdx = stopTimes.indexOf(currentStopTime);
    const currentStop = resource.stops.get(currentStopTime.id)!;

    let estimatedPosition = {
      latitude: currentStop.lat,
      longitude: currentStop.lon,
      timestamp: currentStopTime.timestamp,
    };

    if (trip.shape !== null && currentStopTimeIdx < stopTimes.length - 1) {
      const nextStopTime = stopTimes[currentStopTimeIdx + 1]!;
      const inBetweenTime = nextStopTime.timestamp - currentStopTime.timestamp;
      const timePercentToNextStop = (dayjs().unix() - currentStopTime.timestamp) / inBetweenTime;
      const estimatedTraveledDistance =
        currentStopTime.distanceTraveled! +
        (nextStopTime.distanceTraveled! - currentStopTime.distanceTraveled!) * timePercentToNextStop;
      const currentShapePoint = trip.shape.points
        .toReversed()
        .find((point) => point.distance < estimatedTraveledDistance);
      if (currentShapePoint) {
        const nextShapePoint = trip.shape.points[trip.shape.points.indexOf(currentShapePoint) + 1];
        if (nextShapePoint) {
          const ratio =
            (estimatedTraveledDistance - currentShapePoint.distance) /
            (nextShapePoint.distance - currentShapePoint.distance);

          estimatedPosition = {
            latitude: nextShapePoint
              ? currentShapePoint.lat + (nextShapePoint.lat - currentShapePoint.lat) * ratio
              : currentShapePoint.lat,
            longitude: nextShapePoint
              ? currentShapePoint.lon + (nextShapePoint.lon - currentShapePoint.lon) * ratio
              : currentShapePoint.lon,
            timestamp: dayjs().unix(),
          };
        }
      }
    }

    const nextStops = stopTimes.slice(stopTimes.indexOf(currentStopTime) + 1);
    entries.push({
      id: `${properties.id}:JOU:${trip.id}`,
      stopTimes: nextStops,
      trip: {
        id: trip.id,
        calendar: trip.service.id,
        route: properties.routePrefix ? `${properties.routePrefix}:${trip.route}` : trip.route,
        direction: trip.direction,
        headsign: trip.headsign?.trim().length > 0 ? trip.headsign : stopTimes.at(-1)!.name,
        status:
          nextStops.length === 0
            ? 'ARRIVED'
            : nextStops[0]!.sequence === trip.stops[0]!.sequence
              ? 'WAITING_FOR_DEPARTURE'
              : 'ONGOING',
      },
      vehicle: {
        id: null,
        position: {
          type: 'SCHEDULED',
          ...estimatedPosition,
        },
        ledColor: null,
      },
      source: properties.getOperator?.(trip) ?? properties.id,
      timestamp: dayjs().unix(),
      activityRegistered: false,
    });
  }
  return entries;
}

export async function fetchTripUpdate(resource: GtfsResource, properties: GtfsProperties) {
  if (typeof properties.tripUpdateHref === 'undefined')
    throw new Error(`${properties.id}\tNo href to trip updates was found, cannot continue.`);

  const canceledTrips: string[] = [];
  const entries = new Map<string, YabsEntry>();

  const tripUpdate = await fetch(properties.tripUpdateHref, { signal: AbortSignal.timeout(15000) })
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) => Buffer.from(arrayBuffer))
    .then((buffer) => decodeTripUpdate(buffer))
    .then(({ entity }) => properties.mapTripUpdateEntities?.(entity, resource) ?? entity);

  await Promise.allSettled(
    tripUpdate.map(async (tripUpdate) => {
      // if (dayjs().diff(dayjs.unix(+tripUpdate.tripUpdate.timestamp), "minutes") >= 10) return;
      const trip = resource.trips.get(tripUpdate.tripUpdate.trip.tripId);
      if (!trip) return;
      if (
        typeof tripUpdate.tripUpdate.trip.routeId !== 'undefined' &&
        tripUpdate.tripUpdate.trip.routeId !== trip.route
      )
        return;

      if (tripUpdate.tripUpdate.trip.scheduleRelationship === 'CANCELED') {
        canceledTrips.push(trip.id);
        return;
      }

      let currentDelta: number | null = null;
      const hasStopSequences = tripUpdate.tripUpdate.stopTimeUpdate.some((stu) => typeof stu.stopSequence === 'number');
      const stopTimes = trip.stops.map((stopTime) => {
        const stopTimeUpdate = tripUpdate.tripUpdate.stopTimeUpdate.find((stu) => {
          if (!hasStopSequences || typeof stu.stopSequence === 'undefined') return stu.stopId === stopTime.stop.id;
          return stu.stopSequence === stopTime.sequence;
        });
        const partialStopTime = {
          id: stopTime.stop.id,
          name: stopTime.stop.name,
          sequence: stopTime.sequence,
          distanceTraveled: stopTime.distanceTraveled,
          scheduled: parseTime(stopTime.time).unix(),
        };

        if (typeof stopTimeUpdate === 'undefined') {
          if (properties.missingStopTimeUpdateStrategy === 'SKIP') {
            return { ...partialStopTime, timestamp: null, delta: null, isRealtime: true };
          }
          if (properties.missingStopTimeUpdateStrategy === 'NO-DATA' || currentDelta === null) {
            currentDelta = null;
            return { ...partialStopTime, timestamp: partialStopTime.scheduled, delta: null, isRealtime: false };
          }
          return {
            ...partialStopTime,
            timestamp: parseTime(stopTime.time).add(currentDelta, 'seconds').unix(),
            delta: currentDelta,
            isRealtime: true,
          };
        }

        if (stopTimeUpdate?.scheduleRelationship === 'NO-DATA') {
          currentDelta = null;
          return { ...partialStopTime, timestamp: partialStopTime.scheduled, delta: null, isRealtime: false };
        }

        if (stopTimeUpdate.scheduleRelationship === 'SKIPPED') {
          return { ...partialStopTime, timestamp: null, delta: null, isRealtime: true };
        }

        const stopTimeEvent = stopTimeUpdate.departure ?? stopTimeUpdate.arrival;

        if (typeof stopTimeEvent?.delay === 'number') {
          currentDelta = stopTimeEvent.delay;
        } else if (typeof stopTimeEvent?.time === 'string') {
          currentDelta = dayjs.unix(+stopTimeEvent.time).diff(dayjs.unix(partialStopTime.scheduled), 'seconds');
        }

        const timestamp =
          typeof stopTimeEvent?.time === 'string'
            ? +stopTimeEvent.time
            : dayjs
                .unix(partialStopTime.scheduled)
                .add(currentDelta ?? 0, 'seconds')
                .unix();
        return { ...partialStopTime, timestamp, delta: currentDelta, isRealtime: true };
      });

      const currentStopTime =
        stopTimes.toReversed().find((stopTime) => {
          return dayjs().isAfter(dayjs.unix(stopTime.timestamp ?? stopTime.scheduled));
        }) ?? stopTimes[0]!;
      if (
        currentStopTime.sequence === trip.stops.at(-1)!.sequence &&
        dayjs().diff(dayjs.unix(currentStopTime.timestamp!), 'minutes') > 10
      )
        return;
      const currentStopTimeIdx = stopTimes.indexOf(currentStopTime);

      const firstTimestamp = stopTimes.find((st) => st.timestamp !== null)?.timestamp;
      if (firstTimestamp) {
        const whenBegins = dayjs.unix(firstTimestamp);
        if (dayjs().isBefore(whenBegins) && Math.abs(dayjs().diff(whenBegins, 'minutes')) > 15) return;
      }

      const source = properties.getOperator?.(trip) ?? properties.id;
      const vehicleDescriptor = tripUpdate.tripUpdate.vehicle;
      const vehicleId = vehicleDescriptor
        ? properties.getVehicleNumber
          ? properties.getVehicleNumber(vehicleDescriptor)
          : vehicleDescriptor.label ?? vehicleDescriptor.id
        : null;
      const ledColor = vehicleId ? await getVehicleLedColor({ operator: source, number: vehicleId }) : null;

      const currentStop = resource.stops.get(currentStopTime.id)!;

      let estimatedPosition = {
        latitude: currentStop.lat,
        longitude: currentStop.lon,
        timestamp: currentStopTime.timestamp!,
      };

      const nextStopTime = stopTimes.slice(currentStopTimeIdx + 1).find((st) => st.timestamp !== null);
      if (trip.shape !== null && nextStopTime) {
        const inBetweenTime = nextStopTime.timestamp! - currentStopTime.timestamp!;
        const timePercentToNextStop = (dayjs().unix() - currentStopTime.timestamp!) / inBetweenTime;
        const estimatedTraveledDistance =
          currentStopTime.distanceTraveled! +
          (nextStopTime.distanceTraveled! - currentStopTime.distanceTraveled!) * timePercentToNextStop;
        const currentShapePoint = trip.shape.points
          .toReversed()
          .find((point) => point.distance < estimatedTraveledDistance);
        if (currentShapePoint) {
          const nextShapePoint = trip.shape.points[trip.shape.points.indexOf(currentShapePoint) + 1];
          if (nextShapePoint) {
            const ratio =
              (estimatedTraveledDistance - currentShapePoint.distance) /
              (nextShapePoint.distance - currentShapePoint.distance);

            estimatedPosition = {
              latitude: nextShapePoint
                ? currentShapePoint.lat + (nextShapePoint.lat - currentShapePoint.lat) * ratio
                : currentShapePoint.lat,
              longitude: nextShapePoint
                ? currentShapePoint.lon + (nextShapePoint.lon - currentShapePoint.lon) * ratio
                : currentShapePoint.lon,
              timestamp: dayjs().unix(),
            };
          }
        }
      }

      const nextStops = dayjs.unix(currentStopTime.timestamp!).isAfter()
        ? stopTimes
        : stopTimes.slice(stopTimes.indexOf(currentStopTime) + 1);
      const id = vehicleId ? `VEH:${vehicleId}` : trip.block ? `BLO:${trip.block}` : `JOU:${trip.id}`;
      entries.set(id, {
        id: `${properties.id}:${id}`,
        stopTimes: nextStops,
        trip: {
          id: trip.id,
          calendar: trip.service.id,
          route: properties.routePrefix ? `${properties.routePrefix}:${trip.route}` : trip.route,
          direction: trip.direction,
          headsign: trip.headsign?.trim().length > 0 ? trip.headsign : stopTimes.at(-1)!.name,
          status:
            nextStops.length === 0
              ? 'ARRIVED'
              : nextStops[0]!.sequence === trip.stops[0]!.sequence
                ? 'WAITING_FOR_DEPARTURE'
                : 'ONGOING',
        },
        vehicle: {
          id: vehicleId,
          position: {
            type: 'REALTIME',
            ...estimatedPosition,
          },
          ledColor,
        },
        source,
        timestamp: +tripUpdate.tripUpdate.timestamp,
        activityRegistered: properties.registerActivity ?? true,
      });
    }),
  );

  return [[...entries.values()], canceledTrips] as const;
}

export async function fetchVehiclePositionAndTripUpdate(resource: GtfsResource, properties: GtfsProperties) {
  if (typeof properties.tripUpdateHref === 'undefined' || typeof properties.vehiclePositionHref === 'undefined')
    throw new Error(`${properties.id}\tBoth trip update and vehicle position href must be set.`);

  const canceledTrips: string[] = [];
  const entries = new Map<string, YabsEntry>();

  const [tripUpdates, vehiclePositions] = await Promise.all([
    fetch(properties.tripUpdateHref, { signal: AbortSignal.timeout(15000) })
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => Buffer.from(arrayBuffer))
      .then((buffer) => decodeTripUpdate(buffer))
      .then(({ entity }) => properties.mapTripUpdateEntities?.(entity, resource) ?? entity),
    fetch(properties.vehiclePositionHref, { signal: AbortSignal.timeout(15000) })
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => Buffer.from(arrayBuffer))
      .then((buffer) => decodeVehiclePosition(buffer))
      .then(({ entity }) => properties.mapVehiclePositionEntities?.(entity, resource) ?? entity),
  ]);

  await Promise.allSettled(
    vehiclePositions.map(async (vehiclePosition) => {
      if (typeof vehiclePosition.vehicle.trip === 'undefined') return;
      const trip = resource.trips.get(vehiclePosition.vehicle.trip.tripId);
      if (!trip) return;
      if (
        typeof vehiclePosition.vehicle.trip.routeId !== 'undefined' &&
        vehiclePosition.vehicle.trip.routeId !== trip.route
      )
        return;

      const tripUpdate = tripUpdates.find((tripUpdate) => tripUpdate.tripUpdate.trip.tripId === trip.id);
      if (
        typeof tripUpdate === 'undefined' &&
        dayjs().diff(dayjs.unix(+vehiclePosition.vehicle.timestamp), 'minutes') >= 10
      )
        return;

      if (tripUpdate?.tripUpdate.trip.scheduleRelationship === 'CANCELED') {
        canceledTrips.push(trip.id);
        return;
      }

      let currentDelta: number | null = null;
      const hasStopSequences = tripUpdate?.tripUpdate.stopTimeUpdate.some(
        (stu) => typeof stu.stopSequence === 'number',
      );
      const stopTimes = trip.stops.map((stopTime) => {
        const stopTimeUpdate = tripUpdate?.tripUpdate.stopTimeUpdate.find((stu) => {
          if (!hasStopSequences || typeof stu.stopSequence === 'undefined') return stu.stopId === stopTime.stop.id;
          return stu.stopSequence === stopTime.sequence;
        });
        const partialStopTime = {
          id: stopTime.stop.id,
          name: stopTime.stop.name,
          sequence: stopTime.sequence,
          distanceTraveled: stopTime.distanceTraveled,
          scheduled: parseTime(stopTime.time).unix(),
        };

        if (typeof stopTimeUpdate === 'undefined') {
          if (properties.missingStopTimeUpdateStrategy === 'SKIP') {
            return { ...partialStopTime, timestamp: null, delta: null, isRealtime: true };
          }
          if (properties.missingStopTimeUpdateStrategy === 'NO-DATA' || currentDelta === null) {
            currentDelta = null;
            return { ...partialStopTime, timestamp: partialStopTime.scheduled, delta: null, isRealtime: false };
          }
          return {
            ...partialStopTime,
            timestamp: parseTime(stopTime.time).add(currentDelta, 'seconds').unix(),
            delta: currentDelta,
            isRealtime: true,
          };
        }

        if (stopTimeUpdate?.scheduleRelationship === 'NO-DATA') {
          currentDelta = null;
          return { ...partialStopTime, timestamp: partialStopTime.scheduled, delta: null, isRealtime: false };
        }

        if (stopTimeUpdate.scheduleRelationship === 'SKIPPED') {
          return { ...partialStopTime, timestamp: null, delta: null, isRealtime: true };
        }

        const stopTimeEvent = stopTimeUpdate.departure ?? stopTimeUpdate.arrival;
        if (typeof stopTimeEvent !== 'undefined') {
          if (typeof stopTimeEvent.time === 'string') {
            currentDelta = dayjs.unix(+stopTimeEvent.time).diff(dayjs.unix(partialStopTime.scheduled), 'seconds');
          } else {
            currentDelta = stopTimeEvent.delay ?? 0;
          }
        }

        const timestamp =
          typeof stopTimeEvent?.time === 'string'
            ? +stopTimeEvent.time
            : dayjs
                .unix(partialStopTime.scheduled)
                .add(currentDelta ?? 0, 'seconds')
                .unix();
        return { ...partialStopTime, timestamp, delta: currentDelta, isRealtime: true };
      });

      const lastStop = stopTimes.at(-1);
      if (
        dayjs().diff(dayjs.unix(+vehiclePosition.vehicle.timestamp), 'minutes') >= 10 &&
        typeof lastStop !== 'undefined' &&
        dayjs().diff(dayjs.unix(+lastStop.timestamp!), 'minutes') >= 10
      )
        return;

      const source = properties.getOperator?.(trip) ?? properties.id;
      const vehicleDescriptor = vehiclePosition.vehicle.vehicle;
      const vehicleId = properties.getVehicleNumber
        ? properties.getVehicleNumber(vehicleDescriptor)
        : vehicleDescriptor.label ?? vehicleDescriptor.id;
      const ledColor = vehicleId ? await getVehicleLedColor({ operator: source, number: vehicleId }) : null;

      const nextStops =
        typeof vehiclePosition.vehicle.currentStopSequence !== 'number'
          ? stopTimes.filter((stopTime) => {
              return dayjs
                .unix(stopTime.timestamp ?? stopTime.scheduled)
                .isSameOrAfter(dayjs.unix(+vehiclePosition.vehicle.timestamp), 'minute');
            })
          : stopTimes.filter((stopTime) => stopTime.sequence >= vehiclePosition.vehicle.currentStopSequence!);
      const id = vehicleId ? `VEH:${vehicleId}` : trip.block ? `BLO:${trip.block}` : `JOU:${trip.id}`;
      entries.set(id, {
        id: `${properties.id}:${id}`,
        source,
        stopTimes: nextStops,
        trip: {
          id: trip.id,
          calendar: trip.service.id,
          route: properties.routePrefix ? `${properties.routePrefix}:${trip.route}` : trip.route,
          direction: trip.direction,
          headsign: trip.headsign?.trim().length > 0 ? trip.headsign : stopTimes.at(-1)!.name,
          status:
            nextStops.length === 0
              ? 'ARRIVED'
              : nextStops[0]!.sequence === trip.stops[0]!.sequence
                ? 'WAITING_FOR_DEPARTURE'
                : 'ONGOING',
        },
        vehicle: {
          id: vehicleId,
          position: {
            latitude: vehiclePosition.vehicle.position.latitude,
            longitude: vehiclePosition.vehicle.position.longitude,
            timestamp: +vehiclePosition.vehicle.timestamp,
            type: 'GPS',
          },
          ledColor,
        },
        timestamp: +vehiclePosition.vehicle.timestamp,
        activityRegistered: properties.registerActivity ?? true,
      });
    }),
  );

  return [[...entries.values()], canceledTrips] as const;
}
