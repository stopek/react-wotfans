import { useAppDispatch, useAppSelector } from "app/hooks";
import WotOverlay from "overlays/WotOverlay";
import TankPage from "pages/TankPage";
import React, { useEffect } from 'react';
import { useParams } from "react-router";
import { searchTank, selectSearchTank } from "reducers/wotSlice";

interface MatchParams {
  tank_id: string;
}

export default function TankContainer({ ...props }) {
  const dispatch = useAppDispatch();
  let { tank_id }: MatchParams = useParams();
  const tank = useAppSelector(selectSearchTank);

  useEffect(() => {
    dispatch<any>(searchTank({
      tank_id: tank_id
    }));
  }, [tank_id, dispatch]);

  let data = {};
  if (tank?.response) {
    data = {
      seo_values: {
        name: tank?.response?.tank?.name,
        description: tank?.response?.tank?.description
      }, ...props
    };
  }

  return (
    <WotOverlay {...data}>
      <>
        {!!tank?.response && (
          <TankPage tank={tank?.response?.tank} />
        )}
      </>
    </WotOverlay>
  );
}
