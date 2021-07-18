import { Grid } from "@material-ui/core";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { GAMES_FORM } from "app/routes";
import ButtonInput from "components/ui/input/ButtonInput";
import GamesList from "components/wot/games/GamesList";
import WotOverlay from "overlays/Wot";
import React from 'react';

export default function GamesContainer({ ...props }) {
  return (
    <WotOverlay {...props}>
      <Grid container spacing={2}>
        <Grid container item xs={12} justify={`flex-end`}>
          <ButtonInput
            label={`create.game`}
            icon={<AddRoundedIcon />}
            route={GAMES_FORM}
          />
        </Grid>
        <Grid item xs={12}>
          <GamesList />
        </Grid>
      </Grid>
    </WotOverlay>
  );
}

