import MapRotator from "components/wot/map_rotator/MapRotator";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadMapGenerator, selectMapGenerator } from "reducers/wotSlice";

export default function MapRotatorPage() {
  const dispatch = useDispatch();
  const generator = useSelector(selectMapGenerator);
  const response_generator = generator?.response;

  useEffect(() => {
    dispatch(loadMapGenerator());
  }, []);

  if (!response_generator) {
    return null;
  }

  return (
    <MapRotator
      limit={[1, 10]}
      server_date={new Date(response_generator?.date ?? '')}
      maps={response_generator?.maps}
      cycle={4}
      tier={`IX-X`}
    />
  );
}
