import dayjs from 'dayjs';
import decompress from 'decompress';
import { exec } from 'node:child_process';
import { readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';

import type { GtfsProperties, GtfsResource, Service, Shape, Stop, Trip } from './types.js';
import { groupBy } from './utils/group-by.js';
import { parseCsv } from './utils/parse-csv.js';

const $ = (command: string) =>
  new Promise<string>((resolve, reject) =>
    exec(command, (error, stdout) => {
      if (error !== null) reject(error);
      else resolve(stdout.trim());
    }),
  );

export async function downloadStaticResource(properties: GtfsProperties) {
  const tmpdir = await $('mktemp -d');
  const response = await fetch(properties.staticResourceHref, {
    signal: AbortSignal.timeout(60000),
  });
  const gtfsArchive = Buffer.from(await response.arrayBuffer());
  await decompress(gtfsArchive, tmpdir);
  await rm(join(tmpdir, 'feed_info.txt')).catch(() => void 0); // Ce fichier n'existe pas nécessairement
  if (properties.shapesStrategy === 'GENERATE') {
    if (typeof process.env.OSM_PATH === 'undefined') {
      console.warn(`YABS\t${properties.id}\tOSM_PATH environment variable is missing, skipping shapes generation.`);
    } else {
      await $(`pfaedle -D --inplace -x ${process.env.OSM_PATH} ${tmpdir}`).catch((e) =>
        console.error(`YABS\t${properties.id}\tFailed to generate shapes:`, e),
      );
    }
  }
  const [services, shapes, stops] = await Promise.all([
    loadCalendars(tmpdir),
    properties.shapesStrategy === 'IGNORE' ? new Map() : loadShapes(tmpdir),
    loadStops(tmpdir),
  ]);

  const trips = await loadTrips(tmpdir, services, shapes, stops);
  const semiResource = {
    services,
    stops,
    trips,
    scheduledTrips: [],
    lastModified: response.headers.has('Last-Modified') ? dayjs(response.headers.get('Last-Modified')) : null,
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
  await rm(tmpdir, { recursive: true });
  const resource = { ...semiResource, scheduledTrips };
  return resource;
}

// ---

async function loadCalendars(resourcePath: string) {
  const services = new Map<string, Service>();

  const serviceRecords = await readFile(join(resourcePath, 'calendar.txt'))
    .then(parseCsv)
    .catch(() => []);

  for (const serviceRecord of serviceRecords) {
    services.set(serviceRecord.service_id, {
      id: serviceRecord.service_id,
      days: [
        !!+serviceRecord.sunday,
        !!+serviceRecord.monday,
        !!+serviceRecord.tuesday,
        !!+serviceRecord.wednesday,
        !!+serviceRecord.thursday,
        !!+serviceRecord.friday,
        !!+serviceRecord.saturday,
      ],
      exclusions: [],
      inclusions: [],
      startDate: serviceRecord.start_date,
      endDate: serviceRecord.end_date,
    });
  }

  const calendarDateRecords = await readFile(join(resourcePath, 'calendar_dates.txt'))
    .then(parseCsv)
    .catch(() => []);

  for (const calendarDateRecord of calendarDateRecords) {
    let service = services.get(calendarDateRecord.service_id);
    if (!service) {
      service = {
        id: calendarDateRecord.service_id,
        days: [false, false, false, false, false, false, false],
        exclusions: [],
        inclusions: [],
        startDate: '20000101',
        endDate: '20991231',
      };
      services.set(service.id, service);
    }

    switch (+calendarDateRecord.exception_type) {
      case 1:
        service.inclusions.push(calendarDateRecord.date);
        break;
      case 2:
        service.exclusions.push(calendarDateRecord.date);
        break;
      default:
    }
  }

  return services;
}

async function loadShapes(resourcePath: string) {
  const shapePoints = await readFile(join(resourcePath, 'shapes.txt'))
    .then(parseCsv)
    .catch(() => []);
  const shapePointsByShapeId = groupBy(shapePoints, (shapePoint) => shapePoint.shape_id);
  const shapes = new Map<string, Shape>();

  for (const [shapeId, shapePoints] of shapePointsByShapeId) {
    shapes.set(shapeId, {
      id: shapeId,
      points: shapePoints
        .map((shapePoint) => ({
          lat: +shapePoint.shape_pt_lat,
          lon: +shapePoint.shape_pt_lon,
          sequence: +shapePoint.shape_pt_sequence,
          distance: +shapePoint.shape_dist_traveled,
        }))
        .toSorted((a, b) => a.sequence - b.sequence),
    });
  }

  return shapes;
}

async function loadStops(resourcePath: string) {
  const stopRecords = await readFile(join(resourcePath, 'stops.txt')).then(parseCsv);
  const stops = new Map<string, Stop>();
  for (const stopRecord of stopRecords) {
    if (stopRecord.location_type && +stopRecord.location_type !== 0) continue;
    stops.set(stopRecord.stop_id, {
      id: stopRecord.stop_id,
      name: stopRecord.stop_name,
      lat: +stopRecord.stop_lat,
      lon: +stopRecord.stop_lon,
    });
  }
  return stops;
}

async function loadTrips(
  resourcePath: string,
  services: Map<string, Service>,
  shapes: Map<string, Shape>,
  stops: Map<string, Stop>,
) {
  const tripRecords = await readFile(join(resourcePath, 'trips.txt')).then(parseCsv);
  const stopTimes = groupBy(
    await readFile(join(resourcePath, 'stop_times.txt')).then(parseCsv),
    (stopTime) => stopTime.trip_id,
  );
  const trips = new Map<string, Trip>();

  for (const tripRecord of tripRecords) {
    trips.set(tripRecord.trip_id, {
      id: tripRecord.trip_id,
      service: services.get(tripRecord.service_id)!,
      block: tripRecord.block_id || null,
      route: tripRecord.route_id,
      direction: +tripRecord.direction_id,
      headsign: tripRecord.trip_headsign,
      stops: (stopTimes.get(tripRecord.trip_id) ?? [])
        .map((stopTime) => ({
          sequence: +stopTime.stop_sequence,
          stop: stops.get(stopTime.stop_id)!,
          time: stopTime.departure_time,
          distanceTraveled: stopTime.shape_dist_traveled ? +stopTime.shape_dist_traveled : null,
        }))
        .sort((a, b) => a.sequence - b.sequence),
      shape: shapes.get(tripRecord.shape_id) ?? null,
    });
  }

  return trips;
}
