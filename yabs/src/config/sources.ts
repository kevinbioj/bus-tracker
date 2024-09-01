import type { GtfsProperties } from '../fetchers/gtfs/types.js';
import type { SiriProperties } from '../fetchers/siri/types.js';

export type Source = {
  id: string;
  refreshCron: string;
  type: string;
} & ({ type: 'GTFS'; gtfsProperties: GtfsProperties } | { type: 'SIRI-XML'; siriProperties: SiriProperties });

const sources: Source[] = [
  {
    id: 'TBM',
    refreshCron: '0,15,30,45 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'TBM',
      staticResourceHref:
        'https://bdx.mecatran.com/utw/ws/gtfsfeed/static/bordeaux?apiKey=opendata-bordeaux-metropole-flux-gtfs-rt',
      tripUpdateHref:
        'https://bdx.mecatran.com/utw/ws/gtfsfeed/realtime/bordeaux?apiKey=opendata-bordeaux-metropole-flux-gtfs-rt',
      vehiclePositionHref:
        'https://bdx.mecatran.com/utw/ws/gtfsfeed/vehicles/bordeaux?apiKey=opendata-bordeaux-metropole-flux-gtfs-rt',
      allowScheduled: false,
      getVehicleNumber: (descriptor) => descriptor.id.split(':')[1],
      shapesStrategy: 'IGNORE',
      routePrefix: 'TBM',
    },
  },
];

export default sources;
