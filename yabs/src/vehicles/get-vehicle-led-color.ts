import { and, eq } from 'drizzle-orm';

import { databaseActivated, orm } from './database.js';
import { vehicles } from './schema.js';
import type { VehicleIdentifier } from './vehicle-identifier.js';

export async function getVehicleLedColor(identifier: VehicleIdentifier) {
  if (!databaseActivated) return null;
  const rows = await orm
    .select({ ledColor: vehicles.ledColor })
    .from(vehicles)
    .where(and(eq(vehicles.operator, identifier.operator), eq(vehicles.number, identifier.number)));
  return rows[0]?.ledColor ?? null;
}
