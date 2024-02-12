export type SiriProperties = {
  id: string;
  prefix?: string;
  siriEndpoint: string;
  getOperator: (vehicle: SiriVehicleActivity) => string;
  getRouteId: (vehicle: SiriVehicleActivity) => string;
  getVehicleLabel: (vehicle: SiriVehicleActivity) => number;
};

//- SIRI Response

export type SiriVehicleActivity = {
  RecordedAtTime: string;
  VehicleMonitoringRef: string;
  MonitoredVehicleJourney: {
    FramedVehicleJourneyRef: {
      DatedVehicleJourneyRef: string;
    };
    LineRef: string;
    DirectionName: number;
    DestinationName: string;
    OriginRef: string;
    OriginName: string;
    OriginAimedDepartureTime: string;
    VehicleLocation?: {
      Longitude: number;
      Latitude: number;
    };
    MonitoredCall: SiriStopCall;
    OnwardCalls: {
      OnwardCall: SiriStopCall[];
    };
  };
};

export type SiriStopCall = {
  StopPointRef: string;
  Order: number;
  StopPointName: string;
  AimedArrivalTime: string;
  ExpectedArrivalTime: string;
  AimedDepartureTime?: string;
  ExpectedDepartureTime?: string;
};
