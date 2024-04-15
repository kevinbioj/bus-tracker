import dayjs from 'dayjs';
import { P, match } from 'ts-pattern';

import { GtfsProperties, Trip, TripUpdateEntity, VehiclePositionEntity } from '~/yabs/fetcher/gtfs/@types';
import { SiriProperties } from '~/yabs/fetcher/siri/@types';

const capCotentinDevices = new Map([['de119cd6365c1d49', '908']]);

const zenbusFilter = (entity: VehiclePositionEntity) =>
  dayjs().diff(dayjs.unix(+entity.vehicle.timestamp), 'minutes') < 10;

export type Source = {
  id: string;
  refreshCron: string;
  type: string;
} & ({ type: 'GTFS'; gtfsProperties: GtfsProperties } | { type: 'SIRI-XML'; siriProperties: SiriProperties });

const sources: Source[] = [
  {
    id: 'TCAR',
    refreshCron: '0,30 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'TCAR',
      staticResourceHref:
        'http://exs.tcar.cityway.fr/gtfs.aspx?key=OPENDATA&operatorCode=ASTUCE&companyCode=ASTUCE:002',
      tripUpdateHref: 'https://tsi.tcar.cityway.fr/ftp/gtfsrt/Astuce.TripUpdate.pb',
      vehiclePositionHref: 'https://tsi.tcar.cityway.fr/ftp/gtfsrt/Astuce.VehiclePosition.pb',
      routePrefix: 'ASTUCE',
      filters: {
        scheduled: (trip) => {
          if (['35', '89', '322', '340'].includes(trip.route)) return true;
          if (trip.route === '01' && ['Stade Diochon PETIT-QUEVILLY', 'Lafayette ROUEN'].includes(trip.headsign))
            return true;
          if (trip.route === '07' && ['Hôtel de Ville SOTTEVILLE-LÈS-ROUEN', 'Lafayette ROUEN'].includes(trip.headsign))
            return true;
          return false;
        },
      },
      getOperator: (trip) =>
        trip.calendar.id.startsWith('IST') || trip.calendar.id.startsWith('INT') || trip.route === '89'
          ? 'TNI'
          : 'TCAR',
      timeSlice: 'FIRST_REALTIME',
      propagateDelays: true,
    },
  },
  {
    id: 'TCAR-TGR',
    refreshCron: '0,10,20,30,40,50 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'TCAR-TGR',
      staticResourceHref: 'https://pysae.com/api/v2/groups/tcar/gtfs/pub',
      tripUpdateHref: 'https://pysae.com/api/v2/groups/tcar/gtfs-rt',
      vehiclePositionHref: 'https://pysae.com/api/v2/groups/tcar/gtfs-rt',
      getOperator: () => 'TNI',
      getVehicleNumber: () => null,
      generateShapes: true,
      routePrefix: 'ASTUCE-TGR',
      filters: {
        scheduled: (trip) => trip.route !== 'F6',
      },
    },
  },
  {
    id: 'TAE',
    refreshCron: '0,30 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'TAE',
      staticResourceHref: 'https://gtfs.tae76.fr/gtfs/feed.zip',
      tripUpdateHref: 'https://gtfs.tae76.fr/gtfs-rt.bin',
      routePrefix: 'ASTUCE',
      generateShapes: true,
      filters: {
        scheduled: () => false,
        tripUpdate: (trip, index, array) => {
          if (typeof trip.tripUpdate.vehicle?.id !== 'string') return false;
          return index === array.findIndex((item) => trip.tripUpdate.vehicle!.id === item.tripUpdate.vehicle?.id);
        },
      },
    },
  },
  {
    id: 'TNI',
    refreshCron: '0 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'TNI',
      staticResourceHref: 'https://www.data.gouv.fr/fr/datasets/r/e39d7fe1-8c0c-4273-9236-d7c458add7a0',
      tripUpdateHref: 'https://proxy.transport.data.gouv.fr/resource/astuce-26-30-rouen-gtfs-rt-trip-update',
      vehiclePositionHref: 'https://proxy.transport.data.gouv.fr/resource/astuce-26-30-rouen-gtfs-rt-vehicle-position',
      routePrefix: 'ASTUCE',
      generateShapes: true,
    },
  },
  {
    id: 'HANGA',
    refreshCron: '0 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'HANGA',
      staticResourceHref:
        'http://exs.tcar.cityway.fr/gtfs.aspx?key=OPENDATA&operatorCode=ASTUCE&companyCode=ASTUCE:004',
      routePrefix: 'ASTUCE',
      getOperator: (trip) => (['204', '214'].includes(trip.route) ? 'TNI' : 'HANGA'),
    },
  },
  {
    id: 'TWISTO',
    refreshCron: '15,45 * * * * *',
    type: 'SIRI-XML',
    siriProperties: {
      id: 'TWISTO',
      prefix: 'TWISTO',
      siriEndpoint: 'https://api.okina.fr/gateway/cae/realtime/anshar/services',
      getOperator: () => 'TWISTO',
      getVehicleLabel: (ref) => +ref.replace('Keolis_', ''),
    },
  },
  {
    id: 'LIA',
    refreshCron: '5,15,25,35,45,55 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'LIA',
      staticResourceHref: 'https://www.data.gouv.fr/fr/datasets/r/1e666e24-58ee-46b9-8952-ea2755ba88f2',
      tripUpdateHref: 'https://lia-gtfsrt.bus-tracker.xyz/trip-updates',
      vehiclePositionHref: 'https://lia-gtfsrt.bus-tracker.xyz/vehicle-positions',
      routePrefix: 'LIA',
      filters: {
        scheduled: (trip) => ['12', '13', '21'].includes(trip.route),
        tripUpdate: (tripUpdate, _, __, resource) => {
          const trip = resource.trips.get(tripUpdate.tripUpdate.trip.tripId);
          if (typeof trip !== 'undefined') {
            tripUpdate.tripUpdate.trip.routeId = trip.route;
          }
          return true;
        },
        vehiclePosition: (vehiclePosition, _, __, resource) => {
          const trip = resource.trips.get(vehiclePosition.vehicle.trip.tripId);
          if (typeof trip !== 'undefined') {
            vehiclePosition.vehicle.trip.routeId = trip.route;
          }
          return true;
        },
      },
      afterInit: (resource) => {
        for (const [_, trip] of resource.trips) {
          if (trip.route !== 'T') continue;
          const [first, last] = [trip.stops.at(0)!.stop, trip.stops.at(-1)!.stop];
          trip.route = match([first.name, last.name])
            .with(
              P.union(
                ['La Plage', 'Grand Hameau'],
                ['Rond-Point', 'Grand Hameau'],
                ['Grand Hameau', 'Rond-Point'],
                ['Grand Hameau', 'La Plage'],
              ),
              () => 'A',
            )
            .with(
              P.union(
                ['La Plage', 'Pré Fleuri'],
                ['Pré Fleuri', 'La Plage'],
                ['Rond-Point', 'La Plage'],
                ['Pré Fleuri', 'Rond-Point'],
              ),
              () => 'B',
            )
            .otherwise(() => 'T');
        }
      },
    },
  },
  {
    id: 'LIA-LER',
    refreshCron: '30 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'LIA-LER',
      staticResourceHref: 'https://gtfs.kevinbioj.fr/sncf-ler.zip',
      tripUpdateHref: 'https://proxy.transport.data.gouv.fr/resource/sncf-ter-gtfs-rt-trip-updates',
      routePrefix: 'LIA',
      registerActivity: false,
      filters: {
        scheduled: () => false,
        tripUpdate: (tripUpdate, _, __, resource) => {
          const tripId = tripUpdate.tripUpdate.trip.tripId.split(':')[0];
          const trip = resource.trips.get(tripId);
          if (typeof trip !== 'undefined') {
            tripUpdate.tripUpdate.trip.tripId = tripId;
            // @ts-expect-error Just for this ressource 🙏
            tripUpdate.tripUpdate.vehicle = { id: trip.trainNumber ?? null };
          }
          return true;
        },
      },
      afterInit: (resource) => {
        const transformedTrips: Trip[] = [...resource.trips.values()].map((trip) => {
          return {
            ...trip,
            id: trip.id.split(':')[0],
            headsign: trip.stops.at(-1)!.stop.name,
            trainNumber: trip.headsign,
          };
        });
        resource.trips.clear();
        transformedTrips.forEach((trip) => resource.trips.set(trip.id, trip));
      },
      getOperator: () => 'LIA',
    },
  },
  {
    id: 'SEMO',
    refreshCron: '0,20,40 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'SEMO',
      routePrefix: 'SEMO',
      staticResourceHref: 'https://www.data.gouv.fr/fr/datasets/r/98bbbf7c-10ff-48a0-afc2-c5f7b3dda5af',
      filters: {
        scheduled: (trip) => !trip.route.startsWith('S'),
      },
    },
  },
  {
    id: 'TRANSURBAIN',
    refreshCron: '10,30,50 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'TRANSURBAIN',
      routePrefix: 'TRANSURBAIN',
      staticResourceHref: 'https://www.data.gouv.fr/fr/datasets/r/ec78df83-2e60-4284-acc3-86a0baa76bf0',
    },
  },
  {
    id: 'NOMAD',
    refreshCron: '0,20,40 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'NOMAD',
      staticResourceHref: 'https://gtfs.kevinbioj.fr/nomad.zip',
      filters: { scheduled: (trip) => trip.route !== '530' },
      routePrefix: 'NOMAD',
      getOperator: () => 'NOMAD',
    },
  },
  {
    id: 'NOMAD-GEO3D',
    refreshCron: '30 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'NOMAD-GEO3D',
      staticResourceHref: 'https://gtfs.kevinbioj.fr/nomad-geo3d.zip',
      tripUpdateHref: 'https://lrn.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/trip-updates',
      vehiclePositionHref: 'https://lrn.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/vehicle-positions',
      filters: { scheduled: () => false },
      routePrefix: 'NOMAD',
      getOperator: () => 'NOMAD',
    },
  },
  {
    id: 'SNGO',
    refreshCron: '15 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'SNGO',
      routePrefix: 'SNGO',
      staticResourceHref: 'https://www.data.gouv.fr/fr/datasets/r/71bf48f1-178e-4ce3-ba9d-361cc5be76a7',
      tripUpdateHref: 'https://tnvs.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/trip-updates',
      vehiclePositionHref: 'https://tnvs.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/vehicle-positions',
      getOperator: () => 'SNGO',
    },
  },
  {
    id: 'DEEPMOB',
    refreshCron: '15 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'DEEPMOB',
      routePrefix: 'DEEPMOB',
      staticResourceHref: 'https://www.data.gouv.fr/fr/datasets/r/62248658-0eba-4f4e-b367-aaea635ecd38',
      tripUpdateHref: 'https://tud.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/trip-updates',
      vehiclePositionHref: 'https://tud.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/vehicle-positions',
      filters: {
        scheduled: (trip) => ['1', '2', '3', '97', '14'].includes(trip.route),
      },
      getOperator: () => 'DEEPMOB',
    },
  },
  {
    id: 'CAPCOT',
    refreshCron: '15,45 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'CAPCOT',
      routePrefix: 'CAPCOT',
      staticResourceHref: 'https://pysae.com/api/v2/groups/transdev-cotentin/gtfs/pub',
      tripUpdateHref: 'https://pysae.com/api/v2/groups/transdev-cotentin/gtfs-rt',
      vehiclePositionHref: 'https://pysae.com/api/v2/groups/transdev-cotentin/gtfs-rt',
      getOperator: () => 'CAPCOT',
      getVehicleNumber: (descriptor) => {
        if (typeof descriptor.label === 'string') return descriptor.label;
        return capCotentinDevices.get(descriptor.id) ?? null;
      },
      filters: { scheduled: () => false },
    },
  },
  {
    id: 'REZOBUS',
    refreshCron: '15,45 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'REZOBUS',
      routePrefix: 'REZOBUS',
      staticResourceHref: 'https://pysae.com/api/v2/groups/caux-seine-agglo/gtfs/pub',
      tripUpdateHref: 'https://pysae.com/api/v2/groups/caux-seine-agglo/gtfs-rt',
      vehiclePositionHref: 'https://pysae.com/api/v2/groups/caux-seine-agglo/gtfs-rt',
      getOperator: () => 'REZOBUS',
      getVehicleNumber: (descriptor) => descriptor.label ?? null,
      filters: {
        scheduled: (trip) => !['14', '30'].includes(trip.route),
      },
      afterInit: (resource) => {
        resource.trips.forEach((trip) => {
          const lastStopTime = trip.stops.at(-1);
          if (typeof lastStopTime === 'undefined') return;
          trip.headsign = lastStopTime.stop.name;
        });
      },
    },
  },
  {
    id: 'MOCA',
    refreshCron: '25,55 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'MOCA',
      routePrefix: 'MOCA',
      staticResourceHref: 'https://pysae.com/api/v2/groups/moca/gtfs/pub',
      tripUpdateHref: 'https://pysae.com/api/v2/groups/moca/gtfs-rt',
      vehiclePositionHref: 'https://pysae.com/api/v2/groups/moca/gtfs-rt',
      getVehicleNumber: (descriptor) => descriptor.label ?? null,
      filters: { scheduled: () => false },
    },
  },
  {
    id: 'ASTROBUS',
    refreshCron: '15,45 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'ASTROBUS',
      routePrefix: 'ASTROBUS',
      staticResourceHref: 'https://zenbus.net/gtfs/static/download.zip?dataset=astrobus',
      tripUpdateHref: 'https://zenbus.net/gtfs/rt/poll.proto?dataset=astrobus',
      vehiclePositionHref: 'https://zenbus.net/gtfs/rt/poll.proto?dataset=astrobus',
      filters: {
        scheduled: () => false,
        vehiclePosition: zenbusFilter,
      },
      getOperator: () => 'ASTROBUS',
      getVehicleNumber: () => null,
    },
  },
  {
    id: 'HOBUS',
    refreshCron: '45 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'HOBUS',
      routePrefix: 'HOBUS',
      staticResourceHref: 'https://zenbus.net/gtfs/static/download.zip?dataset=hobus',
      tripUpdateHref: 'https://zenbus.net/gtfs/rt/poll.proto?dataset=hobus',
      vehiclePositionHref: 'https://zenbus.net/gtfs/rt/poll.proto?dataset=hobus',
      filters: {
        scheduled: () => false,
        vehiclePosition: zenbusFilter,
      },
      getOperator: () => 'HOBUS',
      getVehicleNumber: () => null,
    },
  },
  {
    id: 'NEVA',
    refreshCron: '45 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'NEVA',
      routePrefix: 'NEVA',
      staticResourceHref: 'https://zenbus.net/gtfs/static/download.zip?dataset=granville',
      tripUpdateHref: 'https://zenbus.net/gtfs/rt/poll.proto?dataset=granville',
      vehiclePositionHref: 'https://zenbus.net/gtfs/rt/poll.proto?dataset=granville',
      filters: {
        scheduled: () => false,
        vehiclePosition: zenbusFilter,
      },
      getOperator: () => 'NEVA',
      getVehicleNumber: () => null,
    },
  },
  {
    id: 'NEMUS',
    refreshCron: '15 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'NEMUS',
      routePrefix: 'NEMUS',
      staticResourceHref: 'https://www.data.gouv.fr/fr/datasets/r/821cfc05-c8db-48a5-a830-9358054bee95',
      tripUpdateHref: 'https://nemus-rt.bus-tracker.xyz/gtfs-rt/trip-updates',
      vehiclePositionHref: 'https://nemus-rt.bus-tracker.xyz/gtfs-rt/vehicle-positions',
      filters: {
        scheduled: () => false,
      },
      getOperator: () => 'NEMUS',
      getVehicleNumber: () => null,
    },
  },
  {
    id: 'BYBUS',
    refreshCron: '8,18,28,38,48,58 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'BYBUS',
      routePrefix: 'BYBUS',
      staticResourceHref: 'https://pysae.com/api/v2/groups/keolis-bayeux/gtfs/pub',
      tripUpdateHref: 'https://pysae.com/api/v2/groups/keolis-bayeux/gtfs-rt',
      vehiclePositionHref: 'https://pysae.com/api/v2/groups/keolis-bayeux/gtfs-rt',
      filters: {
        scheduled: (trip) => trip.route !== 'TAD 1',
      },
      getVehicleNumber: (descriptor) => descriptor.label ?? null,
    },
  },
  {
    id: 'LBUS',
    refreshCron: '45 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'LBUS',
      routePrefix: 'LBUS',
      staticResourceHref: 'https://zenbus.net/gtfs/static/download.zip?dataset=bernay',
      tripUpdateHref: 'https://zenbus.net/gtfs/rt/poll.proto?dataset=bernay',
      vehiclePositionHref: 'https://zenbus.net/gtfs/rt/poll.proto?dataset=bernay',
      filters: {
        scheduled: () => false,
        vehiclePosition: zenbusFilter,
      },
      getOperator: () => 'LBUS',
      getVehicleNumber: () => null,
    },
  },
  {
    id: 'LEBUS',
    refreshCron: '5,20,35,50 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'LEBUS',
      routePrefix: 'LEBUS',
      staticResourceHref: 'http://exs.atm.cityway.fr/gtfs.aspx?key=OPENDATA&operatorCode=LEBUS',
      generateShapes: true,
      afterInit: (resource) => {
        resource.stops.forEach((stop) => {
          stop.name = stop.name.replace('Pont-audemer : ', '');
        });
      },
    },
  },
];

export default sources;
