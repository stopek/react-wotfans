import { CLAN_URL } from "app/routes";
import Empty from "components/core/Empty";
import ClansList from "components/wot/clans/ClansList";
import SearchClanForm from "components/wot/clans/SearchClanForm";
import SimplePagination from "components/wot/SimplePagination";
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
  const response_length = clans?.response?.length > 0;
  const clans_length = clans?.response?.data?.length > 0;
  const [data, setData] = useState({});

  useEffect(() => {
    dispatch(clansList({ page: page, ...data }));
  }, [dispatch, page]);

  const goToClanPage = (tag) => {
    return history.push(fillRoute(CLAN_URL, { tag: tag }));
  }

  const handleSearchClan = (event, data) => {
    event.preventDefault();
    setData(data);

    dispatch(clansList({ page: 1, ...data }));
  }

  return (
    <WotOverlay {...props}>
      <SearchClanForm submit={handleSearchClan} />

      <SimplePagination
        page={page}
        setPage={setPage}
        pages={clans?.response?.pagination?.pages}
      />

      {clans_length && (
        <ClansList
          clans={clans?.response?.data}
          check={goToClanPage}
        />
      )}

      {response_length && !clans_length && (
        <Empty message={`Lista klanow jest pusta`} />
      )}

      <SimplePagination
        page={page}
        setPage={setPage}
        pages={clans?.response?.pagination?.pages}
      />
    </WotOverlay>
  );
}
