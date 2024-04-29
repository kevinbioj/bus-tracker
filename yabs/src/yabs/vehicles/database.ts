import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';

const DB_PATH = process.env.DB_PATH;
if (typeof DB_PATH === 'undefined') {
  console.warn(`YABS\tNo database path supplied (DB_PATH), activities won't be recorded.`);
}

const database = new Database(DB_PATH ?? ':memory:');
export const orm = drizzle(database);
export const databaseActivated = typeof DB_PATH === 'string';
