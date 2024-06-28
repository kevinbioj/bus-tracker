import dayjs from 'dayjs';
import { P, match } from 'ts-pattern';

import type { GtfsProperties, Trip, VehiclePositionEntity } from '../fetchers/gtfs/types.js';
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

const sources: Source[] = [
  {
    id: 'TCAR',
    refreshCron: '0,15,30,45 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'TCAR',
      staticResourceHref:
        'http://exs.tcar.cityway.fr/gtfs.aspx?key=OPENDATA&operatorCode=ASTUCE&companyCode=ASTUCE:002',
      tripUpdateHref: 'https://tsi.tcar.cityway.fr/ftp/gtfsrt/Astuce.TripUpdate.pb',
      vehiclePositionHref: 'https://tsi.tcar.cityway.fr/ftp/gtfsrt/Astuce.VehiclePosition.pb',
      routePrefix: 'ASTUCE',
      mapTripUpdateEntities: (tripUpdates) => {
        tripUpdates.forEach((tripUpdate) => {
          tripUpdate.tripUpdate.stopTimeUpdate.forEach((stopTimeUpdate) => {
            delete stopTimeUpdate.arrival?.time;
            delete stopTimeUpdate.departure?.time;
          });
        });
        return tripUpdates;
      },
      allowScheduled: (trip) => {
        if (['89', '322'].includes(trip.route)) return true;
        // if (trip.route === '01' && ['Stade Diochon PETIT-QUEVILLY', 'Lafayette ROUEN'].includes(trip.headsign))
        //   return true;
        // if (trip.route === '07' && ['Hôtel de Ville SOTTEVILLE-LÈS-ROUEN', 'Lafayette ROUEN'].includes(trip.headsign))
        //   return true;
        return false;
      },
      getOperator: (trip) =>
        trip.service.id.startsWith('IST') ||
        trip.service.id.startsWith('INT') ||
        trip.route === '06' ||
        trip.route === '89'
          ? 'TNI'
          : 'TCAR',
    },
  },
  {
    id: 'TCAR-TGR',
    refreshCron: '5,15,25,35,45,55 * * * * *',
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
    refreshCron: '3,23,43 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'TAE',
      staticResourceHref: 'https://gtfs.tae76.fr/gtfs/feed.zip',
      tripUpdateHref: 'https://gtfs.tae76.fr/gtfs-rt.bin',
      routePrefix: 'ASTUCE',
      allowScheduled: false,
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
    refreshCron: '5,35 * * * * *',
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
    refreshCron: '35 * * * * *',
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
    refreshCron: '6,36 * * * * *',
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
    refreshCron: '38 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'LIA',
      staticResourceHref: 'https://www.data.gouv.fr/fr/datasets/r/1e666e24-58ee-46b9-8952-ea2755ba88f2',
      tripUpdateHref: 'https://gtfs.bus-tracker.fr/gtfs-rt/lia/trip-updates',
      vehiclePositionHref: 'https://gtfs.bus-tracker.fr/gtfs-rt/lia/vehicle-positions',
      routePrefix: 'LIA',
      allowScheduled: (trip) => ['12', '13', '21'].includes(trip.route),
      mapTripUpdateEntities: (entities, resource) =>
        entities.map((tripUpdate) => {
          const trip = resource.trips.get(tripUpdate.tripUpdate.trip.tripId);
          if (trip) {
            tripUpdate.tripUpdate.trip.routeId = trip.route;
          }
          return tripUpdate;
        }),
      mapVehiclePositionEntities: (entities, resource) =>
        entities.map((vehiclePosition) => {
          const trip = resource.trips.get(vehiclePosition.vehicle.trip.tripId);
          if (trip) {
            vehiclePosition.vehicle.trip.routeId = trip.route;
          }
          return vehiclePosition;
        }),
      afterInit: (resource) => {
        for (const trip of resource.trips.values()) {
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
                ['Rond-Point', 'Pré Fleuri'],
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
    id: 'NOMAD-TER',
    refreshCron: '40 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'NOMAD-TER',
      staticResourceHref: 'https://gtfs.bus-tracker.fr/nomad-train.zip',
      tripUpdateHref: 'https://proxy.transport.data.gouv.fr/resource/sncf-ter-gtfs-rt-trip-updates',
      routePrefix: 'NOMAD-TER',
      registerActivity: false,
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
    refreshCron: '42 * * * * *',
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
      routePrefix: 'NOMAD',
      getOperator: () => 'NOMAD',
    },
  },
  {
    id: 'NOMAD-GEO3D',
    refreshCron: '35 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'NOMAD-GEO3D',
      staticResourceHref: 'https://gtfs.bus-tracker.fr/nomad-geo3d.zip',
      tripUpdateHref: 'https://lrn.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/trip-updates',
      vehiclePositionHref: 'https://lrn.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/vehicle-positions',
      allowScheduled: (trip) => trip.service.id !== 'RT_ONLY',
      routePrefix: 'NOMAD',
      getOperator: () => 'NOMAD',
      mapTripUpdateEntities: (entities) => {
        for (const entity of entities) {
          const rouenStSever = entity.tripUpdate.stopTimeUpdate.find((stu) => stu.stopId === '225');
          if (rouenStSever) rouenStSever.scheduleRelationship = 'SKIPPED';
        }
        return entities;
      },
    },
  },
  {
    id: 'SEMO',
    refreshCron: '42 * * * * *',
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
    refreshCron: '42 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'SNGO',
      routePrefix: 'SNGO',
      staticResourceHref: 'https://www.data.gouv.fr/fr/datasets/r/71bf48f1-178e-4ce3-ba9d-361cc5be76a7',
      tripUpdateHref: 'https://tnvs.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/trip-updates',
      vehiclePositionHref: 'https://tnvs.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/vehicle-positions',
      getOperator: () => 'SNGO',
      shapesStrategy: 'IGNORE',
      mapTripUpdateEntities: (entities, resource) =>
        entities.map((tripUpdate) => {
          const matchingTrip = resource.trips.get(`ATOUMOD007:ServiceJourney:${tripUpdate.tripUpdate.trip.tripId}:LOC`);
          if (matchingTrip) {
            tripUpdate.tripUpdate.trip.tripId = matchingTrip.id;
            tripUpdate.tripUpdate.stopTimeUpdate.forEach((stopTimeUpdate) => {
              const stopTime = matchingTrip.stops.find((x) => x.stop.id.includes(stopTimeUpdate.stopId));
              if (stopTime) {
                stopTimeUpdate.stopId = stopTime.stop.id;
              }
            });
          }
          return tripUpdate;
        }),
      mapVehiclePositionEntities: (entities, resource) =>
        entities.map((vehicle) => {
          const matchingTrip = resource.trips.get(`ATOUMOD007:ServiceJourney:${vehicle.vehicle.trip.tripId}:LOC`);
          if (matchingTrip) {
            vehicle.vehicle.trip.tripId = matchingTrip.id;
          }
          return vehicle;
        }),
    },
  },
  {
    id: 'SNGO-GIVERNY',
    refreshCron: '42 * * * * *',
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
    refreshCron: '48 * * * * *',
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
    refreshCron: '48 * * * * *',
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
    refreshCron: '48 * * * * *',
    type: 'GTFS',
    gtfsProperties: {
      id: 'REZOBUS',
      routePrefix: 'REZOBUS',
      staticResourceHref: 'https://pysae.com/api/v2/groups/caux-seine-agglo/gtfs/pub',
      tripUpdateHref: 'https://pysae.com/api/v2/groups/caux-seine-agglo/gtfs-rt',
      vehiclePositionHref: 'https://pysae.com/api/v2/groups/caux-seine-agglo/gtfs-rt',
      getOperator: () => 'REZOBUS',
      getVehicleNumber: (descriptor) => descriptor.label ?? null,
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
    refreshCron: '50 * * * * *',
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
    refreshCron: '50 * * * * *',
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
    refreshCron: '50 * * * * *',
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
    refreshCron: '50 * * * * *',
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
    refreshCron: '6,36 * * * * *',
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
    refreshCron: '6,36 * * * * *',
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
