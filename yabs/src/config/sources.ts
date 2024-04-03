import { GtfsProperties } from '~/yabs/fetcher/gtfs/@types';
import { SiriProperties } from '~/yabs/fetcher/siri/@types';

export type Source = {
  id: string;
  refreshCron: string;
  type: string;
} & ({ type: 'GTFS'; gtfsProperties: GtfsProperties } | { type: 'SIRI-XML'; siriProperties: SiriProperties });

const sources: Source[] = [
  {
    id: 'DIVIA',
    refreshCron: '0,15,30,45 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'DIVIA',
      routePrefix: 'DIVIA',
      staticResourceHref: 'https://www.data.gouv.fr/fr/datasets/r/e0dbd217-15cd-4e28-9459-211a27511a34',
      tripUpdateHref: 'https://proxy.transport.data.gouv.fr/resource/divia-dijon-gtfs-rt-trip-update',
      vehiclePositionHref: 'https://proxy.transport.data.gouv.fr/resource/divia-dijon-gtfs-rt-vehicle-position',
      generateShapes: true,
      propagateDelays: true,
      filters: {
        scheduled: (trip) =>
          [
            '4-PL',
            '4-39',
            '4-61',
            '4-62',
            '4-63',
            '4-64',
            '4-65',
            '4-66',
            '4-67',
            '4-68',
            '4-69',
            '4-70',
            '4-71',
            '4-72',
            '4-73',
            '4-74',
            '4-75',
          ].includes(trip.route),
      },
    },
  },
];

export default sources;
