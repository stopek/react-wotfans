import { addDays, addMinutes } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";
import { getDayOfThisWeek } from "helpers/date";

export const zonedDate = (date = new Date(), zone = 'Europe/Warsaw') => {
  return zonedTimeToUtc(date, zone);
}

export const mapsResultList = (current_date, result_maps, limit = [1, 1]) => {
  let display_maps = [];

  result_maps.forEach((map, key) => {
    if (new Date(map.from) <= current_date && new Date(map.to) > current_date) {
      for (let i = key - limit[0]; i < key; i++) {
        if (result_maps[i]) {
          display_maps.push(Object.assign({}, result_maps[i], { status: 'prev' }));
        }
      }

      display_maps.push(Object.assign({}, map, { status: 'current' }));

      for (let i = key + 1; i <= key + limit[1]; i++) {
        if (result_maps[i]) {
          display_maps.push(Object.assign({}, result_maps[i], { status: 'next' }));
        }
      }
    }
  });

  return display_maps;
}

export const mapsIntervalsList = (maps, cycle, server_date) => {
  let i = 0;
  const result_maps = [];
  let loop = zonedDate(getDayOfThisWeek('Mon', server_date));
  let end = addDays(loop, 7);

  while (loop < end) {
    const date = addMinutes(loop, cycle);

    result_maps.push({
      map: maps[i].map,
      from: loop,
      to: date
    });

    loop = new Date(date);

    if ((i + 1) === Object.keys(maps).length) {
      i = 0;
      continue;
    }

    i++;
  }

  return result_maps;
}
