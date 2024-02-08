import { loadSync } from "protobufjs";

const proto = loadSync("gtfsrt.proto").root.lookupType("transit_realtime.FeedMessage");

export type VehicleDescriptor = {
  id: string;
  label?: string;
};

// ---

export type TripUpdateEntity = {
  id: string;
  tripUpdate: {
    stopTimeUpdate: Array<{
      scheduleRelationship?: "SCHEDULED" | "SKIPPED" | "NO-DATA";
      arrival?: {
        delay?: number;
        time?: string;
      };
      stopId: string;
    }>;
    timestamp: string;
    trip: {
      tripId: string;
      routeId?: string;
    };
    vehicle?: VehicleDescriptor;
  };
};

type GtfsRtTripUpdate = {
  header: {
    gtfsRealtimeVersion: string;
    timestamp: string;
  };
  entity: TripUpdateEntity[];
};

export function decodeTripUpdate(input: Buffer): GtfsRtTripUpdate {
  const data = proto.decode(input).toJSON() as GtfsRtTripUpdate;
  return {
    ...data,
    entity: data.entity?.filter((entity) => typeof entity.tripUpdate !== "undefined") ?? [],
  };
}

// ---

export type VehiclePositionEntity = {
  id: string;
  vehicle: {
    currentStatus: "STOPPED_AT" | "IN_TRANSIT_TO";
    currentStopSequence?: number;
    position: {
      latitude: number;
      longitude: number;
    };
    timestamp: string;
    trip: {
      tripId: string;
      routeId?: string;
    };
    vehicle: VehicleDescriptor;
  };
};

type GtfsRtVehiclePosition = {
  header: {
    gtfsRealtimeVersion: string;
    timestamp: string;
  };
  entity: VehiclePositionEntity[];
};

export function decodeVehiclePosition(input: Buffer): GtfsRtVehiclePosition {
  const data = proto.decode(input).toJSON() as GtfsRtVehiclePosition;
  return {
    ...data,
    entity: data.entity?.filter((entity) => typeof entity.vehicle !== "undefined") ?? [],
  };
}
