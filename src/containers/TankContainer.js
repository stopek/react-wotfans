import Wn8Bar from "components/wot/wn8/Wn8Bar";
import WotOverlay from "overlays/Wot";
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

  return (
    <WotOverlay {...props}>
      {tank?.response && (
        <>
          Średnie WN8 na tym czołgu to:<br />
          <Wn8Bar value={tank?.response?.wn8} />
        </>
      )}
    </WotOverlay>
  );
}