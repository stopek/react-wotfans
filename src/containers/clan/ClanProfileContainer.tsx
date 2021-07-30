import { useAppDispatch, useAppSelector } from "app/hooks";
import ClanDetails from "components/wot/clans/ClanDetails";
import WotOverlay from "overlays/WotOverlay";
import React, { useEffect } from 'react';
import { useParams } from "react-router";
import { searchClan, selectSearchClan } from "reducers/wotSlice";

interface MatchParams {
  tag: string;
}

export default function ClanProfileContainer({ ...props }) {
  let { tag }: MatchParams = useParams();
  const dispatch = useAppDispatch();
  const clan = useAppSelector(selectSearchClan);

  useEffect(() => {
    dispatch<any>(searchClan({
      clan_name: tag
    }));
  }, [tag, dispatch]);

  let data = {};
  if (clan?.response) {
    data = { seo_values: { name: clan?.response?.clan?.tag || '' }, ...props };
  }

  return (
    <WotOverlay {...data}>
      {clan?.response && (
        <ClanDetails
          clan={clan?.response?.clan}
          statistics={clan?.response?.statistics}
        />
      )}
    </WotOverlay>
  );
}
