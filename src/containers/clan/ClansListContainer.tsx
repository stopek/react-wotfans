import { useAppDispatch, useAppSelector } from "app/hooks";
import Error from "components/core/Error";
import ClansList from "components/wot/clans/ClansList";
import SearchClanForm from "components/wot/clans/SearchClanForm";
import SimplePagination from "components/wot/SimplePagination";
import WotOverlay from "overlays/WotOverlay";
import React, { useEffect, useState } from 'react';
import { clansList, selectClansList } from "reducers/wotSlice";

export default function ClansListContainer({ ...props }) {
  const dispatch = useAppDispatch();
  const clans = useAppSelector(selectClansList);

  const [page, setPage] = useState(1);
  const [data, setData] = useState({});


  const isClansLoaded = !!clans?.response;
  const pages = clans?.response?.pagination?.pages || 0;

  const loadClans = (provided_page: number, provided_data?: object) => {
    provided_data = provided_data || data;

    dispatch<any>(clansList({ ...provided_data, page: provided_page }));
  }

  useEffect(() => {
    loadClans(page);
  }, [dispatch, page, clansList]);

  const handleSearchClan = (event: React.SyntheticEvent, data: object) => {
    event.preventDefault();

    setData(data);
    setPage(1);

    loadClans(1, data);
  }

  return (
    <WotOverlay {...props}>
      <>
        <SearchClanForm submit={handleSearchClan} />

        {!isClansLoaded && (
          <Error message={`loading.not.found`} surprise={`nothingness`} />
        )}

        {pages > 1 && (
          <SimplePagination
            page={page}
            setPage={setPage}
            pages={pages}
          />
        )}

        {isClansLoaded && (
          <ClansList clans={clans?.response?.data} />
        )}

        {pages > 1 && (
          <SimplePagination
            page={page}
            setPage={setPage}
            pages={pages}
          />
        )}
      </>
    </WotOverlay>
  );
}
