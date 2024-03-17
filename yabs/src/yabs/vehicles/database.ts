import { Database } from 'bun:sqlite';
import { drizzle } from 'drizzle-orm/bun-sqlite';

const DB_PATH = Bun.env.DB_PATH;
if (typeof DB_PATH === 'undefined') {
  console.warn(`YABS\tNo database path supplied (DB_PATH), activities won't be recorded.`);
}

const database = new Database(DB_PATH ?? ':memory:');
export const orm = drizzle(database);
