import type { GtfsProperties } from '../fetchers/gtfs/types.js';
import type { SiriProperties } from '../fetchers/siri/types.js';

export type Source = {
  id: string;
  refreshCron: string;
  type: string;
} & ({ type: 'GTFS'; gtfsProperties: GtfsProperties } | { type: 'SIRI-XML'; siriProperties: SiriProperties });

const sources: Source[] = [
  {
    id: 'STAR',
    refreshCron: '0,30 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'STAR',
      routePrefix: 'STAR',
      staticResourceHref: 'https://eu.ftp.opendatasoft.com/star/gtfs/GTFS_1_20240531_20240709_20240531152100.zip',
      tripUpdateHref: 'https://proxy.transport.data.gouv.fr/resource/star-rennes-integration-gtfs-rt-trip-update',
      vehiclePositionHref:
        'https://proxy.transport.data.gouv.fr/resource/star-rennes-integration-gtfs-rt-vehicle-position',
    },
  },
];

export default sources;
