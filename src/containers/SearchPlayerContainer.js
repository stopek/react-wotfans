import { Grid } from "@material-ui/core";
import PlayerDetails from "components/wot/player/PlayerDetails";
import SearchPlayerForm from "components/wot/player/SearchPlayerForm";
import WotOverlay from "overlays/Wot";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { clearSearchPlayer, searchPlayer, searchPlayerById, selectSearchPlayer } from "reducers/wotSlice";

export default function SearchPlayerContainer({ match, ...props }) {
  const dispatch = useDispatch();
  const player_data = useSelector(selectSearchPlayer);

  useEffect(() => {
    dispatch(clearSearchPlayer());
  }, [dispatch]);

  const handleSearchPlayer = (event, data) => {
    event.preventDefault();

    if (data?.account_id) {
      dispatch(searchPlayerById(data));
      return;
    }

    dispatch(searchPlayer(data));
  }

  return (
    <WotOverlay {...props}>
      <Grid container>
        <Grid item xs={12}>
          <SearchPlayerForm submit={handleSearchPlayer} />

          {player_data?.response && (
            <PlayerDetails
              player={player_data?.response?.player}
              statistics={player_data?.response?.statistics}
            />
          )}
        </Grid>
      </Grid>
    </WotOverlay>
  );
}