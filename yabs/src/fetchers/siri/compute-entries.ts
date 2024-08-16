import dayjs from 'dayjs';
import { XMLParser } from 'fast-xml-parser';

import type { YabsEntry } from '../../types.js';
import { getVehicleLedColor } from '../../vehicles/get-vehicle-led-color.js';
import type { SiriProperties, SiriVehicleActivity } from './types.js';

const parser = new XMLParser();

const parseSiriRef = (ref: string) => ref.split(':')[3];

const vehicleMonitoringRequestPayload = `<?xml version="1.0" encoding="utf-8"?>
<Siri xmlns="http://www.siri.org.uk/siri" version="2.0">
<ServiceRequest>
        <RequestorRef>BUS-TRACKER.FR</RequestorRef>
        <VehicleMonitoringRequest version="2.0" />
    </ServiceRequest>
</Siri>
`;

const unescape = (input: string) => input.replace('&apos;', "'");

const caches = new Map<string, Map<string, YabsEntry>>();

export async function computeSiriEntries(properties: SiriProperties): Promise<YabsEntry[] | null> {
  let cache = caches.get(properties.id);
  if (!cache) {
    cache = new Map();
    caches.set(properties.id, cache);
  }

  for (const [key, value] of cache) {
    const timestamp = dayjs.unix(value.timestamp);
    if (dayjs().diff(timestamp, 'minutes') > 10) {
      cache.delete(key);
    }
  }

  const response = await fetch(properties.siriEndpoint, {
    body: vehicleMonitoringRequestPayload,
    headers: {
      'Content-Type': 'application/xml',
      'Content-Length': vehicleMonitoringRequestPayload.length.toString(),
      'User-Agent': 'Bus-Tracker.fr/1.0',
    },
    method: 'POST',
    signal: AbortSignal.timeout(10000),
  }).catch(() => null);
  if (response === null || !response.ok) return null;
  const payload = await response.text();
  const data = parser.parse(payload);
  const vehicles = (data.Siri.ServiceDelivery.VehicleMonitoringDelivery.VehicleActivity ?? []) as
    | SiriVehicleActivity[]
    | SiriVehicleActivity;

  const vehiclesToProcess = (
    Array.isArray(vehicles)
      ? vehicles.sort(
          (a, b) =>
            dayjs(a.MonitoredVehicleJourney.OriginAimedDepartureTime).unix() -
            dayjs(b.MonitoredVehicleJourney.OriginAimedDepartureTime).unix(),
        )
      : [vehicles]
  ).filter(
    (vehicle, index, vehicles) =>
      typeof vehicle.MonitoredVehicleJourney.VehicleLocation !== 'undefined' &&
      vehicles.findIndex((v) => v.VehicleMonitoringRef === vehicle.VehicleMonitoringRef) === index,
  );

  for (const vehicle of vehiclesToProcess) {
    const source = properties.id;
    const timestamp = dayjs(vehicle.RecordedAtTime).unix();
    const vehicleLabel = properties.getVehicleLabel(parseSiriRef(vehicle.VehicleMonitoringRef));
    const calls = [
      vehicle.MonitoredVehicleJourney.MonitoredCall,
      ...(Array.isArray(vehicle.MonitoredVehicleJourney.OnwardCalls.OnwardCall)
        ? vehicle.MonitoredVehicleJourney.OnwardCalls.OnwardCall
        : typeof vehicle.MonitoredVehicleJourney.OnwardCalls.OnwardCall !== 'undefined'
          ? [vehicle.MonitoredVehicleJourney.OnwardCalls.OnwardCall]
          : []),
    ];
    const ledColor = await getVehicleLedColor({ operator: source, number: vehicleLabel });
    const nextStops = [
      ...(dayjs().isBefore(vehicle.MonitoredVehicleJourney.OriginAimedDepartureTime)
        ? [
            {
              id: parseSiriRef(vehicle.MonitoredVehicleJourney.OriginRef),
              name: unescape(vehicle.MonitoredVehicleJourney.OriginName),
              sequence: 1,
              timestamp: dayjs(vehicle.MonitoredVehicleJourney.OriginAimedDepartureTime).unix(),
              delta: 0,
              isRealtime: true,
            },
          ]
        : []),
      ...(calls
        .sort((a, b) => a.Order - b.Order)
        .map((stopCall) => {
          const isCancelled = stopCall.ArrivalStatus === 'cancelled';
          return {
            id: parseSiriRef(stopCall.StopPointRef),
            name: unescape(stopCall.StopPointName),
            sequence: stopCall.Order,
            timestamp: dayjs(stopCall.ExpectedDepartureTime ?? stopCall.ExpectedArrivalTime).unix(),
            delta: isCancelled
              ? null
              : dayjs(stopCall.ExpectedDepartureTime ?? stopCall.ExpectedArrivalTime).diff(
                  stopCall.AimedDepartureTime ?? stopCall.AimedArrivalTime,
                  'seconds',
                ),
            isRealtime: true,
          };
        }) ?? []),
    ];

    cache.set(vehicleLabel, {
      id: `${properties.id}:VEH:${vehicleLabel}`,
      source: source,
      trip: {
        id: parseSiriRef(vehicle.MonitoredVehicleJourney.FramedVehicleJourneyRef.DatedVehicleJourneyRef),
        calendar: 'N/A',
        direction: +vehicle.MonitoredVehicleJourney.DirectionName - 1,
        headsign: unescape(vehicle.MonitoredVehicleJourney.DestinationName),
        route: properties.prefix
          ? `${properties.prefix}:${parseSiriRef(vehicle.MonitoredVehicleJourney.LineRef)}`
          : parseSiriRef(vehicle.MonitoredVehicleJourney.LineRef),
        status: nextStops.length === 0 ? 'ARRIVED' : 'ONGOING',
      },
      vehicle: {
        id: vehicleLabel.toString(),
        position: {
          latitude: vehicle.MonitoredVehicleJourney.VehicleLocation!.Latitude,
          longitude: vehicle.MonitoredVehicleJourney.VehicleLocation!.Longitude,
          timestamp,
          type: 'GPS' as const,
        },
        ledColor,
      },
      stopTimes: nextStops,
      timestamp: timestamp,
      activityRegistered: true,
    });
  }

  return Array.from(cache.values());
}
