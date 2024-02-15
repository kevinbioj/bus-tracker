import dayjs from 'dayjs';
import { XMLParser } from 'fast-xml-parser';

import { SiriProperties, SiriVehicleActivity } from '~/yabs/fetcher/siri/@types';

const parser = new XMLParser();

const vehicleMonitoringRequestPayload = `<?xml version="1.0" encoding="utf-8"?>
<Siri xmlns="http://www.siri.org.uk/siri" version="2.0">
<ServiceRequest>
        <RequestorRef>BUS-TRACKER.XYZ</RequestorRef>
        <VehicleMonitoringRequest version="2.0" />
    </ServiceRequest>
</Siri>
`;

export async function computeSiriEntries(properties: SiriProperties) {
  const response = await fetch(properties.siriEndpoint, {
    body: vehicleMonitoringRequestPayload,
    headers: {
      'Content-Type': 'application/xml',
      'Content-Length': vehicleMonitoringRequestPayload.length.toString(),
      'User-Agent': 'Bus-Tracker.xyz/1.0',
    },
    method: 'POST',
  });
  if (!response.ok) return null;
  const payload = await response.text();
  const data = parser.parse(payload);
  const vehicles = data.Siri.ServiceDelivery.VehicleMonitoringDelivery.VehicleActivity as SiriVehicleActivity[];
  return vehicles
    .sort(
      (a, b) =>
        dayjs(a.MonitoredVehicleJourney.OriginAimedDepartureTime).unix() -
        dayjs(b.MonitoredVehicleJourney.OriginAimedDepartureTime).unix(),
    )
    .filter(
      (vehicle, index, vehicles) =>
        typeof vehicle.MonitoredVehicleJourney.VehicleLocation !== 'undefined' &&
        vehicles.findIndex((v) => v.VehicleMonitoringRef === vehicle.VehicleMonitoringRef) === index,
    )
    .map((vehicle) => {
      const timestamp = dayjs(vehicle.RecordedAtTime).unix();
      const vehicleLabel = properties.getVehicleLabel(vehicle);
      const calls = [
        vehicle.MonitoredVehicleJourney.MonitoredCall,
        ...(Array.isArray(vehicle.MonitoredVehicleJourney.OnwardCalls.OnwardCall)
          ? vehicle.MonitoredVehicleJourney.OnwardCalls.OnwardCall
          : typeof vehicle.MonitoredVehicleJourney.OnwardCalls.OnwardCall !== 'undefined'
            ? [vehicle.MonitoredVehicleJourney.OnwardCalls.OnwardCall]
            : []),
      ];
      return {
        id: `${properties.id}_VEHICLE_${vehicleLabel}`,
        source: properties.id,
        trip: {
          id: vehicle.MonitoredVehicleJourney.FramedVehicleJourneyRef.DatedVehicleJourneyRef,
          calendar: 'N/A',
          direction: +vehicle.MonitoredVehicleJourney.DirectionName - 1,
          headsign: vehicle.MonitoredVehicleJourney.DestinationName,
          route: properties.prefix
            ? `${properties.prefix}-${properties.getRouteId(vehicle)}`
            : properties.getRouteId(vehicle),
        },
        vehicle: {
          id: vehicleLabel.toString(),
          position: {
            latitude: vehicle.MonitoredVehicleJourney.VehicleLocation!.Latitude,
            longitude: vehicle.MonitoredVehicleJourney.VehicleLocation!.Longitude,
            timestamp,
            type: 'GPS' as const,
          },
        },
        stopTimes: [
          ...(dayjs().isBefore(vehicle.MonitoredVehicleJourney.OriginAimedDepartureTime)
            ? [
                {
                  id: vehicle.MonitoredVehicleJourney.OriginRef,
                  name: vehicle.MonitoredVehicleJourney.OriginName,
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
                id: stopCall.StopPointRef,
                name: stopCall.StopPointName,
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
      };
    });
}
