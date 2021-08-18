import { Grid } from "@material-ui/core";
import { gamesTypes } from "app/settings";
import SelectInput from "components/ui/input/SelectInput";
import TextInput from "components/ui/input/TextInput";
import React from "react";
import { setGameParam } from "reducers/wotSlice";
import { useAppDispatch } from "src/app/hooks";
import styled from "styled-components";

const Content = styled.div``;

export default function GameForm({ game = {} }) {
  const dispatch = useAppDispatch();

  return (
    <Content>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <TextInput
            label={`game.name`}
            required
            handleChange={(value) => dispatch(setGameParam({ name: value }))}
            value={game?.name || ''}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <SelectInput
            translation={'game.type'}
            current={game?.type || ''}
            handleChange={(value) => dispatch(setGameParam({ type: value }))}
            options={gamesTypes}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextInput
            label={`game.short.description`}
            required
            handleChange={(value) => dispatch(setGameParam({ short_description: value }))}
            value={game?.short_description || ''}
            multiline
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextInput
            label={`game.description`}
            required
            handleChange={(value) => dispatch(setGameParam({ description: value }))}
            value={game?.description || ''}
            multiline
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextInput
            label={`game.awards.description`}
            required
            handleChange={(value) => dispatch(setGameParam({ awards_description: value }))}
            value={game?.awards_description || ''}
            multiline
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextInput
            label={`game.rule.description`}
            required
            handleChange={(value) => dispatch(setGameParam({ rule_description: value }))}
            value={game?.rule_description || ''}
            multiline
          />
        </Grid>
      </Grid>
    </Content>
  );
}
