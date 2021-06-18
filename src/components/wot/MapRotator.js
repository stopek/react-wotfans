import { mapsRotations } from "app/settings";
import { addHours, addMinutes, differenceInHours, format } from "date-fns";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { COLOR_DARK, COLOR_SECOND, COLOR_TEXT_DARK, COLOR_THEME, RADIUS } from "styles/colors";

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

const List = styled.div`
  color: white;
  width: 100%;
  gap: 2px;
  display: flex;
  flex-direction: column;
  margin: 15px auto;
  align-items: center;
  justify-content: center;
`;

const pulseBg = keyframes`
  0% {
    background-color: ${COLOR_DARK};
  }
  100% {
    background-color: ${COLOR_SECOND};
  }
`;

const pulseDot = keyframes`
  0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;}
  50% {opacity: 1.0;}
  100% {-webkit-transform: scale(1.2, 1.2); opacity: 0.0;}
`;

const Item = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  gap: 10px;
  position: relative;
  transform-origin: center;
  background-color: ${props => props?.current ? COLOR_SECOND : COLOR_DARK};
  
  img {
    width: 500px;
    height: 500px;
    position: absolute;
    border-radius: 5px;
  }
`;

/*
// background: ${props => props?.current ? COLOR_SECOND : COLOR_DARK};
// transform: scale(${props => `${props.size}`});
// opacity: ${props => props.size - parseFloat(`0.${limit + 1}`)};
// z-index: ${props => parseInt(10 + props.size * 10)};
 */

const Dot = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Circle = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${COLOR_THEME};
  border-radius: 50%;
  position: absolute;
`;

const RingRing = styled.div`
  border: 3px solid ${COLOR_THEME};
  -webkit-border-radius: 30px;
  height: 25px;
  width: 25px;
  position: absolute;
  -webkit-animation: ${pulseDot} 2s ease-out;
  -webkit-animation-iteration-count: infinite;
  opacity: 0.0;
  ${props => !props?.current && `animation-name: none;`}
`;

const MapName = styled.div`
  flex: 5;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MapTime = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
`;

const Tier = styled.div`
  color: ${COLOR_TEXT_DARK};
  font-size: 40px;
  display: table;
  font-weight: 700;
  margin: auto;
`;

export default function MapRotator({ limit = 5 }) {
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

  let i = 0;
  const result_maps = [];
  let loop = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0);
  let end = addHours(loop, 24);
  while (loop < end) {
    const date = addMinutes(loop, 4);

    result_maps.push({
      map: mapsRotations[i],
      from: loop,
      to: date
    });

    loop = new Date(date);

    if ((i + 1) === Object.keys(mapsRotations).length) {
      i = 0;
      continue;
    }

    i++;
  }

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

  return (
    <>
      <Time>
        {format(user_date, 'HH:mm')}
      </Time>

      <List>
        {display_maps.map((map, key) => (
          <Item key={`map-${key}`} current={map.status === 'current'} size={map.size}>
            {/*<img src={map.map.image} />*/}
            <MapName>{map.map.name}</MapName>
            <Dot>
              <RingRing current={map.status === 'current'} />
              <Circle />
            </Dot>
            <MapTime>
              {format(map.from, 'HH:mm')}
              {` - `}
              {format(map.to, 'HH:mm')}
            </MapTime>
          </Item>
        ))}
      </List>

      <Tier>
        IX-X
      </Tier>
    </>
  );
}