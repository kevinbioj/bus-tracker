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
    refreshCron: '0,15,30,45 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'STAR',
      routePrefix: 'STAR',
      staticResourceHref: 'https://gtfs.bus-tracker.fr/star.zip',
      tripUpdateHref: 'https://proxy.transport.data.gouv.fr/resource/star-rennes-integration-gtfs-rt-trip-update',
      vehiclePositionHref:
        'https://proxy.transport.data.gouv.fr/resource/star-rennes-integration-gtfs-rt-vehicle-position',
      allowScheduled: (trip) => trip.route === '4-1001' || trip.route === '4-1002', // métros a et b uniquement
      afterInit: (resource) => {
        for (const scheduledTrips of resource.scheduledTrips) {
          scheduledTrips.id = `${+scheduledTrips.id}`;
        }
      }
    },
  },
];

export default sources;
