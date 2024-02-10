import dayjs from 'dayjs';
import { P, match } from 'ts-pattern';

import { YabsEntry } from '~/@types';
import { checkCalendar } from '~/utils/check-calendar';
import { checkTrip } from '~/utils/check-trip';
import { parseTime } from '~/utils/parse-time';
import { GtfsProperties, GtfsResource } from '~/yabs/fetcher/gtfs/@types';
import { decodeTripUpdate, decodeVehiclePosition } from '~/yabs/fetcher/gtfs/decode-gtfsrt';

export async function computeGtfsEntries(resource: GtfsResource, properties: GtfsProperties): Promise<YabsEntry[]> {
  const entries = await match([properties.tripUpdateHref, properties.vehiclePositionHref])
    .with([P.string, P.string], async () => {
      const realtimeEntries = await fetchVehiclePositionAndTripUpdate(resource, properties);
      const scheduledEntries = computeScheduled(
        resource,
        properties,
        realtimeEntries.map((rt) => rt.trip.id),
      );
      return [realtimeEntries, scheduledEntries].flat();
    })
    .with([P.string, P.nullish], async () => {
      const realtimeEntries = await fetchTripUpdate(resource, properties);
      const scheduledEntries = computeScheduled(
        resource,
        properties,
        realtimeEntries.map((rt) => rt.trip.id),
      );
      return [realtimeEntries, scheduledEntries].flat();
    })
    .otherwise(() => computeScheduled(resource, properties));

  return entries;
}

// ---

export function computeScheduled(resource: GtfsResource, properties: GtfsProperties, processedTrips: string[] = []) {
  const filter = properties.filters?.scheduled;

  const ongoingTrips = [...resource.trips.values()].filter((trip, index, array) => {
    // 1. We run through the custom filter first.
    if (typeof filter !== 'undefined' && !filter(trip, index, array)) return false;
    // 2. If the trip was already seen in realtime data, we skip it.
    if (processedTrips.includes(trip.id)) return false;
    // 3. If a trip with the same block (if available) was processed, we skip it.
    if (trip.block !== null && processedTrips.some((id) => resource.trips.get(id)!.block === trip.block)) return false;
    // 4. We check for calendar and stop time.
    return checkCalendar(trip.calendar) && checkTrip(trip);
  });

  return ongoingTrips.map((trip) => {
    const stopTimes = trip.stops.map((stopTime) => ({
      id: stopTime.stop.id,
      name: stopTime.stop.name,
      sequence: stopTime.sequence,
      timestamp: parseTime(stopTime.time).unix(),
      distanceTraveled: stopTime.distanceTraveled,
      isRealtime: false,
    }));

    const currentStopTime = [...stopTimes].reverse().find((stopTime) => Date.now() >= +stopTime.timestamp * 1000)!;
    const currentStopTimeIdx = stopTimes.indexOf(currentStopTime);
    const currentStop = resource.stops.get(currentStopTime.id)!;

    let estimatedPosition = {
      latitude: currentStop.lat,
      longitude: currentStop.lon,
      timestamp: currentStopTime.timestamp,
    };

    if (trip.shape !== null && currentStopTimeIdx < stopTimes.length - 1) {
      const nextStopTime = stopTimes[currentStopTimeIdx + 1];
      const inBetweenTime = nextStopTime.timestamp - currentStopTime.timestamp;
      const timePercentToNextStop = (dayjs().unix() - currentStopTime.timestamp) / inBetweenTime;
      const estimatedTraveledDistance =
        currentStopTime.distanceTraveled! +
        (nextStopTime.distanceTraveled! - currentStopTime.distanceTraveled!) * timePercentToNextStop;
      const currentShapePoint = [...trip.shape.points]
        .reverse()
        .find((point) => point.distance < estimatedTraveledDistance);
      if (currentShapePoint) {
        const nextShapePoint = trip.shape.points[trip.shape.points.indexOf(currentShapePoint) + 1];
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

    return {
      id: `${properties.id}_${trip.id}`,
      stopTimes: stopTimes.slice(stopTimes.indexOf(currentStopTime) + 1),
      trip: {
        id: trip.id,
        calendar: trip.calendar.id,
        route: properties.routePrefix ? `${properties.routePrefix}-${trip.route}` : trip.route,
        direction: trip.direction,
        headsign: trip.headsign ?? stopTimes.at(-1)!.name,
      },
      vehicle: {
        id: null,
        position: {
          type: 'SCHEDULED',
          ...estimatedPosition,
        },
      },
      source: properties.getOperator?.(trip) ?? properties.id,
      timestamp: dayjs().unix(),
    } as const;
  });
}

export async function fetchTripUpdate(resource: GtfsResource, properties: GtfsProperties) {
  if (typeof properties.tripUpdateHref === 'undefined')
    throw new Error(`${properties.id}\tNo href to trip updates was found, cannot continue.`);

  const entries = new Map<string, YabsEntry>();

  const tripUpdate = await fetch(properties.tripUpdateHref)
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) => Buffer.from(arrayBuffer))
    .then((buffer) => decodeTripUpdate(buffer));

  tripUpdate.entity
    .sort((a, b) => +b.tripUpdate.timestamp - +a.tripUpdate.timestamp)
    .filter((trip, index, array) => {
      const filter = properties.filters?.tripUpdate;
      return filter ? filter(trip, index, array) : true;
    })
    .forEach((tripUpdate) => {
      // if (dayjs().diff(dayjs.unix(+tripUpdate.tripUpdate.timestamp), "minutes") >= 10) return;
      const trip = resource.trips.get(tripUpdate.tripUpdate.trip.tripId);
      if (typeof trip === 'undefined') return;
      if (
        typeof tripUpdate.tripUpdate.trip.routeId !== 'undefined' &&
        tripUpdate.tripUpdate.trip.routeId !== trip.route
      )
        return;

      let currentDelta: number | null = null;
      const stopTimes = trip.stops.map((stopTime) => {
        const stopTimeUpdate = tripUpdate?.tripUpdate.stopTimeUpdate.find((stu) => stu.stopId === stopTime.stop.id);
        const partialStopTime = {
          id: stopTime.stop.id,
          name: stopTime.stop.name,
          sequence: stopTime.sequence,
          distanceTraveled: stopTime.distanceTraveled,
        };

        if (typeof stopTimeUpdate === 'undefined') {
          return { ...partialStopTime, timestamp: parseTime(stopTime.time).unix(), isRealtime: false };
        }

        if (stopTimeUpdate?.scheduleRelationship === 'NO-DATA') {
          currentDelta = null;
          return { ...partialStopTime, timestamp: parseTime(stopTime.time).unix(), isRealtime: false };
        }

        if (stopTimeUpdate.scheduleRelationship === 'SKIPPED') {
          return { ...partialStopTime, timestamp: null, isRealtime: true };
        }

        if (typeof stopTimeUpdate.arrival?.delay === 'number') {
          currentDelta = stopTimeUpdate.arrival.delay;
        }

        const timestamp =
          typeof stopTimeUpdate.arrival?.time === 'string'
            ? +stopTimeUpdate.arrival.time
            : parseTime(stopTime.time)
                .add((properties.propagateDelays ? currentDelta : stopTimeUpdate.arrival?.delay) ?? 0, 'seconds')
                .unix();
        return { ...partialStopTime, timestamp, isRealtime: true };
      });

      const currentStopTime =
        [...stopTimes].reverse().find((stopTime) => {
          if (stopTime.timestamp === null) return false;
          return dayjs().isAfter(dayjs.unix(stopTime.timestamp));
        }) ?? stopTimes[0];
      if (dayjs().diff(dayjs.unix(currentStopTime.timestamp!), 'minutes') > 10) return;
      const currentStopTimeIdx = stopTimes.indexOf(currentStopTime);

      const vehicleDescriptor = tripUpdate.tripUpdate.vehicle;
      const vehicleId = vehicleDescriptor
        ? properties.getVehicleNumber
          ? properties.getVehicleNumber(vehicleDescriptor)
          : vehicleDescriptor.label ?? vehicleDescriptor.id
        : null;

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
        const currentShapePoint = [...trip.shape.points]
          .reverse()
          .find((point) => point.distance < estimatedTraveledDistance);
        if (currentShapePoint) {
          const nextShapePoint = trip.shape.points[trip.shape.points.indexOf(currentShapePoint) + 1];
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

      const id = vehicleId ? `VEHICLE_${vehicleId}` : `TRIP_${trip.block ?? trip.id}`;
      entries.set(id, {
        id: `${properties.id}_${id}`,
        stopTimes: dayjs.unix(currentStopTime.timestamp!).isAfter()
          ? stopTimes
          : stopTimes.slice(stopTimes.indexOf(currentStopTime) + 1),
        trip: {
          id: trip.id,
          calendar: trip.calendar.id,
          route: properties.routePrefix ? `${properties.routePrefix}-${trip.route}` : trip.route,
          direction: trip.direction,
          headsign: trip.headsign?.trim().length > 0 ? trip.headsign : stopTimes.at(-1)!.name,
        },
        vehicle: {
          id: vehicleId,
          position: {
            type: 'REALTIME',
            ...estimatedPosition,
          },
        },
        source: properties.getOperator?.(trip) ?? properties.id,
        timestamp: +tripUpdate.tripUpdate.timestamp,
      });
    });

  return [...entries.values()];
}

export async function fetchVehiclePositionAndTripUpdate(resource: GtfsResource, properties: GtfsProperties) {
  if (typeof properties.tripUpdateHref === 'undefined' || typeof properties.vehiclePositionHref === 'undefined')
    throw new Error(`${properties.id}\tBoth trip update and vehicle position href must be set.`);

  const entries = new Map<string, YabsEntry>();

  const tripUpdates = await fetch(properties.tripUpdateHref)
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) => Buffer.from(arrayBuffer))
    .then((buffer) => decodeTripUpdate(buffer));

  const vehiclePositions = await fetch(properties.vehiclePositionHref)
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) => Buffer.from(arrayBuffer))
    .then((buffer) => decodeVehiclePosition(buffer));

  vehiclePositions.entity.forEach((vehiclePosition) => {
    if (typeof vehiclePosition.vehicle.trip === 'undefined') return;
    const trip = resource.trips.get(vehiclePosition.vehicle.trip.tripId);
    if (typeof trip === 'undefined') return;
    if (
      typeof vehiclePosition.vehicle.trip.routeId !== 'undefined' &&
      vehiclePosition.vehicle.trip.routeId !== trip.route
    )
      return;

    const tripUpdate = tripUpdates.entity.find((tripUpdate) => tripUpdate.tripUpdate.trip.tripId === trip.id);
    if (
      typeof tripUpdate === 'undefined' &&
      dayjs().diff(dayjs.unix(+vehiclePosition.vehicle.timestamp), 'minutes') >= 10
    )
      return;

    let currentDelta: number | null = null;
    const stopTimes = trip.stops.map((stopTime) => {
      const stopTimeUpdate = tripUpdate?.tripUpdate.stopTimeUpdate.find((stu) => stu.stopId === stopTime.stop.id);
      const partialStopTime = {
        id: stopTime.stop.id,
        name: stopTime.stop.name,
        sequence: stopTime.sequence,
      };

      if (typeof stopTimeUpdate === 'undefined') {
        return { ...partialStopTime, timestamp: parseTime(stopTime.time).unix(), isRealtime: false };
      }

      if (stopTimeUpdate?.scheduleRelationship === 'NO-DATA') {
        currentDelta = null;
        return { ...partialStopTime, timestamp: parseTime(stopTime.time).unix(), isRealtime: false };
      }

      if (stopTimeUpdate.scheduleRelationship === 'SKIPPED') {
        return { ...partialStopTime, timestamp: null, isRealtime: true };
      }

      if (typeof stopTimeUpdate.arrival?.delay === 'number') {
        currentDelta = stopTimeUpdate.arrival.delay;
      }

      const timestamp =
        typeof stopTimeUpdate.arrival?.time === 'string'
          ? +stopTimeUpdate.arrival.time
          : parseTime(stopTime.time)
              .add((properties.propagateDelays ? currentDelta : stopTimeUpdate.arrival?.delay) ?? 0, 'seconds')
              .unix();
      return { ...partialStopTime, timestamp, isRealtime: true };
    });

    const lastStop = stopTimes.at(-1);
    if (
      dayjs().diff(dayjs.unix(+vehiclePosition.vehicle.timestamp), 'minutes') >= 10 &&
      typeof lastStop !== 'undefined' &&
      dayjs().diff(dayjs.unix(+lastStop.timestamp!), 'minutes') >= 10
    )
      return;

    const vehicleDescriptor = vehiclePosition.vehicle.vehicle;
    const vehicleId = properties.getVehicleNumber
      ? properties.getVehicleNumber(vehicleDescriptor)
      : vehicleDescriptor.label ?? vehicleDescriptor.id;

    const id = vehicleId ? `VEHICLE_${vehicleId}` : `TRIP_${trip.block ?? trip.id}`;
    entries.set(id, {
      id: `${properties.id}_${id}`,
      source: properties.getOperator?.(trip) ?? properties.id,
      stopTimes:
        typeof vehiclePosition.vehicle.currentStopSequence === 'number'
          ? stopTimes.filter((stopTime) => stopTime.sequence >= vehiclePosition.vehicle.currentStopSequence!)
          : stopTimes.filter((stopTime) => {
              if (stopTime.timestamp === null) return false;
              return dayjs
                .unix(stopTime.timestamp)
                .isSameOrAfter(dayjs.unix(+vehiclePosition.vehicle.timestamp), 'minute');
            }),
      trip: {
        id: trip.id,
        calendar: trip.calendar.id,
        route: properties.routePrefix ? `${properties.routePrefix}-${trip.route}` : trip.route,
        direction: trip.direction,
        headsign: trip.headsign,
      },
      vehicle: {
        id: vehicleId,
        position: {
          latitude: vehiclePosition.vehicle.position.latitude,
          longitude: vehiclePosition.vehicle.position.longitude,
          timestamp: +vehiclePosition.vehicle.timestamp,
          type: 'GPS',
        },
      },
      timestamp: +vehiclePosition.vehicle.timestamp,
    });
  });

  return [...entries.values()];
}