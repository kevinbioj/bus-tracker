import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";

const DB_PATH = Bun.env.DB_PATH;
if (typeof DB_PATH === "undefined") {
  throw new Error("Expected environment variable 'DB_PATH' to be defined!");
}

const database = new Database(DB_PATH);
export const orm = drizzle(database);
