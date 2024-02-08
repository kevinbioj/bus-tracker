import dayjs from "dayjs";
import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { schedule } from "node-cron";

import { Resource, YabsEntry } from "~/@types";
import { port } from "~/config/common";
import sources, { Source } from "~/config/sources";
import { downloadStaticResource } from "~/yabs/download-resource";
import { computeEntries } from "~/yabs/compute-entries";
import { getOperatorVehicles } from "~/yabs/vehicles/get-operator-vehicles";
import { getVehicle } from "~/yabs/vehicles/get-vehicle";
import { insertActivity } from "~/yabs/vehicles/insert-activity";
import { getVehicles } from "~/yabs/vehicles/get-vehicles";

const waitFor = (time: number) => new Promise((r) => setTimeout(r, time));
const DEFAULT_RETRY_COUNT = 5;
const DEFAULT_RETRY_INTERVAL = 10_000;

const resources = new Map<string, Resource>();
const output = new Map<string, YabsEntry[]>();
let hasComputedFirstEntries = false;

console.log(`YABS\tListening on port ${port}.`);
const server = fastify();
server.get("/vehicles", handleGetVehicles);
server.get("/history", handleGetVehicleList);
server.get("/history/:operator", handleGetOperatorVehicleList);
server.get("/history/:operator/:number", handleGetOperatorVehicle);
server.listen({ port });

console.log("YABS\tLoading resources into memory.");
await Promise.all(sources.map((source) => updateResource(source)));

console.log("YABS\tComputing first entries.");
await Promise.allSettled(sources.map((source) => updateEntries(source)));
hasComputedFirstEntries = true;

console.log("YABS\tRegistering scheduled tasks.");
schedule("0 * * * *", () => sources.map((source) => updateResource(source)));
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
      stopTimes: entry.stopTimes,
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
      if (e.message === "INVALID_PERIOD") return reply.code(400).send();
      if (e.message === "VEHICLE_NOT_FOUND") return reply.code(404).send();
    }
    console.error(e);
    return reply.code(500).send();
  }
}

// --- SCHEDULED JOBS

async function updateResource(source: Source, retryCount = DEFAULT_RETRY_COUNT, interval = DEFAULT_RETRY_INTERVAL) {
  const then = Date.now();
  try {
    const resource = await downloadStaticResource(source);
    resources.set(source.id, resource);
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
  const resource = resources.get(source.id);
  if (typeof resource === "undefined") {
    console.log(`YABS\t${source.id}\tResource is not ready yet, skipping update.`);
    return;
  }
  try {
    const entries = await computeEntries(resource);
    output.set(resource.source.id, entries);
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
  } catch (e) {
    console.error(`YABS\t${source.id}\tFailed to update entries:\n`, e);
  }
}
