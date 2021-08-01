import { useAppDispatch, useAppSelector } from "app/hooks";
import MapsList from "components/wot/maps/MapsList";
import React, { useEffect } from "react";
import { loadMaps, selectLoadMaps } from "reducers/wotSlice";

export default function MapsListPage() {
  const dispatch = useAppDispatch();
  const maps = useAppSelector(selectLoadMaps);

  useEffect(() => {
    dispatch<any>(loadMaps());
  }, [dispatch]);

  if (!maps?.response) {
    return null;
  }

  return (
    <MapsList maps={maps.response} />
  );
}
