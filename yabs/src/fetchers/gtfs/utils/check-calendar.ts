import dayjs from 'dayjs';

import type { Service } from '../types.js';

export function checkCalendar(calendar: Service) {
  const now = dayjs().subtract(4, 'hours').subtract(30, 'minutes');
  const nowDate = now.format('YYYYMMDD');
  // 1. If we are outside the operating period, we deny the calendar.
  if (!now.isBetween(dayjs(calendar.startDate, 'YYYYMMDD'), dayjs(calendar.endDate, 'YYYYMMDD'), 'day', '[]'))
    return false;
  // 2. If the current date is whitelisted, we allow the calendar.
  if (calendar.inclusions.includes(nowDate)) return true;
  // 3. If the current date is blacklisted, we deny the calendar.
  if (calendar.exclusions.includes(nowDate)) return false;
  // 4. We check whether the calendar runs on the current day of week.
  return calendar.days[now.day()];
}
