import MapRotator from "components/wot/map_rotator/MapRotator";
import { parse } from "date-fns";
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadMapGenerator, selectMapGenerator } from "reducers/wotSlice";

function MapRotatorPage({ limit, filter, ads }) {
  const dispatch = useDispatch();
  const generator = useSelector(selectMapGenerator);
  const response_generator = generator?.response;
  const [date, setDate] = useState(null);
  const [server_date, setServerDate] = useState(null);

  useEffect(() => {
    dispatch(loadMapGenerator());
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
