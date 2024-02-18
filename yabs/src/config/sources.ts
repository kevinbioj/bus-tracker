import { GtfsProperties } from '~/yabs/fetcher/gtfs/@types';
import { SiriProperties } from '~/yabs/fetcher/siri/@types';

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
      filters: {
        scheduled: (trip) => (trip.calendar.id.startsWith('IST') && trip.route !== '06') || trip.route === '529',
      },
      getOperator: (trip) =>
        trip.route === '06' || trip.route === '529' || trip.calendar.id.startsWith('IST') ? 'TNI' : 'TCAR',
      generateShapes: true,
      propagateDelays: true,
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
      generateShapes: true,
      getOperator: (trip) => (trip.route === '214' ? 'TNI' : 'HANGA'),
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
      getRouteId: (vehicle) =>
        vehicle.MonitoredVehicleJourney.LineRef.replace('SIRI_NVP_037:Line::', '').replace(':LOC', ''),
      getVehicleLabel: (vehicle) =>
        +vehicle.VehicleMonitoringRef.replace('SIRI_NVP_037:Vehicle::Keolis_', '').replace(':LOC', ''),
    },
  },
  {
    id: 'NOMAD',
    refreshCron: '15 * * * * * ',
    type: 'GTFS',
    gtfsProperties: {
      id: 'NOMAD',
      staticResourceHref: 'https://gtfs.kevinbioj.fr/nomad.zip',
      tripUpdateHref: 'https://lrn.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/trip-updates',
      vehiclePositionHref: 'https://lrn.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/vehicle-positions',
      filters: { scheduled: () => false },
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
      staticResourceHref: 'https://www.data.gouv.fr/fr/datasets/r/2e97c9b3-a59f-42dd-9b9e-a232fa771f21',
      tripUpdateHref: 'https://pysae.com/api/v2/groups/transdev-cotentin/gtfs-rt',
      vehiclePositionHref: 'https://pysae.com/api/v2/groups/transdev-cotentin/gtfs-rt',
      getOperator: () => 'CAPCOT',
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
      },
      getOperator: () => 'NEVA',
      getVehicleNumber: () => null,
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
      },
      getOperator: () => 'LBUS',
      getVehicleNumber: () => null,
    },
  },
];

export default sources;
