import dayjs from 'dayjs';

import type { GtfsProperties, Service, Trip, VehiclePositionEntity } from '../fetchers/gtfs/types.js';
import { parseTime } from '../fetchers/gtfs/utils/parse-time.js';
import type { SiriProperties } from '../fetchers/siri/types.js';

const capCotentinDevices = new Map([['de119cd6365c1d49', '908']]);

const zenbusFilter = (entities: VehiclePositionEntity[]) =>
  entities.filter((entity) => dayjs().diff(dayjs.unix(+entity.vehicle.timestamp), 'minutes') < 10);

export type Source = {
  id: string;
  refreshCron: string;
  type: string;
} & ({ type: 'GTFS'; gtfsProperties: GtfsProperties } | { type: 'SIRI-XML'; siriProperties: SiriProperties });

const hlpService: Service = {
  id: 'HLP_SERVICE',
  days: [false, false, false, false, false, false, false],
  startDate: '20230901',
  endDate: '20340831',
  exclusions: [],
  inclusions: [],
};

const sources: Source[] = [
  {
    id: 'TCAR',
    refreshCron: '0,15,30,45 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'TCAR',
      // ANCIENNE INFRA
      // staticResourceHref:
      //   'http://exs.tcar.cityway.fr/gtfs.aspx?key=OPENDATA&operatorCode=ASTUCE&companyCode=ASTUCE:002',
      // tripUpdateHref: 'https://tsi.tcar.cityway.fr/ftp/gtfsrt/Astuce.TripUpdate.pb',
      // vehiclePositionHref: 'https://tsi.tcar.cityway.fr/ftp/gtfsrt/Astuce.VehiclePosition.pb',
      // NOUVELLE INFRA
      staticResourceHref: 'https://api.mrn.cityway.fr/dataflow/offre-tc/download?provider=TCAR&dataFormat=GTFS',
      tripUpdateHref: 'https://gtfs.bus-tracker.fr/gtfs-rt/tcar/trip-updates',
      vehiclePositionHref: 'https://gtfs.bus-tracker.fr/gtfs-rt/tcar/vehicle-positions',
      routePrefix: 'ASTUCE',
      shapesStrategy: 'IGNORE',
      registerActivity: (trip) => trip.route !== 'HLP',
      afterInit: (resource) => {
        resource.services.set('HLP_SERVICE', hlpService);

        const makeHlpTrip = (id: string, headsign: string) =>
          resource.trips.set(id, {
            id,
            route: 'HLP',
            direction: 0,
            headsign,
            stops: [],
            service: hlpService,
            block: null,
            shape: null,
          });

        makeHlpTrip('DEPOT_2RIVI', 'Dépôt 2 Rivières');
        makeHlpTrip('DEPOT_ROUEN', 'Dépôt Champlain');
        makeHlpTrip('DEPOT_STJUL', 'Dépôt Saint-Julien');
      },
      mapVehiclePositionEntities: (entities) => {
        for (const entity of entities) {
          if (typeof entity.vehicle.trip === 'undefined') {
            const vehicleId = +entity.vehicle.vehicle.id;
            entity.vehicle.trip = {
              tripId:
                vehicleId >= 670 && vehicleId <= 685
                  ? 'DEPOT_ROUEN'
                  : vehicleId >= 831 && vehicleId <= 857
                    ? 'DEPOT_STJUL'
                    : 'DEPOT_2RIVI',
            };
          }
        }
        return entities;
      },
      allowScheduled: (trip) => {
        if (['06', '89', '99'].includes(trip.route)) return true;
        return false;
      },
      getOperator: (trip) =>
        trip.service.id.includes('IST_') ||
        trip.service.id.includes('INT_') ||
        ['06', '89'].includes(trip.route) ||
        trip.id === 'DEPOT_ROUEN'
          ? 'TNI'
          : 'TCAR',
    },
  },
  {
    id: 'TCAR-TGR',
    refreshCron: '5,35 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'TCAR-TGR',
      staticResourceHref: 'https://pysae.com/api/v2/groups/tcar/gtfs/pub',
      tripUpdateHref: 'https://pysae.com/api/v2/groups/tcar/gtfs-rt',
      vehiclePositionHref: 'https://pysae.com/api/v2/groups/tcar/gtfs-rt',
      getOperator: () => 'TNI',
      getVehicleNumber: (descriptor) => descriptor.label ?? null,
      shapesStrategy: 'GENERATE',
      routePrefix: 'ASTUCE-TGR',
      allowScheduled: (trip) => trip.route !== '446',
    },
  },
  {
    id: 'TAE',
    refreshCron: '2,32 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'TAE',
      staticResourceHref: 'https://gtfs.tae76.fr/gtfs/feed.zip',
      tripUpdateHref: 'https://gtfs.tae76.fr/gtfs-rt.bin',
      routePrefix: 'ASTUCE',
      allowScheduled: (trip) => trip.route === '120',
      mapTripUpdateEntities: (entities, resource) => {
        const tripStartTimes = entities.reduce((map, entity) => {
          const trip = resource.trips.get(entity.tripUpdate.trip.tripId)!;
          const startTime = parseTime(trip.stops.at(0)!.time).unix();
          map.set(trip.id, startTime);
          return map;
        }, new Map<string, number>());

        const sortedEntities = entities
          .filter(
            (tripUpdate) =>
              tripUpdate.tripUpdate.vehicle?.id &&
              dayjs().diff(dayjs.unix(+tripUpdate.tripUpdate.timestamp), 'minutes') < 60,
          )
          .sort(
            (a, b) => tripStartTimes.get(a.tripUpdate.trip.tripId)! - tripStartTimes.get(b.tripUpdate.trip.tripId)!,
          );

        const groupedEntities = Map.groupBy(sortedEntities, (tripUpdate) => tripUpdate.tripUpdate.vehicle!.id);
        return [...groupedEntities.values()].map((entities) => entities.at(0)!);
      },
      //   tripUpdate: (trip, index, array) => {
      //     if (typeof trip.tripUpdate.vehicle?.id !== 'string') return false;
      //     return index === array.findIndex((item) => trip.tripUpdate.vehicle!.id === item.tripUpdate.vehicle?.id);
      //   },
      // },
      missingStopTimeUpdateStrategy: 'SKIP',
      shapesStrategy: 'GENERATE',
    },
  },
  {
    id: 'TNI',
    refreshCron: '3 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'TNI',
      staticResourceHref: 'https://www.data.gouv.fr/fr/datasets/r/e39d7fe1-8c0c-4273-9236-d7c458add7a0',
      tripUpdateHref: 'https://proxy.transport.data.gouv.fr/resource/astuce-26-30-rouen-gtfs-rt-trip-update',
      vehiclePositionHref: 'https://proxy.transport.data.gouv.fr/resource/astuce-26-30-rouen-gtfs-rt-vehicle-position',
      routePrefix: 'ASTUCE',
      shapesStrategy: 'GENERATE',
    },
  },
  {
    id: 'HANGA',
    refreshCron: '4 * * * * *',
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
    refreshCron: '10,25,40,55 * * * * *',
    type: 'SIRI-XML',
    siriProperties: {
      id: 'TWISTO',
      prefix: 'TWISTO',
      siriEndpoint: 'https://api.okina.fr/gateway/cae/realtime/anshar/services',
      getOperator: () => 'TWISTO',
      getVehicleLabel: (ref) => ref.replace('Keolis_', ''),
    },
  },
  {
    id: 'LIA',
    refreshCron: '15,55 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'LIA',
      staticResourceHref: 'https://www.data.gouv.fr/fr/datasets/r/1e666e24-58ee-46b9-8952-ea2755ba88f2',
      tripUpdateHref: 'https://gtfs.bus-tracker.fr/gtfs-rt/lia/trip-updates',

      vehiclePositionHref: 'https://gtfs.bus-tracker.fr/gtfs-rt/lia/vehicle-positions',
      routePrefix: 'LIA',
      allowScheduled: (trip) => ['12', '13', '21'].includes(trip.route),
      afterInit: (resource) => {
        resource.services.set('HLP_SERVICE', hlpService);

        resource.trips.set('HLP', {
          id: 'HLP',
          route: 'HLP',
          direction: 0,
          headsign: 'Haut-le-pied',
          stops: [],
          block: null,
          service: hlpService,
          shape: null,
        });
      },
      registerActivity: (trip) => trip.route !== 'HLP',
      mapVehiclePositionEntities: (vehicles) => {
        for (const vehicle of vehicles) {
          if (typeof vehicle.vehicle.trip === 'undefined') {
            vehicle.vehicle.trip = { tripId: 'HLP' };
          }
        }
        return vehicles;
      },
    },
  },
  {
    id: 'NOMAD-TER',
    refreshCron: '20 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'NOMAD-TER',
      staticResourceHref: 'https://gtfs.bus-tracker.fr/nomad-train.zip',
      tripUpdateHref: 'https://proxy.transport.data.gouv.fr/resource/sncf-ter-gtfs-rt-trip-updates',
      routePrefix: 'NOMAD-TER',
      registerActivity: () => false,
      allowScheduled: false,
      mapTripUpdateEntities: (entities, resource) =>
        entities.map((tripUpdate) => {
          const tripId = tripUpdate.tripUpdate.trip.tripId.split(':')[0];
          const trip = resource.trips.get(tripId);
          if (trip) {
            tripUpdate.tripUpdate.trip.tripId = tripId;
            // @ts-expect-error Just for this ressource 🙏
            tripUpdate.tripUpdate.vehicle = { id: trip.trainNumber ?? null };
          }
          return tripUpdate;
        }),
      afterInit: (resource) => {
        const fixedTrips = new Map<string, Trip>();
        for (const trip of resource.trips.values()) {
          trip.id = trip.id.split(':')[0];
          // @ts-expect-error
          trip.trainNumber = trip.headsign;
          trip.headsign = trip.stops.at(-1)!.stop.name;
          fixedTrips.set(trip.id, trip);
        }
        resource.trips = fixedTrips;
      },
      getOperator: (trip) => (trip.route === 'FR:Line::325702f0-8067-4665-a0d8-5ebce7e59d0a:' ? 'LIA' : 'NOMAD'),
    },
  },
  {
    id: 'NOMAD',
    refreshCron: '20 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'NOMAD',
      staticResourceHref: 'https://gtfs.bus-tracker.fr/nomad.zip',
      // staticResourceHref: 'https://api.atm.cityway.fr/dataflow/offre-tc/download?provider=NOMAD&dataFormat=GTFS',
      tripUpdateHref: 'https://api.atm.cityway.fr/dataflow/horaire-tc-tr/download?provider=NOMAD&dataFormat=GTFS-RT',
      vehiclePositionHref:
        'https://api.atm.cityway.fr/dataflow/vehicule-tc-tr/download?provider=NOMAD&dataFormat=GTFS-RT',
      allowScheduled: (trip) => {
        const geo3dRoutes = [
          'ATOUMOD040:Line:1006979:LOC', // 216 (dans GTFS déidié à Geo3D)
          'ATOUMOD040:Line:1006959:LOC', // 228 (dans GTFS déidié à Geo3D)
          'ATOUMOD040:Line:1009747:LOC', // 423 (dans GTFS déidié à Geo3D)
          'ATOUMOD040:Line:1009928:LOC', // 424 (dans GTFS déidié à Geo3D)
          'ATOUMOD040:Line:1006919:LOC', // 527 (dans GTFS déidié à Geo3D)
          'ATOUMOD040:Line:1003061:LOC', // 530 (gestion par Astuce)
        ];
        const marchesDeMerde = [
          'ATOUMOD040:Line:1003080:LOC', // 532
          'ATOUMOD040:Line:1003081:LOC', // 533
          'ATOUMOD040:Line:1003082:LOC', // 534
          'ATOUMOD040:Line:1003083:LOC', // 535
          'ATOUMOD040:Line:1003084:LOC', // 536
          'ATOUMOD040:Line:1003086:LOC', // 536
          'ATOUMOD040:Line:1003087:LOC', // 538
          'ATOUMOD040:Line:1003088:LOC', // 539
          'ATOUMOD040:Line:1003091:LOC', // 540
          'ATOUMOD040:Line:1003085:LOC', // 541
        ];
        return !geo3dRoutes.includes(trip.route) && !marchesDeMerde.includes(trip.route);
      },
      afterInit: (resource) => {
        for (const trip of resource.trips.values()) {
          trip.id = trip.id.split(':')[2];
        }
      },
      routePrefix: 'NOMAD',
      getOperator: () => 'NOMAD',
    },
  },
  {
    id: 'NOMAD-GEO3D',
    refreshCron: '20 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'NOMAD-GEO3D',
      staticResourceHref: 'https://gtfs.bus-tracker.fr/nomad-geo3d.zip',
      tripUpdateHref: 'https://lrn.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/trip-updates',
      vehiclePositionHref: 'https://lrn.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/vehicle-positions',
      allowScheduled: (trip) => trip.service.id !== 'SERVICE',
      routePrefix: 'NOMAD',
      getOperator: () => 'NOMAD',
    },
  },
  {
    id: 'SEMO',
    refreshCron: '25,55 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'SEMO',
      routePrefix: 'SEMO',
      staticResourceHref: 'https://www.data.gouv.fr/fr/datasets/r/98bbbf7c-10ff-48a0-afc2-c5f7b3dda5af',
      allowScheduled: (trip) => !trip.route.startsWith('S'),
      afterInit: (resource) => {
        resource.trips.forEach((trip) => {
          trip.id = trip.id.split(':')[2].split('x')[0];
          trip.route = trip.route.split(':')[2];
        });
      },
    },
  },
  {
    id: 'TRANSURBAIN',
    refreshCron: '42 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'TRANSURBAIN',
      routePrefix: 'TRANSURBAIN',
      staticResourceHref: 'https://www.data.gouv.fr/fr/datasets/r/ec78df83-2e60-4284-acc3-86a0baa76bf0',
    },
  },
  {
    id: 'SNGO',
    refreshCron: '35 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'SNGO',
      routePrefix: 'SNGO',
      staticResourceHref: 'https://www.data.gouv.fr/fr/datasets/r/71bf48f1-178e-4ce3-ba9d-361cc5be76a7',
      tripUpdateHref: 'https://tnvs.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/trip-updates',
      vehiclePositionHref: 'https://tnvs.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/vehicle-positions',
      getOperator: () => 'SNGO',
      shapesStrategy: 'IGNORE',
      // afterInit: (resource) => {
      //   for (const [tripId, trip] of [...resource.trips.entries()]) {
      //     resource.trips.delete(tripId);
      //     const fixedTripId = tripId.split(':')[2];
      //     trip.id = fixedTripId;
      //     trip.route = trip.route.split(':')[2];
      //     resource.trips.set(fixedTripId, trip);
      //   }

      //   for (const [stopId, stop] of [...resource.stops.entries()]) {
      //     resource.stops.delete(stopId);
      //     const fixedStopId = stopId.split(':')[3];
      //     stop.id = fixedStopId;
      //     resource.stops.set(fixedStopId, stop);
      //   }
      // },
    },
  },
  {
    id: 'SNGO-GIVERNY',
    refreshCron: '35 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'SNGO-GIVERNY',
      routePrefix: 'SNGO',
      staticResourceHref: 'https://pysae.com/api/v2/groups/SNGO-Giverny/gtfs/pub',
      tripUpdateHref: 'https://pysae.com/api/v2/groups/SNGO-Giverny/gtfs-rt',
      vehiclePositionHref: 'https://pysae.com/api/v2/groups/SNGO-Giverny/gtfs-rt',
      getOperator: () => 'SNGO',
      getVehicleNumber: (descriptor) => descriptor.label ?? null,
      allowScheduled: false,
      shapesStrategy: 'IGNORE',
    },
  },
  {
    id: 'DEEPMOB',
    refreshCron: '43 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'DEEPMOB',
      routePrefix: 'DEEPMOB',
      staticResourceHref: 'https://www.data.gouv.fr/fr/datasets/r/62248658-0eba-4f4e-b367-aaea635ecd38',
      tripUpdateHref: 'https://tud.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/trip-updates',
      vehiclePositionHref: 'https://tud.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/vehicle-positions',
      getOperator: () => 'DEEPMOB',
      shapesStrategy: 'IGNORE',
    },
  },
  {
    id: 'CAPCOT',
    refreshCron: '41 * * * * *',
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
      allowScheduled: false,
      shapesStrategy: 'IGNORE',
    },
  },
  {
    id: 'REZOBUS',
    refreshCron: '8 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'REZOBUS',
      routePrefix: 'REZOBUS',
      staticResourceHref: 'https://pysae.com/api/v2/groups/caux-seine-agglo/gtfs/pub',
      tripUpdateHref: 'https://pysae.com/api/v2/groups/caux-seine-agglo/gtfs-rt',
      vehiclePositionHref: 'https://pysae.com/api/v2/groups/caux-seine-agglo/gtfs-rt',
      getOperator: () => 'REZOBUS',
      getVehicleNumber: () => null,
      allowScheduled: (trip) => !['14', '30'].includes(trip.route),
      afterInit: (resource) => {
        resource.trips.forEach((trip) => {
          const lastStopTime = trip.stops.at(-1);
          if (typeof lastStopTime === 'undefined') return;
          trip.headsign = lastStopTime.stop.name;
        });
      },
      shapesStrategy: 'IGNORE',
    },
  },
  {
    id: 'MOCA',
    refreshCron: '9 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'MOCA',
      routePrefix: 'MOCA',
      staticResourceHref: 'https://pysae.com/api/v2/groups/moca/gtfs/pub',
      tripUpdateHref: 'https://pysae.com/api/v2/groups/moca/gtfs-rt',
      vehiclePositionHref: 'https://pysae.com/api/v2/groups/moca/gtfs-rt',
      getVehicleNumber: (descriptor) => descriptor.label ?? null,
      allowScheduled: false,
      shapesStrategy: 'IGNORE',
    },
  },
  {
    id: 'ASTROBUS',
    refreshCron: '12 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'ASTROBUS',
      routePrefix: 'ASTROBUS',
      staticResourceHref: 'https://zenbus.net/gtfs/static/download.zip?dataset=astrobus',
      tripUpdateHref: 'https://zenbus.net/gtfs/rt/poll.proto?dataset=astrobus',
      vehiclePositionHref: 'https://zenbus.net/gtfs/rt/poll.proto?dataset=astrobus',
      allowScheduled: false,
      mapVehiclePositionEntities: zenbusFilter,
      getOperator: () => 'ASTROBUS',
      getVehicleNumber: () => null,
      shapesStrategy: 'IGNORE',
    },
  },
  {
    id: 'HOBUS',
    refreshCron: '13 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'HOBUS',
      routePrefix: 'HOBUS',
      staticResourceHref: 'https://zenbus.net/gtfs/static/download.zip?dataset=hobus',
      tripUpdateHref: 'https://zenbus.net/gtfs/rt/poll.proto?dataset=hobus',
      vehiclePositionHref: 'https://zenbus.net/gtfs/rt/poll.proto?dataset=hobus',
      allowScheduled: false,
      mapVehiclePositionEntities: zenbusFilter,
      getOperator: () => 'HOBUS',
      getVehicleNumber: () => null,
      shapesStrategy: 'IGNORE',
    },
  },
  {
    id: 'NEVA',
    refreshCron: '17 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'NEVA',
      routePrefix: 'NEVA',
      staticResourceHref: 'https://zenbus.net/gtfs/static/download.zip?dataset=granville',
      tripUpdateHref: 'https://zenbus.net/gtfs/rt/poll.proto?dataset=granville',
      vehiclePositionHref: 'https://zenbus.net/gtfs/rt/poll.proto?dataset=granville',
      allowScheduled: false,
      mapVehiclePositionEntities: zenbusFilter,
      getOperator: () => 'NEVA',
      getVehicleNumber: () => null,
      shapesStrategy: 'IGNORE',
    },
  },
  {
    id: 'FICIBUS',
    refreshCron: '18,48 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'FICIBUS',
      routePrefix: 'FICIBUS',
      staticResourceHref: 'https://exs.atm.cityway.fr/gtfs.aspx?key=OPENDATA&operatorCode=FICIBUS',
      tripUpdateHref: 'https://gtfs.bus-tracker.fr/gtfs-rt/ficibus/trip-updates',
      vehiclePositionHref: 'https://gtfs.bus-tracker.fr/gtfs-rt/ficibus/vehicle-positions',
      allowScheduled: false,
      shapesStrategy: 'IGNORE',
    },
  },
  {
    id: 'VIKIBUS',
    refreshCron: '24 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'VIKIBUS',
      routePrefix: 'VIKIBUS',
      staticResourceHref: 'https://gtfs.bus-tracker.fr/vikibus.zip',
      tripUpdateHref: 'https://gtfs.bus-tracker.fr/gtfs-rt/vikibus/trip-updates',
      vehiclePositionHref: 'https://gtfs.bus-tracker.fr/gtfs-rt/vikibus/vehicle-positions',
      allowScheduled: false,
      getVehicleNumber: () => null,
      shapesStrategy: 'IGNORE',
    },
  },
  {
    id: 'NEMUS',
    refreshCron: '52 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'NEMUS',
      routePrefix: 'NEMUS',
      staticResourceHref: 'https://www.data.gouv.fr/fr/datasets/r/821cfc05-c8db-48a5-a830-9358054bee95',
      tripUpdateHref: 'https://gtfs.bus-tracker.fr/gtfs-rt/nemus/trip-updates',
      vehiclePositionHref: 'https://gtfs.bus-tracker.fr/gtfs-rt/nemus/vehicle-positions',
      allowScheduled: false,
      getOperator: () => 'NEMUS',
      getVehicleNumber: () => null,
      shapesStrategy: 'IGNORE',
    },
  },
  {
    id: 'BYBUS',
    refreshCron: '52 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'BYBUS',
      routePrefix: 'BYBUS',
      staticResourceHref: 'https://pysae.com/api/v2/groups/keolis-bayeux/gtfs/pub',
      tripUpdateHref: 'https://pysae.com/api/v2/groups/keolis-bayeux/gtfs-rt',
      vehiclePositionHref: 'https://pysae.com/api/v2/groups/keolis-bayeux/gtfs-rt',
      allowScheduled: (trip) => trip.route !== 'TAD 1',
      getVehicleNumber: (descriptor) => descriptor.label ?? null,
      shapesStrategy: 'IGNORE',
    },
  },
  {
    id: 'LBUS',
    refreshCron: '55 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'LBUS',
      routePrefix: 'LBUS',
      staticResourceHref: 'https://zenbus.net/gtfs/static/download.zip?dataset=bernay',
      tripUpdateHref: 'https://zenbus.net/gtfs/rt/poll.proto?dataset=bernay',
      vehiclePositionHref: 'https://zenbus.net/gtfs/rt/poll.proto?dataset=bernay',
      allowScheduled: false,
      mapVehiclePositionEntities: zenbusFilter,
      getOperator: () => 'LBUS',
      getVehicleNumber: () => null,
      shapesStrategy: 'IGNORE',
    },
  },
  {
    id: 'LEBUS',
    refreshCron: '55 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'LEBUS',
      routePrefix: 'LEBUS',
      staticResourceHref: 'https://gtfs.bus-tracker.fr/lebus.zip',
    },
  },
];

export default sources;
