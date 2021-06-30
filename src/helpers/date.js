import {
  addDays,
  format,
  formatDistance,
  fromUnixTime,
  getISODay,
  parse,
  setHours,
  setMinutes,
  setSeconds
} from "date-fns";

export const date_from_unix = (date, format_pattern = 'yyyy-MM-dd') => {
  if (!date) {
    return null;
  }

  return format(fromUnixTime(date), format_pattern);
}

export const date_ago_from_unix = (date, format_pattern, headers = {}) => {
  const d = date_parse(date_from_unix(date, format_pattern), format_pattern);

  return formatDistance(d, new Date(), Object.assign({}, { addSuffix: true }, headers));
}

export const date_format = (date, format_pattern = "yyyy-MM-dd") => {
  return date ? format(date, format_pattern) : null;
}

export const date_parse = (date, format_pattern = 'yyyy-MM-dd') => {
  if (!date) {
    return null;
  }

  return parse(date, format_pattern, new Date());
}

export function getDayOfThisWeek(dayOfWeek, fromDate = new Date()) {
  const dayOfWeekMap = {
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thur: 4,
    Fri: 5,
    Sat: 6,
    Sun: 7,
  };

  const offsetDays = - (getISODay(fromDate) - dayOfWeekMap[dayOfWeek]);

  return setSeconds(setMinutes(setHours(addDays(fromDate, offsetDays), 0), 0), 0);
}
