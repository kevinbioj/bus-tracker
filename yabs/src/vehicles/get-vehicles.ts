import dayjs from 'dayjs';
import { desc, eq } from 'drizzle-orm';

import { ACTIVITY_TIMEOUT } from './constants.js';
import { orm } from './database.js';
import { vehicleActivities, vehicles as vehiclesSchema } from './schema.js';

export async function getVehicles() {
  const vehicles = await orm.select().from(vehiclesSchema).orderBy(vehiclesSchema.operator, vehiclesSchema.number);
  return Promise.all(
    vehicles.map(async (vehicle) => {
      const lastActivity = await orm
        .select()
        .from(vehicleActivities)
        .where(eq(vehicleActivities.vehicleId, vehicle.id))
        .orderBy(desc(vehicleActivities.startTime))
        .limit(1)
        .then((rows) => (rows.length > 0 ? rows[0] : null));
      const isActive = lastActivity
        ? dayjs().diff(dayjs(lastActivity.updatedTime), 'seconds') < ACTIVITY_TIMEOUT
        : false;
      return {
        ...vehicle,
        currentRouteId: isActive ? lastActivity!.routeId : null,
        sinceTime: isActive ? lastActivity!.startTime : lastActivity?.updatedTime ?? null,
      };
    }),
  );
}
