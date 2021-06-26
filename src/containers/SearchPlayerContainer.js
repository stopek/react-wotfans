import { Grid } from "@material-ui/core";
import PlayersList from "components/wot/player/PlayersList";
import SearchPlayerForm from "components/wot/player/SearchPlayerForm";
import SimplePagination from "components/wot/SimplePagination";
import WotOverlay from "overlays/Wot";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { clearSearchPlayer, clearSearchPlayers, searchPlayer, selectSearchPlayers } from "reducers/wotSlice";

export default function SearchPlayerContainer({ match, ...props }) {
  const dispatch = useDispatch();
  const players = useSelector(selectSearchPlayers);
  const [page, setPage] = useState(1);
  const [post_data, setPostData] = useState({});
  const more_pages = players?.response?.pagination?.pages > 1;

  useEffect(() => dispatch(clearSearchPlayers()), [dispatch]);

  const search = (params) => {
    if (!params?.player_name?.length) {
      return;
    }

    dispatch(searchPlayer(params));
  }

  useEffect(() => {
    dispatch(clearSearchPlayer());
  }, [dispatch]);

  const handleSearchPlayer = (event, data) => {
    event.preventDefault();
    setPage(1);
    setPostData(data);

    search(data);
  }

  useEffect(() => {
    search({ ...post_data, page: page });
  }, [dispatch, page]);

  let players_list = []
  if (players?.response) {
    const statistics = players?.response?.statistics;

    players_list = Object.values(players?.response?.data || []).map((player) => {
      return Object.assign({}, player, { wn8: statistics[player.id] || -1 });
    });
  }

  return (
    <WotOverlay {...props}>
      <Grid container>
        <Grid item xs={12}>
          <SearchPlayerForm
            submit={handleSearchPlayer}
          />

          {more_pages && (
            <SimplePagination
              page={page}
              setPage={setPage}
              pages={players?.response?.pagination?.pages}
            />
          )}

          {players?.response && (
            <PlayersList
              players={players_list}
            />
          )}

          {more_pages && (
            <SimplePagination
              page={page}
              setPage={setPage}
              pages={players?.response?.pagination?.pages}
            />
          )}
        </Grid>
      </Grid>
    </WotOverlay>
  );
}
