import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import duration from 'dayjs/plugin/duration.js';
import isBetween from 'dayjs/plugin/isBetween.js';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter.js';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import timezone from 'dayjs/plugin/timezone.js';
import utc from 'dayjs/plugin/utc.js';

import { timeZone } from '../../../config/common.js';

dayjs.extend(customParseFormat);
dayjs.extend(duration);
dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(relativeTime);
dayjs.extend(timezone);
dayjs.extend(utc);

const isBeforeNextDay = (date: dayjs.Dayjs) => date.hour() < 4 || (date.hour() === 4 && date.minute() < 30);

export function parseTime(time: string) {
  const now = dayjs();
  const computed = dayjs.tz(time, 'HH:mm:ss', timeZone);
  if (isBeforeNextDay(now)) return computed.subtract(1, 'day');
  return computed;
}
