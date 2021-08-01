import { useAppDispatch, useAppSelector } from "app/hooks";
import MapRotator from "components/wot/map_rotator/MapRotator";
import { parse } from "date-fns";
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { loadMapGenerator, selectMapGenerator } from "reducers/wotSlice";

type MapRotatorPageType = {
  limit: number[],
  filter?: boolean,
  ads?: boolean
}

function MapRotatorPage({ limit, filter, ads }: MapRotatorPageType) {
  const dispatch = useAppDispatch();
  const generator = useAppSelector(selectMapGenerator);
  const [date, setDate] = useState<Date | null>(null);
  const [server_date, setServerDate] = useState<Date | null>(null);

  const response_generator = generator?.response;

  useEffect(() => {
    dispatch<any>(loadMapGenerator());
  }, [dispatch]);

  useEffect(() => {
    if (response_generator?.date) {
      setDate(new Date());
      setServerDate(parse(response_generator?.date, 'yyyy-MM-dd HH:mm:ss', new Date()));
    }
  }, [response_generator]);

  if (!response_generator || !date || !server_date) {
    return null;
  }

  return (
    <MapRotator
      limit={limit}
      server_date={server_date}
      user_date={date}
      maps={response_generator?.maps}
      cycle={4}
      filter={filter}
      tier={`IX-X`}
      ads={ads}
    />
  );
}

MapRotatorPage.propTypes = {
  limit: PropTypes.arrayOf(PropTypes.number).isRequired,
  filter: PropTypes.bool,
  ads: PropTypes.bool
}

MapRotatorPage.defaultProps = {
  filter: false,
  ads: false
}

export default MapRotatorPage;
