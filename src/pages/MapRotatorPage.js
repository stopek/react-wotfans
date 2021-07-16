import MapRotator from "components/wot/map_rotator/MapRotator";
import { parse } from "date-fns";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadMapGenerator, selectMapGenerator } from "reducers/wotSlice";

export default function MapRotatorPage({ limit = [1, 1], filter = false, ads = false }) {
  const dispatch = useDispatch();
  const generator = useSelector(selectMapGenerator);
  const response_generator = generator?.response;

  useEffect(() => {
    dispatch(loadMapGenerator());
  }, []);

  if (!response_generator) {
    return null;
  }

  const server_date = parse(response_generator?.date, 'yyyy-MM-dd HH:mm:ss', new Date());
  const maps = response_generator?.maps;

  return (
    <MapRotator
      limit={limit}
      server_date={server_date}
      user_date={new Date()}
      maps={maps}
      cycle={4}
      filter={filter}
      tier={`IX-X`}
      ads={ads}
    />
  );
}
