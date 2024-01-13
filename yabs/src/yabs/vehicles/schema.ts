import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const vehicles = sqliteTable(
  "vehicle",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    operator: text("operator").notNull(),
    number: integer("number").notNull(),
    type: text("type", { enum: ["BUS", "SUBWAY", "TRAMWAY"] }).notNull(),
    name: text("name"),
    tcId: integer("tc_id"),
  },
  (table) => ({
    operatorIndex: index("operator_index").on(table.operator),
  }),
);

export const vehicleActivities = sqliteTable(
  "vehicle_activity",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    vehicleId: integer("vehicle_id")
      .notNull()
      .references(() => vehicles.id),
    routeId: text("route_id").notNull(),
    startTime: integer("start_time", { mode: "timestamp" }).notNull(),
    updatedTime: integer("updated_time", { mode: "timestamp" }).notNull(),
  },
  (table) => ({
    vehicleIdIndex: index("vehicle_id_index").on(table.vehicleId),
  }),
);
