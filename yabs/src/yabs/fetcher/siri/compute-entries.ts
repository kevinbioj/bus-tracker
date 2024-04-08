import dayjs from 'dayjs';
import { XMLParser } from 'fast-xml-parser';

import { SiriProperties, SiriVehicleActivity } from '~/yabs/fetcher/siri/@types';
import { getVehicleLedColor } from '~/yabs/vehicles/get-vehicle-led-color';

const parser = new XMLParser();

const parseSiriRef = (ref: string) => ref.split(':')[3];

const vehicleMonitoringRequestPayload = `<?xml version="1.0" encoding="utf-8"?>
<Siri xmlns="http://www.siri.org.uk/siri" version="2.0">
<ServiceRequest>
        <RequestorRef>BUS-TRACKER.XYZ</RequestorRef>
        <VehicleMonitoringRequest version="2.0" />
    </ServiceRequest>
</Siri>
`;

const unescape = (input: string) => input.replace('&apos;', "'");

export async function computeSiriEntries(properties: SiriProperties) {
  const abortController = new AbortController();
  const timeout = setTimeout(() => abortController.abort(), 5000);
  const response = await fetch(properties.siriEndpoint, {
    body: vehicleMonitoringRequestPayload,
    headers: {
      'Content-Type': 'application/xml',
      'Content-Length': vehicleMonitoringRequestPayload.length.toString(),
      'User-Agent': 'Bus-Tracker.xyz/1.0',
    },
    method: 'POST',
    signal: abortController.signal,
  });
  clearInterval(timeout);
  if (!response.ok) return null;
  const payload = await response.text();
  const data = parser.parse(payload);
  const vehicles = data.Siri.ServiceDelivery.VehicleMonitoringDelivery.VehicleActivity as
    | SiriVehicleActivity[]
    | SiriVehicleActivity;
  return Promise.all(
    (Array.isArray(vehicles)
      ? vehicles.sort(
          (a, b) =>
            dayjs(a.MonitoredVehicleJourney.OriginAimedDepartureTime).unix() -
            dayjs(b.MonitoredVehicleJourney.OriginAimedDepartureTime).unix(),
        )
      : [vehicles]
    )
      .filter(
        (vehicle, index, vehicles) =>
          typeof vehicle.MonitoredVehicleJourney.VehicleLocation !== 'undefined' &&
          vehicles.findIndex((v) => v.VehicleMonitoringRef === vehicle.VehicleMonitoringRef) === index,
      )
      .map(async (vehicle) => {
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
        return {
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
          stopTimes: [
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
                  timestamp: isCancelled
                    ? null
                    : dayjs(stopCall.ExpectedDepartureTime ?? stopCall.ExpectedArrivalTime).unix(),
                  delta: isCancelled
                    ? null
                    : dayjs(stopCall.ExpectedDepartureTime ?? stopCall.ExpectedArrivalTime).diff(
                        stopCall.AimedDepartureTime ?? stopCall.AimedArrivalTime,
                        'seconds',
                      ),
                  isRealtime: true,
                };
              }) ?? []),
          ],
          timestamp: timestamp,
          activityRegistered: true,
        };
      }),
  );
}
