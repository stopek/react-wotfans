import MapPreview from "components/wot/maps/MapPreview";
import { format, subHours } from "date-fns";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { COLOR_DARK, COLOR_RED, COLOR_THEME, RADIUS } from "styles/colors";

const List = styled.div`
  color: white;
  width: 100%;
  gap: 2px;
  display: flex;
  flex-direction: column;
  margin: 15px auto;
  align-items: center;
  justify-content: center;
  border-radius: ${RADIUS};
  overflow: hidden;
`;

const pulseDot = keyframes`
  0% {
    -webkit-transform: scale(0.1, 0.1);
    opacity: 0.0;
  }

  50% {
    opacity: 1.0;
  }

  100% {
    -webkit-transform: scale(1.2, 1.2);
    opacity: 0.0;
  }
`;

const Item = styled.div`
  width: 100%;
  position: relative;
`;

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
  background-color: ${props => props?.current ? COLOR_RED : COLOR_THEME};
  border-radius: 50%;
  position: absolute;
`;

const RingRing = styled.div`
  border: 3px solid ${props => props?.current ? COLOR_RED : COLOR_THEME};
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

const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 10px;
  display: flex;
  gap: 10px;
  background-color: ${COLOR_DARK};
  cursor: pointer;

  ${props => props?.current && `
    position: absolute;
    padding-bottom: 150px;
    top: 0;
    left:0;
    white-space: nowrap;
    width: 100%;
    background: rgb(28,28,28);
    background: linear-gradient(180deg, rgba(28,28,28,1) 10%, rgba(28,28,28,0) 70%);
  `}
`;

const Map = styled.div`
  position: relative;
  z-index: 1;
`;

export default function MapRotatorList({ list = [], diff_hours }) {
  const [current, setCurrent] = useState(null);

  const preview = (key) => {
    if (current === key) {
      setCurrent(null);
      return;
    }

    setCurrent(key);
  }

  return (
    <List>
      {list.map((map, key) => {
        const is_current = (map.status === 'current' || current === key);
        const is_real_current = (map.status === 'current');

        return (
          <Item key={`map-${key}`} onClick={() => preview(key)}>
            {is_current && (
              <Map>
                <MapPreview video={map.map?.video} height={250} />
              </Map>
            )}

            <Content current={is_current}>
              <MapName>{map.map.name}</MapName>
              <Dot>
                <RingRing current={is_real_current} />
                <Circle current={is_real_current} />
              </Dot>

              <MapTime>
                {format(subHours(map.from, diff_hours), 'HH:mm')}
                {` - `}
                {format(subHours(map.to, diff_hours), 'HH:mm')}
              </MapTime>
            </Content>
          </Item>
        );
      })}
    </List>
  );
}
