import { exec } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { groupBy } from '~/utils/group-by';
import { parseCsv } from '~/utils/parse-csv';
import { search, searchSort } from '~/utils/search';
import { Calendar, GtfsProperties, Shape, Stop, Trip } from '~/yabs/fetcher/gtfs/@types';

const $ = (command: string) =>
  new Promise<string>((resolve, reject) =>
    exec(command, (error, stdout) => {
      if (error !== null) reject(error);
      else resolve(stdout.trim());
    }),
  );

export async function downloadStaticResource(properties: GtfsProperties) {
  const tmpdir = await $('mktemp -d');
  await $(`wget -t 1 -T 10 -O "${join(tmpdir, 'gtfs.zip')}" "${properties.staticResourceHref}"`);
  await $(`unzip -o ${join(tmpdir, 'gtfs.zip')} -d ${tmpdir}`);
  await $(`rm "${join(tmpdir, 'feed_info.txt')}"`).catch(() => void 0);
  if (properties.shapesStrategy === 'GENERATE') {
    if (typeof process.env.OSM_PATH === 'undefined') {
      console.warn(`YABS\t${properties.id}\tOSM_PATH environment variable is missing, skipping shapes generation.`);
    } else {
      await $(`pfaedle -D --inplace -x ${process.env.OSM_PATH} ${tmpdir}`).catch((e) =>
        console.error(`YABS\t${properties.id}\tFailed to generate shapes:`, e),
      );
    }
  }
  const [calendars, shapes, stops] = await Promise.all([
    loadCalendars(tmpdir),
    properties.shapesStrategy === 'IGNORE' ? [] : loadShapes(tmpdir),
    loadStops(tmpdir),
  ]);

  const trips = await loadTrips(tmpdir, calendars, shapes, stops);
  await $(`rm -r "${tmpdir}"`);
  const resource = { calendars, stops, trips };
  properties.afterInit?.(resource);
  return resource;
}

// ---

async function loadCalendars(resourcePath: string) {
  const calendars: Calendar[] = (
    await readFile(join(resourcePath, 'calendar.txt'))
      .then(parseCsv)
      .catch(() => [])
  )
    .map<Calendar>((calendar) => ({
      id: calendar.service_id,
      days: [
        !!+calendar.sunday,
        !!+calendar.monday,
        !!+calendar.tuesday,
        !!+calendar.wednesday,
        !!+calendar.thursday,
        !!+calendar.friday,
        !!+calendar.saturday,
      ],
      blacklist: [],
      whitelist: [],
      from: calendar.start_date,
      to: calendar.end_date,
    }))
    .toSorted(searchSort);

  (
    await readFile(join(resourcePath, 'calendar_dates.txt'))
      .then(parseCsv)
      .catch(() => [])
  ).forEach((calendarDate) => {
    let calendar = search(calendars, calendarDate.service_id);
    if (calendar === null) {
      calendar = {
        id: calendarDate.service_id,
        days: [false, false, false, false, false, false, false],
        blacklist: [],
        whitelist: [],
        from: '20000101',
        to: '20991231',
      };
      calendars.push(calendar);
    }

    switch (+calendarDate.exception_type) {
      case 1:
        calendar.whitelist.push(calendarDate.date);
        break;
      case 2:
        calendar.blacklist.push(calendarDate.date);
        break;
      default:
    }
  });

  return calendars.toSorted(searchSort);
}

async function loadShapes(resourcePath: string): Promise<Shape[]> {
  const shapePoints = await readFile(join(resourcePath, 'shapes.txt'))
    .then(parseCsv)
    .catch(() => []);
  const shapes = groupBy(shapePoints, (shapePoint) => shapePoint.shape_id);
  return [...shapes.entries()]
    .map(([shapeId, points]) => ({
      id: shapeId,
      points: points.map((shapePoint) => ({
        lat: +shapePoint.shape_pt_lat,
        lon: +shapePoint.shape_pt_lon,
        sequence: +shapePoint.shape_pt_sequence,
        distance: +shapePoint.shape_dist_traveled,
      })),
    }))
    .toSorted(searchSort);
}

async function loadStops(resourcePath: string): Promise<Stop[]> {
  return (await readFile(join(resourcePath, 'stops.txt')).then(parseCsv))
    .map((stop) => ({
      id: stop.stop_id,
      name: stop.stop_name,
      lat: +stop.stop_lat,
      lon: +stop.stop_lon,
    }))
    .toSorted(searchSort);
}

async function loadTrips(resourcePath: string, calendars: Calendar[], shapes: Shape[], stops: Stop[]): Promise<Trip[]> {
  const trips = await readFile(join(resourcePath, 'trips.txt')).then(parseCsv);
  const stopTimes = groupBy(
    await readFile(join(resourcePath, 'stop_times.txt')).then(parseCsv),
    (stopTime) => stopTime.trip_id,
  );
  return trips
    .map((trip) => ({
      id: trip.trip_id,
      calendar: search(calendars, trip.service_id)!,
      block: trip.block_id || null,
      route: trip.route_id,
      direction: +trip.direction_id,
      headsign: trip.trip_headsign,
      stops: (stopTimes.get(trip.trip_id) ?? [])
        .map((stopTime) => ({
          sequence: +stopTime.stop_sequence,
          stop: search(stops, stopTime.stop_id)!,
          time: stopTime.departure_time,
          distanceTraveled: stopTime.shape_dist_traveled ? +stopTime.shape_dist_traveled : null,
        }))
        .sort((a, b) => a.sequence - b.sequence),
      shape: search(shapes, trip.shape_id),
    }))
    .toSorted(searchSort);
}
