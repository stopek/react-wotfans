import MapRotator from "components/wot/map_rotator/MapRotator";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadMapGenerator, selectMapGenerator } from "reducers/wotSlice";

export default function MapRotatorPage() {
  const dispatch = useDispatch();
  const map_generator = useSelector(selectMapGenerator);

  useEffect(() => {
    dispatch(loadMapGenerator());
  }, [dispatch]);

  if (!map_generator?.response) {
    return null;
  }

  return (
    <MapRotator
      limit={6}
      maps={map_generator?.response}
      cycle={4}
      tier={`IX-X`}
    />
  );
}
