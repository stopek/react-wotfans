import ClanDetails from "components/wot/clans/ClanDetails";
import WotOverlay from "overlays/Wot";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { searchClan, selectSearchClan } from "reducers/wotSlice";

export default function ClanContainer({ match, ...props }) {
  let { tag } = useParams();
  const dispatch = useDispatch();
  const clan = useSelector(selectSearchClan);

  useEffect(() => {
    dispatch(searchClan({
      clan_name: tag
    }))
  }, [tag, dispatch]);

  return (
    <WotOverlay
      seo_values={{ name: clan?.response?.clan?.tag || '' }}
      {...props}
    >
      {clan?.response && (
        <ClanDetails
          clan={clan?.response?.clan}
          statistics={clan?.response?.statistics}
        />
      )}
    </WotOverlay>
  );
}
