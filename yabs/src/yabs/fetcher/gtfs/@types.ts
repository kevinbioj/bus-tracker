//- Options

export type GtfsProperties = {
  id: string;
  routePrefix?: string;
  staticResourceHref: string;
  tripUpdateHref?: string;
  vehiclePositionHref?: string;
  filters?: {
    scheduled?: (trip: Trip, index: number, array: Trip[]) => boolean;
    tripUpdate?: (tripUpdate: TripUpdateEntity, index: number, array: TripUpdateEntity[]) => boolean;
    vehiclePosition?: (tripUpdate: VehiclePositionEntity, index: number, array: VehiclePositionEntity[]) => boolean;
  };
  getOperator?: (trip: Trip) => string;
  getVehicleNumber?: (descriptor: VehicleDescriptor) => string | null;
  generateShapes?: boolean;
  propagateDelays?: boolean;
};

//- GTFS Static

export type Calendar = {
  id: string;
  days: [boolean, boolean, boolean, boolean, boolean, boolean, boolean];
  whitelist: string[];
  blacklist: string[];
  from: string;
  to: string;
};

export type GtfsResource = {
  calendars: Map<string, Calendar>;
  stops: Map<string, Stop>;
  trips: Map<string, Trip>;
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
  calendar: Calendar;
  block: string | null;
  route: string;
  direction: number;
  headsign: string;
  stops: StopTime[];
  shape: Shape | null;
};

//- GTFS Real-Time

export type VehicleDescriptor = {
  id: string;
  label?: string;
};

export type TripUpdateEntity = {
  id: string;
  tripUpdate: {
    stopTimeUpdate: Array<{
      scheduleRelationship?: 'SCHEDULED' | 'SKIPPED' | 'NO-DATA';
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