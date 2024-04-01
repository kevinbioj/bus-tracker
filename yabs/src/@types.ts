export type YabsEntry = {
  id: string;
  source: string;
  stopTimes: {
    id: string;
    name: string;
    sequence: number;
    timestamp: number | null;
    delta: number | null;
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
      type: 'GPS' | 'REALTIME' | 'SCHEDULED';
    };
    ledColor: 'YELLOW' | 'WHITE' | null;
  };
  timestamp: number;
};
