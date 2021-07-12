import MapRotator from "components/wot/map_rotator/MapRotator";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadMapGenerator, selectMapGenerator } from "reducers/wotSlice";

export default function MapRotatorPage() {
  const dispatch = useDispatch();
  const map_generator = useSelector(selectMapGenerator);
  const response = map_generator?.response;

  useEffect(() => {
    dispatch(loadMapGenerator());
  }, [dispatch]);


  if (!response) {
    return null;
  }

  return (
    <MapRotator
      limit={[1, 10]}
      server_date={new Date(response?.date)}
      maps={response?.maps}
      cycle={4}
      tier={`IX-X`}
    />
  );
}
