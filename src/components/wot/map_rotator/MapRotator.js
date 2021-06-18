import MapRotatorList from "components/wot/map_rotator/MapRotatorList";
import { addHours, addMinutes, differenceInHours, format } from "date-fns";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLOR_TEXT_DARK, RADIUS } from "styles/colors";

const Time = styled.div`
  background: white;
  font-size: 35px;
  display: table;
  line-height: 1;
  padding: 5px 25px;
  border-radius: ${RADIUS};
  font-weight: 700;
  margin: 0 auto 15px auto;
`;

const Tier = styled.div`
  color: ${COLOR_TEXT_DARK};
  font-size: 40px;
  display: table;
  font-weight: 700;
  margin: auto;
`;


export const mapsResultList = (user_date, result_maps, limit) => {
  const t = new Date();
  let display_maps = [];
  let a = 1;

  const diffHours = differenceInHours(user_date, new Date());
  const timeForUser = (map) => {
    return Object.assign({}, map, {
      from: addHours(map.from, diffHours * 1),
      to: addHours(map.to, diffHours * 1)
    });
  }

  result_maps.forEach((map, key) => {
    if (new Date(map.from) <= t && new Date(map.to) > t) {
      for (let i = key - limit; i < key; i++) {
        if (result_maps[i]) {
          display_maps.push(Object.assign({}, timeForUser(result_maps[i]), { status: 'prev', size: a }));
          a = parseFloat(a + 0.1);
        }
      }

      display_maps.push(Object.assign({}, timeForUser(map), { status: 'current', size: a }));

      for (let i = key + 1; i <= key + limit; i++) {
        if (result_maps[i]) {
          a = a - 0.1;
          display_maps.push(Object.assign({}, timeForUser(result_maps[i]), { status: 'next', size: a }));
        }
      }
    }
  });

  return display_maps;
}

const mapsIntervalsList = (maps, date, cycle) => {
  let i = 0;
  const result_maps = [];
  let loop = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0);
  let end = addHours(loop, 24);
  while (loop < end) {
    const date = addMinutes(loop, cycle);

    result_maps.push({
      map: maps[i],
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

export default function MapRotator({ limit = 5, maps = {}, cycle = 4, tier = '' }) {
  const [date, setDate] = useState(new Date());
  const hour = format(date, 'HH');
  const user_date = date.setHours(hour);

  useEffect(() => {
    const timer = setInterval(() => {
      const new_date = new Date();
      setDate(new Date(new_date.getFullYear(), new_date.getMonth(), new_date.getDate(), hour, new_date.getMinutes()));
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, []);

  const result_maps = mapsIntervalsList(maps, date, cycle);

  return (
    <>
      <Time>
        {format(user_date, 'HH:mm')}
      </Time>

      <MapRotatorList list={mapsResultList(user_date, result_maps, limit)} />

      <Tier>
        {tier}
      </Tier>
    </>
  );
}