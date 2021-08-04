import MapsList from "components/wot/maps/MapsList";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMaps, selectLoadMaps } from "reducers/wotSlice";

export default function MapsListPage({ grid_props = {}, card_props = {} }) {
  const dispatch = useDispatch();
  const maps = useSelector(selectLoadMaps);

  useEffect(() => {
    dispatch(loadMaps());
  }, [dispatch]);

  if (!maps?.response) {
    return null;
  }

  return (
    <MapsList maps={maps?.response} grid_props={grid_props} card_props={card_props} />
  );
}
