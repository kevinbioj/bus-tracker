import type { GtfsProperties } from '../fetchers/gtfs/types.js';
import type { SiriProperties } from '../fetchers/siri/types.js';

export type Source = {
  id: string;
  refreshCron: string;
  type: string;
} & ({ type: 'GTFS'; gtfsProperties: GtfsProperties } | { type: 'SIRI-XML'; siriProperties: SiriProperties });

const sources: Source[] = [
  {
    id: 'IRIGO',
    refreshCron: '0,30 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'IRIGO',
      staticResourceHref: 'https://chouette.enroute.mobi/api/v1/datas/Irigo/gtfs.zip',
      tripUpdateHref: 'https://ara-api.enroute.mobi/irigo/gtfs/trip-updates',
    },
  },
];

export default sources;
