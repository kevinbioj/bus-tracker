import dayjs from 'dayjs';

import type { Trip } from '../types.js';
import { parseTime } from './parse-time.js';

export function checkTrip(trip: Trip) {
  if (trip.stops.length === 0) return false;
  const now = dayjs();
  // 1. We ensure time is between first stop departure and last stop departure.
  const firstTime = parseTime(trip.stops[0].time);
  const lastTime = parseTime(trip.stops.at(-1)!.time);
  if (!now.isBetween(firstTime, lastTime, 'minute', '[]')) return false;
  // 2. If it is, then the trip is currently ongoing.
  return true;
}
