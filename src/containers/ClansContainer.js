import { Grid } from "@material-ui/core";
import { CLAN_URL } from "app/routes";
import Paginator from "components/ui/Paginator";
import ClansList from "components/wot/clans/ClansList";
import SearchClanForm from "components/wot/clans/SearchClanForm";
import fillRoute from "helpers/fillRoute";
import WotOverlay from "overlays/Wot";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { clansList, selectClansList } from "reducers/wotSlice";

export default function IndexContainer({ ...props }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const clans = useSelector(selectClansList);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(clansList({ page: page }));
  }, [dispatch, page]);

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

      <Grid container spacing={2}>
        <Grid item xs={12} container alignItems={`center`} justify={`flex-end`}>
          <Paginator
            page={page}
            count={clans?.response?.pagination?.pages}
            onChange={(page) => setPage(page)}
          />
        </Grid>
      </Grid>

      {clans?.response?.data && (
        <ClansList clans={clans?.response?.data} check={handleSearchClanByTag} />
      )}
    </WotOverlay>
  );
}