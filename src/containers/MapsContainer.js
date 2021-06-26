import MapsList from "components/wot/maps/MapsList";
import WotOverlay from "overlays/Wot";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadMaps, selectLoadMaps } from "reducers/wotSlice";

export default function MapsContainer({ ...props }) {
  const dispatch = useDispatch();
  const maps = useSelector(selectLoadMaps);

  useEffect(() => {
    dispatch(loadMaps());
  }, [dispatch]);

  return (
    <WotOverlay {...props}>
      {maps?.response && (
        <MapsList maps={maps?.response} />
      )}
    </WotOverlay>
  );
}
