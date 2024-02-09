//- OPERATORS
import { GirouetteData } from "~/components/interactive-map/girouette";

export type Operator = {
  id: string;
  name: string;
  logo: {
    href: string;
    size: [number, number];
  };
  issues: {
    message: string;
    status: "ONGOING" | "RESOLVED";
  }[];
  note?: string;
};

//- ROUTES

export type Route = {
  id: string;
  mapOnly?: boolean;
  noCartridge?: boolean;
  name: string;
  colors: { background: string; text: string };
  destinations: RouteTripDestination[];
};

export type RouteDestination = {
  alternate?: string;
  name: string;
  city?: string;
  autoHide?: boolean;
  girouette?: GirouetteData;
};

export type RouteDirectionDestination = RouteDestination;

export type RouteTripDestination = { id: string[] } & RouteDestination;

export type StopTime = {
  id: string;
  sequence: number;
  name: string;
  timestamp: number | null;
  isRealtime: boolean;
};

//- TRIPS

export type TripData = {
  id: string;
  source: string;
  stopTimes: StopTime[];
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

//- VEHICLES

export type VehicleData = {
  id: string;
  source: string;
  trip: {
    id: string;
    route: string;
    direction: number;
    headsign: string | null;
    stopTimes: StopTime[];
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

//- HISTORY

type BaseVehicleDto = {
  id: number;
  operator: string;
  number: number;
  type: "BUS" | "SUBWAY" | "TRAMWAY";
  name: string | null;
  tcId: number | null;
};

export type LightVehicleDto = BaseVehicleDto & {
  currentRouteId: string | null;
  sinceTime: string | null;
};

export type VehicleDto = BaseVehicleDto & {
  activeOn: string[];
  activities: VehicleActivityDto[];
};

export type VehicleActivityDto = {
  routeId: string;
  startTime: string;
  endTime: string | null;
};
