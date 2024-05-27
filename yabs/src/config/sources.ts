import type { GtfsProperties } from '../fetchers/gtfs/types.js';
import type { SiriProperties } from '../fetchers/siri/types.js';

export type Source = {
  id: string;
  refreshCron: string;
  type: string;
} & ({ type: 'GTFS'; gtfsProperties: GtfsProperties } | { type: 'SIRI-XML'; siriProperties: SiriProperties });

const mainRoutes = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', 'A', 'B', 'C', 'NavM', 'Tbus'];

const sources: Source[] = [
  {
    id: 'IRIGO',
    refreshCron: '0,30 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'IRIGO',
      staticResourceHref: 'https://chouette.enroute.mobi/api/v1/datas/Irigo/gtfs.zip',
      tripUpdateHref: 'https://ara-api.enroute.mobi/irigo/gtfs/trip-updates',
      allowScheduled: false,
      mapTripUpdateEntities: (tripUpdates) =>
        tripUpdates.filter((tripUpdate) => mainRoutes.includes(tripUpdate.tripUpdate.trip.routeId ?? '')),
    },
  },
  {
    id: 'IRIGO-SUB',
    refreshCron: '0,30 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'IRIGO',
      staticResourceHref: 'https://pysae.com/api/v2/groups/irigo/gtfs/pub',
      tripUpdateHref: 'https://pysae.com/api/v2/groups/irigo/gtfs-rt',
      vehiclePositionHref: 'https://pysae.com/api/v2/groups/irigo/gtfs-rt',
      allowScheduled: false,
      getVehicleNumber: (descriptor) => (descriptor.label ? descriptor.label.trim() : null),
    },
  },
];

export default sources;
