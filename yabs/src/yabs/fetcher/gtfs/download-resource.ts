import { exec } from 'node:child_process';
import { join } from 'node:path';

import { groupBy } from '~/utils/group-by';
import { parseCsv } from '~/utils/parse-csv';
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
  await $(`wget -T 10 -O "${join(tmpdir, 'gtfs.zip')}" "${properties.staticResourceHref}"`);
  await $(`unzip -o ${join(tmpdir, 'gtfs.zip')} -d ${tmpdir}`);
  await $(`rm "${join(tmpdir, 'feed_info.txt')}"`).catch(() => void 0);
  if (properties.generateShapes) {
    if (typeof process.env.OSM_PATH === 'undefined') {
      throw new Error("When generateShapes=true, the 'OSM_PATH' env variable must refer to a OSM file to use.");
    }
    await $(`pfaedle -D --inplace -x ${process.env.OSM_PATH} ${tmpdir}`).catch((e) =>
      console.error(`YABS\t${properties.id}\tFailed to generate shapes:`, e),
    );
  }
  const [calendars, shapes, stops] = await Promise.all([loadCalendars(tmpdir), loadShapes(tmpdir), loadStops(tmpdir)]);
  const trips = await loadTrips(tmpdir, calendars, shapes, stops);
  await $(`rm -r "${tmpdir}"`);
  return { calendars, stops, trips };
}

// ---

async function loadCalendars(resourcePath: string) {
  const calendars = await Bun.file(join(resourcePath, 'calendar.txt'))
    .text()
    .then(parseCsv)
    .catch(() => []);
  const calendarDates = await Bun.file(join(resourcePath, 'calendar_dates.txt'))
    .text()
    .then(parseCsv)
    .catch(() => []);
  const calendarSet = calendars.reduce((calendars, calendar) => {
    calendars.set(calendar.service_id, {
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
    });
    return calendars;
  }, new Map<string, Calendar>());
  calendarDates.forEach((calendarDate) => {
    if (!calendarSet.has(calendarDate.service_id)) {
      calendarSet.set(calendarDate.service_id, {
        id: calendarDate.service_id,
        days: [false, false, false, false, false, false, false],
        blacklist: [],
        whitelist: [],
        from: '20000101',
        to: '20991231',
      });
    }
    const calendar = calendarSet.get(calendarDate.service_id)!;
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
  return calendarSet;
}

async function loadShapes(resourcePath: string) {
  const shapePoints = await Bun.file(join(resourcePath, 'shapes.txt'))
    .text()
    .then(parseCsv)
    .catch(() => []);
  const shapes = groupBy(shapePoints, (shapePoint) => shapePoint.shape_id);
  return [...shapes.entries()].reduce((shapes, [key, points]) => {
    shapes.set(key, {
      id: key,
      points: points.map((shapePoint) => ({
        lat: +shapePoint.shape_pt_lat,
        lon: +shapePoint.shape_pt_lon,
        sequence: +shapePoint.shape_pt_sequence,
        distance: +shapePoint.shape_dist_traveled,
      })),
    });
    return shapes;
  }, new Map<string, Shape>());
}

async function loadStops(resourcePath: string) {
  const stops = await Bun.file(join(resourcePath, 'stops.txt')).text().then(parseCsv);
  return stops.reduce((stops, stop) => {
    stops.set(stop.stop_id, {
      id: stop.stop_id,
      name: stop.stop_name,
      lat: +stop.stop_lat,
      lon: +stop.stop_lon,
    });
    return stops;
  }, new Map<string, Stop>());
}

async function loadTrips(
  resourcePath: string,
  calendars: Map<string, Calendar>,
  shapes: Map<string, Shape>,
  stops: Map<string, Stop>,
) {
  const trips = await Bun.file(join(resourcePath, 'trips.txt')).text().then(parseCsv);
  const stopTimes = groupBy(
    await Bun.file(join(resourcePath, 'stop_times.txt')).text().then(parseCsv),
    (stopTime) => stopTime.trip_id,
  );
  return trips.reduce((trips, trip) => {
    trips.set(trip.trip_id, {
      id: trip.trip_id,
      calendar: calendars.get(trip.service_id)!,
      block: trip.block_id || null,
      route: trip.route_id,
      direction: +trip.direction_id,
      headsign: trip.trip_headsign,
      stops: (stopTimes.get(trip.trip_id) ?? [])
        .map((stopTime) => ({
          sequence: +stopTime.stop_sequence,
          stop: stops.get(stopTime.stop_id)!,
          time: stopTime.departure_time,
          distanceTraveled: stopTime.shape_dist_traveled ? +stopTime.shape_dist_traveled : null,
        }))
        .sort((a, b) => a.sequence - b.sequence),
      shape: shapes.get(trip.shape_id) ?? null,
    });
    return trips;
  }, new Map<string, Trip>());
}
