import { Source } from "~/config/sources";

//- Models

export type Calendar = {
  id: string;
  days: [boolean, boolean, boolean, boolean, boolean, boolean, boolean];
  whitelist: string[];
  blacklist: string[];
  from: string;
  to: string;
};

export type Resource = {
  calendars: Map<string, Calendar>;
  stops: Map<string, Stop>;
  trips: Map<string, Trip>;
  source: Source;
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

// --- YABS

export type YabsEntry = {
  id: string;
  source: string;
  stopTimes: {
    id: string;
    name: string;
    sequence: number;
    timestamp: number | null;
    isRealtime: boolean;
  }[];
  trip: {
    id: string;
    calendar: string;
    route: string;
    direction: number;
    headsign: string | null;
  };
  vehicle: {
    id: string | null;
    position: {
      latitude: number;
      longitude: number;
      timestamp: number;
      type: "GPS" | "REALTIME" | "SCHEDULED";
    };
  };
  timestamp: number;
};

// --- Responses

type YabsStopTime = {
  id: string;
  sequence: number;
  name: string;
  timestamp: number | null;
  delta: number | null;
};

export type TripData = {
  id: string;
  source: string;
  stopTimes: YabsStopTime[];
  trip: {
    id: string;
    route: string;
    direction: number;
    headsign: string | null;
  };
  vehicle: {
    id: string | null;
  };
  timestamp: number;
};

export type VehicleData = {
  id: string;
  source: string;
  trip: {
    id: string;
    route: string;
    direction: number;
    headsign: string | null;
    stopTimes: YabsStopTime[];
  };
  vehicle: {
    id: string | null;
    position: {
      latitude: number;
      longitude: number;
      timestamp: number;
      type: "GPS" | "REALTIME" | "SCHEDULED";
    };
  };
  timestamp: number;
};
