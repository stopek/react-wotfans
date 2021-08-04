import { Grid } from "@material-ui/core";
import Clock from "components/wot/Clock";
import Dot from "components/wot/Dot";
import { format } from "date-fns";
import { date_parse } from "helpers/date";
import { mapsIntervalsList } from "helpers/rotator";
import WotOverlay from "overlays/Wot";
import MapsListPage from "pages/MapsListPage";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Events, scroller } from "react-scroll";
import { guessList, loadMaps, selectLoadMaps, selectMapGuess } from "reducers/wotSlice";
import styled from "styled-components";
import { COLOR_DARK_2, COLOR_TEXT, RADIUS } from "styles/colors";

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
  max-height: calc(100vh - 100px);
  overflow-y: auto;
`;

const Item = styled.div`
  width: 100%;
  position: relative;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 10px;
  display: flex;
  gap: 10px;
  background-color: ${COLOR_DARK_2};
  cursor: pointer;
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

export default function MapsGuessContainer({ ...props }) {
  const dispatch = useDispatch();
  const maps = useSelector(selectLoadMaps);
  const [server_date, setServerDate] = useState(null);
  const guess = useSelector(selectMapGuess);

  useEffect(() => {
    Events.scrollEvent.register('begin');
    Events.scrollEvent.register('end');

    dispatch(guessList());
    dispatch(loadMaps());
  }, []);

  const refresh = () => {
    dispatch(guessList());
  }

  const interval = !!maps?.response && mapsIntervalsList(maps.response, 4, server_date);

  useEffect(() => {

    if (!!guess?.response) {
      const date = date_parse(guess?.response?.date, 'yyyy-MM-dd HH:mm:ss');
      const scrollId = `time_${format(date, 'yyyy MM dd HH:mm:ss')}`;

      setServerDate(date);

      //
      // setServerDate(date);
      //
      // let goToContainer = new Promise((resolve, reject) => {
      //   Events.scrollEvent.register('end', () => {
      //     resolve();
      //     Events.scrollEvent.remove('end');
      //   });
      //
      //   scroller.scrollTo('maps-list-container', {
      //     duration: 800,
      //     delay: 0,
      //     smooth: 'easeInOutQuart'
      //   });
      // });
      //
      // goToContainer.then(() => scroller.scrollTo(scrollId, {
      //   duration: 800,
      //   delay: 0,
      //   smooth: 'easeInOutQuart',
      //   containerId: 'maps-list-container'
      // }));
    }
  }, [guess?.response?.date]);

  return (
    <WotOverlay {...props}>
      {!!server_date && (
        <>
          <Clock
            date={server_date}
            setDate={refresh}
            format_time={`HH:mm`}
            interval={5000}
          />

          <Grid container spacing={2}>
            <Grid item md={9}>
              <MapsListPage grid_props={{ xl: 2 }} card_props={{ height: 200 }} />
            </Grid>
            <Grid item md={3}>
              <List id={`maps-list-container`}>
                {interval?.length > 0 && interval?.map((map, key) => {
                  return (
                    <Item key={`map-guess-${key}`} id={`time_${format(map.from, 'yyyyMMddHH')}`}>
                      <Content>
                        <MapName>?</MapName>

                        <Dot />

                        <MapTime>
                          {format(map.from, 'HH:mm')}
                          {` - `}
                          {format(map.to, 'HH:mm')}
                        </MapTime>
                      </Content>
                    </Item>
                  );
                })}
              </List>
            </Grid>
          </Grid>
        </>
      )}
    </WotOverlay>
  );
}
