import dayjs from 'dayjs';
import { and, desc, eq } from 'drizzle-orm';

import { orm } from './database.js';
import { vehicleActivities, vehicles } from './schema.js';
import type { VehicleIdentifier } from './vehicle-identifier.js';

const ALLOWED_TIMEOUT = 3600; // 1 hour of allowed timeout on a same route

type ActivityData = { routeId: string; time: Date };

const shouldUpdateActivity = (activity: { routeId: string; updatedTime: Date }, against: ActivityData) => {
  if (activity.routeId !== against.routeId) return false;
  return dayjs(against.time).diff(dayjs(activity.updatedTime), 'seconds') < ALLOWED_TIMEOUT;
};

export async function insertActivity(identifier: VehicleIdentifier, activity: ActivityData) {
  const vehicle = await getOrCreateVehicle(identifier);
  const lastActivity = await orm
    .select()
    .from(vehicleActivities)
    .where(eq(vehicleActivities.vehicleId, vehicle.id))
    .orderBy(desc(vehicleActivities.startTime))
    .limit(1)
    .then((rows) => rows[0]);

  if (lastActivity && shouldUpdateActivity(lastActivity, activity)) {
    await orm
      .update(vehicleActivities)
      .set({ updatedTime: activity.time })
      .where(eq(vehicleActivities.id, lastActivity.id));
  } else {
    await orm.insert(vehicleActivities).values([
      {
        vehicleId: vehicle.id,
        routeId: activity.routeId,
        startTime: activity.time,
        updatedTime: activity.time,
      },
    ]);
  }
}

// ---

async function getOrCreateVehicle(identifier: VehicleIdentifier) {
  const vehicle = await orm
    .select()
    .from(vehicles)
    .where(and(eq(vehicles.operator, identifier.operator), eq(vehicles.number, identifier.number)))
    .then((rows) => rows[0]);

  if (!vehicle) {
    const createdVehicle = await orm
      .insert(vehicles)
      .values([
        {
          operator: identifier.operator,
          number: identifier.number,
          type: 'BUS',
        },
      ])
      .returning()
      .then((rows) => rows[0]!);
    return createdVehicle;
  }

  return vehicle;
}
