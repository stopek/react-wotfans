import { hexToRgb } from "@material-ui/core";
import ProgressLinear from "components/ui/progress/ProgressLinear";
import Dot from "components/wot/Dot";
import MapPreview from "components/wot/maps/MapPreview";
import { addSeconds, format, getUnixTime } from "date-fns";
import hexToRgbA from "helpers/hexToRgbA";
import PropTypes from 'prop-types';
import React, { useState } from "react";
import styled from "styled-components";
import { COLOR_BLUE, COLOR_DARK_2, COLOR_TEXT, RADIUS } from "styles/colors";

const List = styled.div`
  color: ${COLOR_TEXT};
  width: 100%;
  gap: 2px;
  display: flex;
  flex-direction: column;
  margin: 15px auto;
  align-items: center;
  justify-content: center;
  border-radius: ${RADIUS};
  overflow: hidden;
  position: relative;
  z-index: 100;
`;

const Item = styled.div`
  width: 100%;
  position: relative;
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
  background-color: ${COLOR_DARK_2};
  cursor: pointer;

  ${props => props?.current && `
    position: absolute;
    padding-bottom: 150px;
    top: 0;
    left:0;
    white-space: nowrap;
    width: 100%;
    background: ${hexToRgb(COLOR_DARK_2)};
    background: linear-gradient(180deg, ${hexToRgbA(COLOR_DARK_2, 1)} 10%, ${hexToRgbA(COLOR_DARK_2, 0)} 70%);
  `}
`;

const Map = styled.div`
  position: relative;
  z-index: 1;
`;

const Overlay = styled.div`
  font-size: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
  z-index: 1000;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  line-height: 1;
  
  span {
    font-size: 30px;
    font-weight: 700;
  }
`;

const Blue = styled.strong`
  color: ${COLOR_BLUE};
`;

function MapRotatorList({ list, diff_seconds, filter_maps, date, cycle_seconds, advanced }) {
  const [current, setCurrent] = useState(null);
  const [currentVisible, setCurrentVisible] = useState(true);

  const preview = (key) => {
    if (current === key) {
      setCurrent(null);
      return;
    }

    setCurrent(key);
  }

  return (
    <List>
      <Overlay>
        <span>temporarily unavailable</span>
        <strong>stay in <Blue>tank</Blue></strong>
      </Overlay>
      {list.map((map, key) => {
        const is_real_current = (map.status === 'current');
        const is_current = ((is_real_current && currentVisible) || current === key);

        if (!!filter_maps && filter_maps?.length > 0 && !filter_maps.includes(map.map.id) && !is_current) {
          return null;
        }

        const start = addSeconds(map.from, diff_seconds);
        const end = addSeconds(map.to, diff_seconds);

        let percentage;
        if (is_real_current) {
          percentage = 100 - ((getUnixTime(end) - getUnixTime(date)) * 100) / cycle_seconds;
        }

        return (
          <Item key={`map-${key}-${map.map.id}`} onClick={() => {
            if (is_real_current) {
              return setCurrentVisible(!currentVisible);
            }

            preview(key);
          }}>
            {is_current && (
              <>
                <Map>
                  <MapPreview video={map.map?.video} height={250} />
                </Map>
              </>
            )}

            <Content current={is_current}>
              <MapName>{map.map.name}</MapName>

              <Dot blinking={is_real_current} />

              <MapTime>
                {format(start, 'HH:mm')}
                {` - `}
                {format(end, 'HH:mm')}
              </MapTime>
            </Content>

            {is_real_current && advanced && (
              <ProgressLinear value={percentage} />
            )}
          </Item>
        );
      })}
    </List>
  );
}

MapRotatorList.propTypes = {
  list: PropTypes.array.isRequired,
  diff_seconds: PropTypes.number.isRequired,
  cycle_seconds: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  filter_maps: PropTypes.arrayOf(PropTypes.number),
  advanced: PropTypes.bool
}

MapRotatorList.defaultProps = {
  advanced: false
}

export default MapRotatorList;
