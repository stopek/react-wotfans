import {
  addDays,
  format,
  formatDistance,
  fromUnixTime,
  parse,
  setHours,
  setMinutes,
  setSeconds,
  startOfWeek
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

export function getMondayOfDate(fromDate) {
  return addDays(setSeconds(setMinutes(setHours(startOfWeek(fromDate), 0), 0), 0), 1);
}
