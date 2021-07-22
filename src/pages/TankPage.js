import { Grid } from "@material-ui/core";
import SimpleDateValueChar from "components/wot/char/SimpleDateValueChar";
import ExpectedTankChanges from "components/wot/expected/ExpectedTankChanges";
import MoeTanksChanges from "components/wot/moe/MoeTanksChanges";
import BestPlayersOnTank from "components/wot/player/BestPlayersOnTank";
import Tabs from "components/wot/Tabs";
import TankBase from "components/wot/tanks/TankBase";
import { valueFormat } from "helpers/priceFormat";
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

const getDataToChar = (data, y_maps) => {
  let output = [];


  y_maps.forEach((y_map) => {
    let temp_data = [];
    let exists = [];

    data.forEach((item) => {
      if (!exists.includes(item?.update_owner?.version)) {
        temp_data.push({ x: item?.update_owner?.version, y: valueFormat(item[y_map]) });
        exists.push(item?.update_owner?.version);
      }
    });

    output.push({ id: y_map, key: y_map, data: temp_data });
  });

  return output;
}

export default function TankPage({ tank = {}, wn8 = 0 }) {
  const expected_tabs = [
    {
      translation: 'exp.wn8',
      component: (
        <ExpectedTankChanges expected={tank?.expTanks} />
      )
    },
    {
      translation: 'char',
      component: (
        <SimpleDateValueChar data={getDataToChar(tank?.expTanks, ['damage'])} />
      )
    },
  ];

  const moe_tabs = [
    {
      translation: 'moe',
      component: (
        <MoeTanksChanges moe={tank?.moeTanks} />
      )
    },
    {
      translation: 'moe_1dmg',
      component: (
        <SimpleDateValueChar data={getDataToChar(tank?.moeTanks, ['moe_1dmg'])} />
      )
    },
    {
      translation: 'moe_2dmg',
      component: (
        <SimpleDateValueChar data={getDataToChar(tank?.moeTanks, ['moe_2dmg'])} />
      )
    },
    {
      translation: 'moe_3dmg',
      component: (
        <SimpleDateValueChar data={getDataToChar(tank?.moeTanks, ['moe_3dmg'])} />
      )
    },
  ];

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

          <Tabs tabs={expected_tabs} />
          <Tabs tabs={moe_tabs} />
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
