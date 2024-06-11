//- Options
import type { Dayjs } from 'dayjs';

export type GtfsProperties = {
  id: string;
  routePrefix?: string;
  staticResourceHref: string;
  tripUpdateHref?: string;
  vehiclePositionHref?: string;
  allowScheduled?: ((trip: Trip, resource: GtfsResource) => boolean) | boolean;
  mapTripUpdateEntities?: (entities: TripUpdateEntity[], resource: GtfsResource) => TripUpdateEntity[];
  mapVehiclePositionEntities?: (entities: VehiclePositionEntity[], resource: GtfsResource) => VehiclePositionEntity[];
  afterInit?: (resource: GtfsResource) => unknown;
  getOperator?: (trip: Trip) => string;
  getVehicleNumber?: (descriptor: VehicleDescriptor) => string | null;
  missingStopTimeUpdateStrategy?: 'PROPAGATE-DELAY' | 'NO-DATA' | 'SKIP';
  shapesStrategy?: 'IGNORE' | 'LOAD-IF-PRESENT' | 'GENERATE';
  registerActivity?: boolean;
};

//- GTFS Static

export type Service = {
  id: string;
  days: [boolean, boolean, boolean, boolean, boolean, boolean, boolean];
  inclusions: string[];
  exclusions: string[];
  startDate: string;
  endDate: string;
};

export type GtfsResource = {
  services: Map<string, Service>;
  stops: Map<string, Stop>;
  trips: Map<string, Trip>;
  scheduledTrips: Trip[];
  lastModified: Dayjs | null;
  loadedAt: Dayjs;
};

export type Shape = {
  id: string;
  points: { lat: number; lon: number; distance: number; sequence: number }[];
};

export type Stop = {
  id: string;
  name: string;
  lat: number;
  lon: number;
};

export type StopTime = {
  sequence: number;
  stop: Stop;
  time: string;
  distanceTraveled: number | null;
};

export type Trip = {
  id: string;
  service: Service;
  block: string | null;
  route: string;
  direction: number;
  headsign: string;
  stops: StopTime[];
  shape: Shape | null;
};

//- GTFS Real-Time

export type StopTimeEvent = {
  delay?: number;
  time?: string;
};

export type VehicleDescriptor = {
  id: string;
  label?: string;
};

export type TripUpdateEntity = {
  id: string;
  tripUpdate: {
    stopTimeUpdate: Array<{
      scheduleRelationship?: 'SCHEDULED' | 'SKIPPED' | 'NO-DATA';
      arrival?: StopTimeEvent;
      departure?: StopTimeEvent;
      stopId: string;
      stopSequence: number;
    }>;
    timestamp: string;
    trip: {
      tripId: string;
      routeId?: string;
      scheduleRelationship: 'SCHEDULED' | 'CANCELED';
    };
    vehicle?: VehicleDescriptor;
  };
};

export type GtfsRtTripUpdate = {
  header: {
    gtfsRealtimeVersion: string;
    timestamp: string;
  };
  entity: TripUpdateEntity[];
};

export type VehiclePositionEntity = {
  id: string;
  vehicle: {
    currentStatus: 'STOPPED_AT' | 'IN_TRANSIT_TO';
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

export type GtfsRtVehiclePosition = {
  header: {
    gtfsRealtimeVersion: string;
    timestamp: string;
  };
  entity: VehiclePositionEntity[];
};

// ---

type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];
