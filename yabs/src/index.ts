import dayjs from 'dayjs';
import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import { schedule } from 'node-cron';
import { match } from 'ts-pattern';

import { YabsEntry } from '~/@types';
import { port } from '~/config/common';
import sources, { Source } from '~/config/sources';
import { GtfsResource } from '~/yabs/fetcher/gtfs/@types';
import { computeGtfsEntries } from '~/yabs/fetcher/gtfs/compute-entries';
import { downloadStaticResource } from '~/yabs/fetcher/gtfs/download-resource';
import { computeSiriEntries } from '~/yabs/fetcher/siri/compute-entries';
import { getOperatorVehicles } from '~/yabs/vehicles/get-operator-vehicles';
import { getVehicle } from '~/yabs/vehicles/get-vehicle';
import { getVehicles } from '~/yabs/vehicles/get-vehicles';
import { insertActivity } from '~/yabs/vehicles/insert-activity';

const waitFor = (time: number) => new Promise((r) => setTimeout(r, time));
const DEFAULT_RETRY_COUNT = 0;
const DEFAULT_RETRY_INTERVAL = 10_000;

const gtfsResources = new Map<string, GtfsResource>();
const output = new Map<string, YabsEntry[]>();
let hasComputedFirstEntries = false;

console.log(`YABS\tListening on port ${port}.`);
const server = fastify();
server.get('/vehicles', handleGetVehicles);
server.get('/history', handleGetVehicleList);
server.get('/history/:operator', handleGetOperatorVehicleList);
server.get('/history/:operator/:number', handleGetOperatorVehicle);
server.listen({ port });

console.log('YABS\tLoading resources into memory.');
for (const source of sources) await updateResource(source);

console.log('YABS\tComputing first entries.');
for (const source of sources) {
  try {
    await updateEntries(source);
  } catch {}
}
hasComputedFirstEntries = true;

console.log('YABS\tRegistering scheduled tasks.');
schedule('0 * * * *', () => sources.map((source) => updateResource(source)));
sources.map((source) => schedule(source.refreshCron, () => updateEntries(source)));

// --- ROUTE HANDLERS

function handleGetVehicles(_: FastifyRequest, reply: FastifyReply) {
  if (!hasComputedFirstEntries) {
    return reply.code(503).send();
  }
  return [...output.values()].flat().map((entry) => ({
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
    },
    vehicle: {
      id: entry.vehicle.id,
      position: {
        latitude: entry.vehicle.position.latitude,
        longitude: entry.vehicle.position.longitude,
        type: entry.vehicle.position.type,
        timestamp: entry.vehicle.position.timestamp,
      },
    },
    timestamp: entry.timestamp,
  }));
}

async function handleGetVehicleList(request: FastifyRequest) {
  return getVehicles();
}

async function handleGetOperatorVehicleList(request: FastifyRequest) {
  const { operator } = request.params as { operator: string };
  return getOperatorVehicles(operator);
}

async function handleGetOperatorVehicle(request: FastifyRequest, reply: FastifyReply) {
  const { operator, number } = request.params as { operator: string; number: string };
  const { period } = request.query as { period?: string };
  if (Number.isNaN(number)) return reply.code(400).send();

  try {
    return getVehicle({ operator, number: +number }, period);
  } catch (e) {
    if (e instanceof Error) {
      if (e.message === 'INVALID_PERIOD') return reply.code(400).send();
      if (e.message === 'VEHICLE_NOT_FOUND') return reply.code(404).send();
    }
    console.error(e);
    return reply.code(500).send();
  }
}

// --- SCHEDULED JOBS

async function updateResource(source: Source, retryCount = DEFAULT_RETRY_COUNT, interval = DEFAULT_RETRY_INTERVAL) {
  if (source.type !== 'GTFS') {
    console.log(`YABS\t${source.id}\tNo static resource required, ignoring.`);
    return;
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
      await Promise.all(
        entries
          .filter((data) => data.vehicle.id !== null)
          .map((data) =>
            insertActivity(
              { operator: data.source, number: +data.vehicle.id! },
              { routeId: data.trip.route, time: dayjs.unix(data.timestamp).toDate() },
            ),
          ),
      );
      console.log(`YABS\t${source.id}\tEntries were updated in ${Date.now() - then}ms.`);
    } else {
      console.log(`YABS\t${source.id}\tNo entries were returned, keeping old entries.`);
    }
  } catch (e) {
    console.error(`YABS\t${source.id}\tFailed to update entries:\n`, e);
  }
}
