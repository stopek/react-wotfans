import { format } from "date-fns";
import React from "react";
import styled, { keyframes } from "styled-components";
import { COLOR_DARK, COLOR_SECOND, COLOR_THEME } from "styles/colors";

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

export default function MapRotatorList({ list = [] }) {
  return (
    <List>
      {list.map((map, key) => (
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
  );
}