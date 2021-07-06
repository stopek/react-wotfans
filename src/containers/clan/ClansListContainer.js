import ClansList from "components/wot/clans/ClansList";
import SearchClanForm from "components/wot/clans/SearchClanForm";
import SimplePagination from "components/wot/SimplePagination";
import WotOverlay from "overlays/Wot";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { clansList, selectClansList } from "reducers/wotSlice";

export default function IndexContainer({ ...props }) {
  const dispatch = useDispatch();
  const clans = useSelector(selectClansList);
  const [page, setPage] = useState(1);
  const clans_length = clans?.response?.data?.length > 0;
  const [data, setData] = useState({});
  const pages = clans?.response?.pagination?.pages;

  const loadClans = (provided_page, provided_data) => {
    provided_data = provided_data || data;

    dispatch(clansList({ ...provided_data, page: provided_page }));
  }

  useEffect(() => {
    loadClans(page);
  }, [dispatch, page]);

  const handleSearchClan = (event, data) => {
    event.preventDefault();

    setData(data);
    setPage(1);

    loadClans(1, data);
  }

  return (
    <WotOverlay {...props}>
      <SearchClanForm submit={handleSearchClan} />

      {pages > 1 && (
        <SimplePagination
          page={page}
          setPage={setPage}
          pages={pages}
        />
      )}

      {clans_length && (
        <ClansList clans={clans?.response?.data} />
      )}

      {pages > 1 && (
        <SimplePagination
          page={page}
          setPage={setPage}
          pages={pages}
        />
      )}
    </WotOverlay>
  );
}
