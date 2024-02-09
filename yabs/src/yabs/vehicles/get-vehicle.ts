import dayjs from "dayjs";
import { SQL, and, desc, eq, sql } from "drizzle-orm";
import { ACTIVITY_TIMEOUT } from "~/yabs/vehicles/constants";

import { orm } from "~/yabs/vehicles/database";
import { vehicles, vehicleActivities } from "~/yabs/vehicles/schema";
import { VehicleIdentifier } from "~/yabs/vehicles/vehicle-identifier";

const ACTIVITY_MONTH_SELECT = (distinct: boolean) =>
  sql.raw(
    `${distinct ? "DISTINCT " : ""}strftime('%Y-%m', datetime(${vehicleActivities.startTime.name}, 'unixepoch'))`,
  ) as SQL<string>;
const PERIOD_REGEXP = /^(20[2-4][0-9])-(0[1-9]|1[0-2])$/;

export async function getVehicle(identifier: VehicleIdentifier, period?: string) {
  if (typeof period !== "undefined" && !PERIOD_REGEXP.test(period)) {
    throw new Error("INVALID_PERIOD");
  }
  period ??= dayjs().format("YYYY-MM");

  const vehicle = await orm
    .select()
    .from(vehicles)
    .where(and(eq(vehicles.operator, identifier.operator), eq(vehicles.number, identifier.number)))
    .then((rows) => (rows.length > 0 ? rows[0] : null));

  if (vehicle === null) {
    throw new Error("VEHICLE_NOT_FOUND");
  }

  const activeOn = await orm
    .select({
      activeOn: ACTIVITY_MONTH_SELECT(true),
    })
    .from(vehicleActivities)
    .where(eq(vehicleActivities.vehicleId, vehicle.id))
    .then((rows) => rows.map(({ activeOn }) => activeOn));

  const activities = await orm
    .select({
      routeId: vehicleActivities.routeId,
      startTime: vehicleActivities.startTime,
      updatedTime: vehicleActivities.updatedTime,
    })
    .from(vehicleActivities)
    .where(and(eq(vehicleActivities.vehicleId, vehicle.id), eq(ACTIVITY_MONTH_SELECT(false), period)))
    .orderBy(desc(vehicleActivities.startTime))
    .then((activities) =>
      activities.map((activity, index) => ({
        routeId: activity.routeId,
        startTime: activity.startTime,
        endTime:
          index === 0 && dayjs().diff(dayjs(activity.updatedTime), "seconds") < ACTIVITY_TIMEOUT
            ? null
            : activity.updatedTime,
      })),
    );

  return { ...vehicle, activeOn, activities };
}
