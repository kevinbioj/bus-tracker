import dayjs from 'dayjs';
import decompress from 'decompress';
import { exec } from 'node:child_process';
import { access, mkdtemp, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import type { GtfsProperties, GtfsResource, Service, Shape, Stop, Trip } from './types.js';
import { parseCsv } from './utils/parse-csv.js';

const $ = (command: string) =>
  new Promise<string>((resolve, reject) =>
    exec(command, (error, stdout) => {
      if (error !== null) reject(error);
      else resolve(stdout.trim());
    }),
  );

export async function downloadStaticResource(properties: GtfsProperties) {
  const directory = await mkdtemp(join(tmpdir(), `bus-tracker_${properties.id}_`));
  const response = await fetch(properties.staticResourceHref, {
    signal: AbortSignal.timeout(60000),
  });
  if (!response.ok) throw new Error(`Resource download failed with status code ${response.status}.`);
  const gtfsArchive = Buffer.from(await response.arrayBuffer());
  await decompress(gtfsArchive, directory);
  await rm(join(directory, 'feed_info.txt')).catch(() => void 0); // Ce fichier n'existe pas nécessairement
  if (properties.shapesStrategy === 'GENERATE') {
    if (typeof process.env.OSM_PATH === 'undefined') {
      console.warn(`YABS\t${properties.id}\tOSM_PATH environment variable is missing, skipping shapes generation.`);
    } else {
      await $(`pfaedle -D --inplace -x ${process.env.OSM_PATH} ${directory}`).catch((e) =>
        console.error(`YABS\t${properties.id}\tFailed to generate shapes:`, e),
      );
    }
  }
  const [services, shapes, stops] = await Promise.all([
    loadCalendars(directory),
    properties.shapesStrategy === 'IGNORE' ? new Map() : loadShapes(directory),
    loadStops(directory),
  ]);

  const trips = await loadTrips(directory, services, shapes, stops);
  const semiResource = {
    services,
    stops,
    trips,
    scheduledTrips: [],
    lastModified: response.headers.has('Last-Modified') ? dayjs(response.headers.get('Last-Modified')) : null,
    etag: response.headers.get('ETag'),
    loadedAt: dayjs(),
  };
  properties.afterInit?.(semiResource);
  const scheduledTrips =
    typeof properties.allowScheduled === 'undefined' || properties.allowScheduled === true
      ? [...trips.values()]
      : properties.allowScheduled === false
        ? []
        : [...trips.values()].filter((trip) =>
            (properties.allowScheduled as (trip: Trip, resource: GtfsResource) => boolean)(trip, semiResource),
          );
  await rm(directory, { recursive: true });
  const resource = { ...semiResource, scheduledTrips };
  return resource;
}

// ---

async function loadCalendars(resourcePath: string) {
  const services = new Map<string, Service>();

  const cFile = join(resourcePath, 'calendar.txt');
  const cFileExists = await access(cFile)
    .then(() => true)
    .catch(() => false);
  if (cFileExists) {
    await parseCsv(cFile, (record) => {
      services.set(record.service_id, {
        id: record.service_id,
        days: [
          !!+record.sunday,
          !!+record.monday,
          !!+record.tuesday,
          !!+record.wednesday,
          !!+record.thursday,
          !!+record.friday,
          !!+record.saturday,
        ],
        exclusions: [],
        inclusions: [],
        startDate: record.start_date,
        endDate: record.end_date,
      });
    });
  }

  const cdFile = join(resourcePath, 'calendar_dates.txt');
  const cdFileExists = await access(cdFile)
    .then(() => true)
    .catch(() => false);
  if (cdFileExists) {
    await parseCsv(cdFile, (record) => {
      let service = services.get(record.service_id);
      if (!service) {
        service = {
          id: record.service_id,
          days: [false, false, false, false, false, false, false],
          exclusions: [],
          inclusions: [],
          startDate: '20000101',
          endDate: '20991231',
        };
        services.set(service.id, service);
      }

      switch (+record.exception_type) {
        case 1:
          service.inclusions.push(record.date);
          break;
        case 2:
          service.exclusions.push(record.date);
          break;
        default:
      }
    });
  }

  return services;
}

async function loadShapes(resourcePath: string) {
  const shapes = new Map<string, Shape>();

  const sFile = join(resourcePath, 'shapes.txt');
  const sFileExists = await access(sFile)
    .then(() => true)
    .catch(() => false);
  if (sFileExists) {
    await parseCsv(sFile, (record) => {
      let shape = shapes.get(record.shape_id);
      if (typeof shape === 'undefined') {
        shape = { id: record.shape_id, points: [] };
        shapes.set(record.shape_id, shape);
      }

      shape.points.push({
        lat: +record.shape_pt_lat,
        lon: +record.shape_pt_lon,
        sequence: +record.shape_pt_sequence,
        distance: +record.shape_dist_traveled,
      });
    });
  }

  for (const shape of shapes.values()) shape.points.sort((a, b) => a.sequence - b.sequence);

  return shapes;
}

async function loadStops(resourcePath: string) {
  const stops = new Map<string, Stop>();

  await parseCsv(join(resourcePath, 'stops.txt'), (record) => {
    if (record.location_type && +record.location_type !== 0) return;
    stops.set(record.stop_id, {
      id: record.stop_id,
      name: record.stop_name,
      lat: +record.stop_lat,
      lon: +record.stop_lon,
    });
  });

  return stops;
}

async function loadTrips(
  resourcePath: string,
  services: Map<string, Service>,
  shapes: Map<string, Shape>,
  stops: Map<string, Stop>,
) {
  const trips = new Map<string, Trip>();

  await parseCsv(join(resourcePath, 'trips.txt'), (record) => {
    trips.set(record.trip_id, {
      id: record.trip_id,
      service: services.get(record.service_id)!,
      block: record.block_id || null,
      route: record.route_id,
      direction: +record.direction_id,
      headsign: record.trip_headsign,
      stops: [],
      shape: shapes.get(record.shape_id) ?? null,
    });
  });

  await parseCsv(join(resourcePath, 'stop_times.txt'), (record) => {
    const trip = trips.get(record.trip_id);
    if (typeof trip === 'undefined') return;

    trip.stops.push({
      sequence: +record.stop_sequence,
      stop: stops.get(record.stop_id)!,
      time: record.departure_time,
      distanceTraveled: record.shape_dist_traveled ? +record.shape_dist_traveled : null,
    });
  });

  for (const trip of trips.values()) trip.stops.sort((a, b) => a.sequence - b.sequence);

  return trips;
}
