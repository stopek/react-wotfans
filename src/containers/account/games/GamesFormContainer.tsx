import { Grid } from "@material-ui/core";
import GameForm from "components/wot/games/GameForm";
import AccountOverlay from "overlays/Account";
import React from 'react';
import { useSelector } from "react-redux";
import { selectGameItem } from "reducers/wotSlice";

export default function GamesFormContainer({ ...props }) {
  const game = useSelector(selectGameItem);

  return (
    <AccountOverlay {...props}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <GameForm game={game} />
        </Grid>
      </Grid>
    </AccountOverlay>
  );
}

