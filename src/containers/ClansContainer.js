import { CLAN_URL } from "app/routes";
import ClanPaginator from "components/wot/clans/ClanPaginator";
import ClansList from "components/wot/clans/ClansList";
import SearchClanForm from "components/wot/clans/SearchClanForm";
import fillRoute from "helpers/fillRoute";
import WotOverlay from "overlays/Wot";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { clansList, selectClansList } from "reducers/wotSlice";

function IndexContainer(...props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [clans_page, setClansPage] = useState(0);
  const clans_list = useSelector(selectClansList);

  useEffect(() => {
    dispatch(clansList({ page: clans_page }));
  }, [dispatch, clans_page]);

  const response = clans_list?.response;

  const handleSearchClanByTag = (tag) => {
    history.push(fillRoute(CLAN_URL, { tag: tag }));
  }

  const handleSearchClan = (event, data) => {
    event.preventDefault();

    handleSearchClanByTag(data);
  }

  return (
    <WotOverlay {...props}>
      <SearchClanForm submit={handleSearchClan} />

      <ClanPaginator page={clans_page} setClansPage={setClansPage} />

      {response && (
        <ClansList clans={response} check={handleSearchClanByTag} />
      )}

      <ClanPaginator page={clans_page} setClansPage={setClansPage} />
    </WotOverlay>
  );
}

export default IndexContainer;