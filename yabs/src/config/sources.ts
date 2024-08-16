import type { GtfsProperties, Service } from '../fetchers/gtfs/types.js';
import type { SiriProperties } from '../fetchers/siri/types.js';

export type Source = {
  id: string;
  refreshCron: string;
  type: string;
} & ({ type: 'GTFS'; gtfsProperties: GtfsProperties } | { type: 'SIRI-XML'; siriProperties: SiriProperties });

const sources: Source[] = [
  {
    id: 'TAG',
    refreshCron: '0,15,30,45 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'TAG',
      staticResourceHref: 'https://data.mobilites-m.fr/api/gtfs/SEM',
      routePrefix: 'TAG',
      afterInit: (resource) => {
        for (const stop of resource.stops.values()) {
          if (stop.name.indexOf(', ') < 0) continue;
          const [city, name] = stop.name.split(', ');
          stop.name = `${city.toUpperCase()} - ${name}`;
        }
      },
    },
  },
];

export default sources;
