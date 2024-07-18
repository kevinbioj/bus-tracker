import { serve } from '@hono/node-server';
import { Cron } from 'croner';
import dayjs from 'dayjs';
import { type Context, Hono } from 'hono';
import { match } from 'ts-pattern';

import { port } from './config/common.js';
import sources, { type Source } from './config/sources.js';
import { computeGtfsEntries } from './fetchers/gtfs/compute-entries.js';
import { downloadStaticResource } from './fetchers/gtfs/download-resource.js';
import type { GtfsResource } from './fetchers/gtfs/types.js';
import { computeSiriEntries } from './fetchers/siri/compute-entries.js';
import type { YabsEntry } from './types.js';
import { getOperatorVehicles } from './vehicles/get-operator-vehicles.js';
import { getVehicle } from './vehicles/get-vehicle.js';
import { getVehicles } from './vehicles/get-vehicles.js';
import { insertActivity } from './vehicles/insert-activity.js';

const waitFor = (time: number) => new Promise((r) => setTimeout(r, time));
const DEFAULT_RETRY_COUNT = 0;
const DEFAULT_RETRY_INTERVAL = 10_000;

const gtfsResources = new Map<string, GtfsResource>();
const output = new Map<string, YabsEntry[]>();
const suppliedDatabase = !!process.env.DB_PATH;
let hasComputedFirstEntries = false;

console.log(`YABS\tListening on port ${port}.`);
const server = new Hono();
server.get('/vehicles', handleGetVehicles);
server.get('/history', handleGetVehicleList);
server.get('/history/:operator', handleGetOperatorVehicleList);
server.get('/history/:operator/:number', handleGetOperatorVehicle);
server.post('/update-resource/:id', handleUpdateResource);

async function init() {
  console.log('YABS\tLoading resources into memory.');
  await Promise.allSettled(sources.map((source) => updateResource(source)));

  console.log('YABS\tComputing first entries.');
  await Promise.allSettled(sources.map((source) => updateEntries(source)));
  hasComputedFirstEntries = true;

  console.log('YABS\tRegistering scheduled tasks.');
  Cron('0 */5 * * * *', async () => {
    for (const source of sources) {
      if (source.type !== 'GTFS') continue;
      await updateResource(source);
    }
  });
  sources.map((source) => Cron(source.refreshCron, () => updateEntries(source)));
}

init();

// --- ROUTE HANDLERS

function handleGetVehicles(c: Context) {
  if (!hasComputedFirstEntries) {
    return c.json({ error: 'Server is warming up, retry in a few moments.' }, 503);
  }
  const vehicles = [...output.values()].flat().map((entry) => ({
    id: entry.id,
    source: entry.source,
    trip: {
      id: entry.trip.id,
      route: entry.trip.route,
      direction: entry.trip.direction,
      headsign: entry.trip.headsign,
      stopTimes: entry.stopTimes.map((stopTime) => ({
        id: stopTime.id,
        name: stopTime.name,
        sequence: stopTime.sequence,
        timestamp: stopTime.timestamp,
        delta: stopTime.delta,
        isRealtime: stopTime.isRealtime,
      })),
      status: entry.trip.status,
    },
    vehicle: {
      id: entry.vehicle.id,
      position: {
        latitude: entry.vehicle.position.latitude,
        longitude: entry.vehicle.position.longitude,
        type: entry.vehicle.position.type,
        timestamp: entry.vehicle.position.timestamp,
      },
      ledColor: entry.vehicle.ledColor,
    },
    timestamp: entry.timestamp,
    activityRegistered: entry.activityRegistered,
  }));
  return c.json(vehicles);
}

async function handleGetVehicleList(c: Context) {
  if (!suppliedDatabase) {
    return c.json({ error: 'History service is unavailable at this moment.' }, 503);
  }
  const vehicles = await getVehicles();
  return c.json(vehicles);
}

async function handleGetOperatorVehicleList(c: Context) {
  if (!suppliedDatabase) {
    return c.json({ error: 'History service is unavailable at this moment.' }, 503);
  }
  const operator = c.req.param('operator');
  const vehicles = await getOperatorVehicles(operator);
  return c.json(vehicles);
}

async function handleGetOperatorVehicle(c: Context) {
  if (!suppliedDatabase) {
    return c.json({ error: 'History service is unavailable at this moment.' }, 503);
  }
  const operator = c.req.param('operator');
  const number = c.req.param('number');
  const period = c.req.query('period');
  if (Number.isNaN(number)) return c.json({ message: 'An invalid vehicle number was received' }, 400);

  try {
    const vehicle = await getVehicle({ operator, number }, period);
    return c.json(vehicle);
  } catch (e) {
    if (e instanceof Error) {
      if (e.message === 'INVALID_PERIOD') return c.json({ message: 'Period must be in format YYYY-MM' }, 400);
      if (e.message === 'VEHICLE_NOT_FOUND')
        return c.json({ message: 'No vehicle was found with the supplied information' }, 404);
    }
    console.error(e);
    return c.json({ message: 'An unknown error occurred, please try again later' }, 500);
  }
}

async function handleUpdateResource(c: Context) {
  const resourceId = c.req.param('id').toUpperCase();
  const source = sources.find((s) => s.id === resourceId);
  if (typeof source === 'undefined') return c.json({ message: 'No resource exists with this id.' }, 404);
  if (source.type !== 'GTFS') return c.json({ message: 'This resource is not GTFS-based, cannot update.' }, 400);
  await updateResource(source);
  return c.json({ message: 'Update done!' }, 200);
}

// --- SCHEDULED JOBS

async function updateResource(source: Source, retryCount = DEFAULT_RETRY_COUNT, interval = DEFAULT_RETRY_INTERVAL) {
  if (source.type !== 'GTFS') {
    console.log(`YABS\t${source.id}\tNo static resource required, ignoring.`);
    return;
  }
  const currentResource = gtfsResources.get(source.id);
  if (currentResource) {
    if (currentResource.lastModified !== null) {
      const response = await fetch(source.gtfsProperties.staticResourceHref, { method: 'HEAD' })
        .catch(() => ({ ok: false as const }));
      if (response.ok && response.headers.has('Last-Modified')) {
        const newLastModified = dayjs(response.headers.get('Last-Modified'));
        if (newLastModified.diff(currentResource.lastModified) <= 0) return;
      }
    } else if (dayjs().diff(currentResource.loadedAt, 'minutes') < 60) {
      return;
    }
  }
  const then = Date.now();
  try {
    const resource = await downloadStaticResource(source.gtfsProperties);
    gtfsResources.set(source.id, resource);
  } catch (e: unknown) {
    if (retryCount === 0) {
      console.error(`YABS\t${source.id}\tFailed to update resource: ${(e as Error).name} - Aborting.`);
      console.error((e as Error).stack);
    } else {
      const [count, total] = [DEFAULT_RETRY_COUNT - retryCount + 1, DEFAULT_RETRY_COUNT];
      console.warn(
        `YABS\t${source.id}\tFailed to update resource: ${
          (e as Error).name
        } - Attempt ${count}/${total}. - Retrying in ${interval}ms.`,
      );
      console.error((e as Error).stack);
      await waitFor(interval);
      updateResource(source, retryCount - 1);
    }
    return;
  }
  console.log(`YABS\t${source.id}\tResource was updated in ${Date.now() - then}ms.`);
}

async function updateEntries(source: Source) {
  const then = Date.now();
  try {
    const entries = await match(source)
      .with({ type: 'GTFS' }, ({ gtfsProperties }) => {
        const resource = gtfsResources.get(source.id);
        if (typeof resource === 'undefined') {
          console.log(`YABS\t${source.id}\tResource is not ready yet, skipping update.`);
          return [];
        }
        return computeGtfsEntries(resource, gtfsProperties);
      })
      .with({ type: 'SIRI-XML' }, ({ siriProperties }) => computeSiriEntries(siriProperties))
      .exhaustive();

    if (entries !== null) {
      output.set(source.id, entries);
      if (suppliedDatabase) {
        for (const entry of entries) {
          if (entry.vehicle.id === null || !entry.activityRegistered) continue;
          await insertActivity(
            {
              operator: entry.source,
              number: entry.vehicle.id,
            },
            { routeId: entry.trip.route, time: dayjs.unix(entry.timestamp).toDate() },
          );
        }
      }
      console.log(`YABS\t${source.id}\tEntries were updated in ${Date.now() - then}ms.`);
    } else {
      console.log(`YABS\t${source.id}\tNo entries were returned, keeping old entries.`);
    }
  } catch (e) {
    if (e instanceof Error && e.name === 'AbortError') {
      console.error(`YABS\t${source.id}\tRequest was aborted due to timeout being reached.`);
    } else {
      console.error(`YABS\t${source.id}\tFailed to update entries:\n`, e instanceof Error ? e.stack : e);
    }
  }
}

serve({ fetch: server.fetch, port });
