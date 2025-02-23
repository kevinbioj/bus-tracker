//- OPERATORS
export type Network = {
  slug: string;
  name: string;
  routes: Route[];
  color?: string;
  textColor?: string;
};

export type Operator = {
  id: string;
  name: string;
  hasHistory: boolean;
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
  routeIds?: string[];
  mapOnly?: boolean;
  noCartridge?: boolean;
  name: string;
  colors: { background: string; text: string };
  destinations: [];
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
