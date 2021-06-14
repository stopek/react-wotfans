import { format, fromUnixTime, parse } from "date-fns";

export const date_from_unix = (date, format_pattern = 'yyyy-MM-dd') => {
  if (!date) {
    return null;
  }

  return format(fromUnixTime(date), format_pattern);
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