import dayjs from "dayjs";
import { desc, eq } from "drizzle-orm";
import { ACTIVITY_TIMEOUT } from "~/yabs/vehicles/constants";

import { orm } from "~/yabs/vehicles/database";
import { vehicleActivities, vehicles as vehiclesSchema } from "~/yabs/vehicles/schema";

export async function getOperatorVehicles(operator: string) {
  const vehicles = await orm
    .select()
    .from(vehiclesSchema)
    .where(eq(vehiclesSchema.operator, operator))
    .orderBy(vehiclesSchema.number);
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
        ? dayjs().diff(dayjs(lastActivity.updatedTime), "seconds") < ACTIVITY_TIMEOUT
        : false;
      return {
        ...vehicle,
        currentRouteId: isActive ? lastActivity!.routeId : null,
        sinceTime: isActive ? lastActivity!.startTime : lastActivity?.updatedTime ?? null,
      };
    }),
  );
}
