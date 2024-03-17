import dayjs from 'dayjs';
import { and, asc, desc, eq } from 'drizzle-orm';

import { orm } from '~/yabs/vehicles/database';
import { vehicleActivities, vehicles } from '~/yabs/vehicles/schema';
import { VehicleIdentifier } from '~/yabs/vehicles/vehicle-identifier';

const ALLOWED_TIMEOUT = 7200; // 2 hours of allowed timeout on a same route

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
    .then((rows) => (rows.length > 0 ? rows[0] : null));

  if (lastActivity !== null && shouldUpdateActivity(lastActivity, activity)) {
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
    .then((rows) => (rows.length > 0 ? rows[0] : null));

  if (vehicle === null) {
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
      .then((rows) => rows[0]);
    return createdVehicle;
  }

  return vehicle;
}
