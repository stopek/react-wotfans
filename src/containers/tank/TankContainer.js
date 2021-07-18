import WotOverlay from "overlays/Wot";
import TankPage from "pages/TankPage";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { searchTank, selectSearchTank } from "reducers/wotSlice";

export default function TankContainer({ match, ...props }) {
  const dispatch = useDispatch();
  let { tank_id } = useParams();
  const tank = useSelector(selectSearchTank);

  useEffect(() => {
    dispatch(searchTank({
      tank_id: tank_id
    }))
  }, [tank_id, dispatch]);

  let data = {};
  if (tank?.response) {
    data = { seo_values: { name: tank?.response?.tank?.name, description: tank?.response?.tank?.description }, ...props };
  }

  return (
    <WotOverlay {...data}>
      {tank?.response && (
        <TankPage
          tank={tank?.response?.tank}
          wn8={tank?.response?.wn8}
        />
      )}
    </WotOverlay>
  );
}
