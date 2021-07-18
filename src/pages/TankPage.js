import { Grid } from "@material-ui/core";
import ExpectedTankChanges from "components/wot/expected/ExpectedTankChanges";
import MoeTanksChanges from "components/wot/moe/MoeTanksChanges";
import BestPlayersOnTank from "components/wot/player/BestPlayersOnTank";
import TankBase from "components/wot/tanks/TankBase";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { COLOR_TEXT, RADIUS } from "styles/colors";
import { Header } from "styles/GlobalStyled";

const WhiteSection = styled.div`
  background: white;
  padding: 15px;
  border-radius: ${RADIUS};
`;

const Content = styled.div`
  color: ${COLOR_TEXT};
  margin: 15px 0;
`;

export default function TankPage({ tank = {}, wn8 = 0 }) {
  return (
    <Content>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <WhiteSection>
            <TankBase tank={tank} />
          </WhiteSection>
        </Grid>
        <Grid item md={6} xs={12}>
          {/*<Header up down>*/}
          {/*  <FormattedMessage id={`avg.wn8`} />*/}
          {/*</Header>*/}
          {/*<Wn8Bar value={wn8} large />*/}

          <Header up down>
            <FormattedMessage id={`exp.wn8`} />
          </Header>
          <ExpectedTankChanges expected={tank?.expTanks} />

          <Header down>
            <FormattedMessage id={`moe`} />
          </Header>
          <MoeTanksChanges moe={tank?.moeTanks} />
        </Grid>

        <Grid item md={4} xs={12}>
          <Header down>
            <FormattedMessage id={`best.damage.players`} />
            <small>
              <FormattedMessage id={`out.of.all.garage.tanks`} />
            </small>
          </Header>
          <BestPlayersOnTank
            max_height={500}
            column_key={`max_damage`}
            stats={tank?.max_damage_stats}
          />
        </Grid>

        <Grid item md={4} xs={12}>
          <Header down>
            <FormattedMessage id={`best.frags.players`} />
            <small>
              <FormattedMessage id={`out.of.all.garage.tanks`} />
            </small>
          </Header>

          <BestPlayersOnTank
            max_height={500}
            column_key={`max_frags`}
            stats={tank?.max_frags_stats}
          />
        </Grid>

        <Grid item md={4} xs={12}>
          <Header down>
            <FormattedMessage id={`best.xp.players`} />
            <small>
              <FormattedMessage id={`out.of.all.garage.tanks`} />
            </small>
          </Header>

          <BestPlayersOnTank
            max_height={500}
            column_key={`max_xp`}
            stats={tank?.max_xp_stats}
          />
        </Grid>
      </Grid>
    </Content>
  );
}
