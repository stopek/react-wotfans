import { Grid } from "@material-ui/core";
import TankTypeIcon from "components/wot/tanks/TankTypeIcon";
import Wn8Bar from "components/wot/wn8/Wn8Bar";
import React from "react";
import styled from "styled-components";
import { COLOR_SECOND } from "styles/colors";

const Card = styled.div`
  width: 100%;
  color: black;
`;

const TankName = styled.h2`
  font-size: 30px;
  margin: 0 0 15px 0;
  display: flex;
  gap: 15px;
  align-items: center;
`;

const Description = styled.p`
  font-size: 15px;
  color: gray;
`;

const Image = styled.div`
  width: 100%;
  min-height: 150px;
  background: #e7e7e7 url(${props => props?.image}) no-repeat center center;
  background-size: auto;
  display: flex;
`;

const StatsList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 15px 0;
`;

const StatsItem = styled.li`
  font-size: 15px;
  color: black;
  padding: 5px;
  display: flex;

  span {
    flex: 1;
  }

  span:last-child {
    text-align: right;
    font-weight: 700;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #e3e3e3;
  }

  &:hover {
    background: #f1f1f1
  }
`;

const BoxInfos = styled.div`
  display: inline-flex;
  padding: 15px;
  background: ${COLOR_SECOND};
  border-radius: 5px;
  color: white;
  line-height: 1;
  flex-direction: column;
  font-size: 15px;
  margin: 5px;
  span {
    display: block;
    font-size: 150%;
    font-weight: 700;
  }
`;

const Stat = ({ title, value }) => {
  return (
    <StatsItem>
      <span>{title}</span>
      <span>{value}</span>
    </StatsItem>
  );
}

export default function TankCard({ tank = {} }) {
  const stats = tank?.statistics;
  const all = stats?.all;

  const infos_data = [
    {title: 'Nacja czołgu', value: tank.nation},
    {title: 'Tier', value: tank.tier},
    {title: 'Koszt w srebrze', value: tank.price_credit || 0},
    {title: 'Koszt w złocie', value: tank.price_gold || 0},
    {title: 'Koszt w doświadczeniu', value: tank.prices_xp || 0}
  ];

  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <TankName>
            <TankTypeIcon type={tank?.type} dark />
            {tank?.name}
          </TankName>
          <Image image={tank?.images?.big_icon} />
          <Description>
            {tank?.description}
          </Description>

          {infos_data.map((item, key) => (
            <BoxInfos key={`box-info-${key}`}>
              {item.title}
              <span>{item.value}</span>
            </BoxInfos>
          ))}
        </Grid>

        <Grid item md={6}>
          <StatsList>
            <Stat title={`WN8 na czołgu`} value={tank?.wn8} />
            <Stat title={`Maksymalna ilość fragów`} value={stats?.max_frags || 0} />
            <Stat title={`Wpływ na ogólne WN8`} value={`${tank?.weight}%`} />

            <Stat title={`Rozegranych bitew`} value={all.battles || 0} />
            <Stat title={`Punkty zajęcia bazy`} value={all?.capture_points || 0} />
            <Stat title={`Uszkodzenia przez wykrycia`} value={all?.damage_assisted_radio || 0} />
            <Stat title={`Uszkodzenia przez gąski`} value={all?.damage_assisted_track || 0} />
            <Stat title={`Uszkodzenia zadane`} value={all?.damage_dealt || 0} />
            <Stat title={`Uszkodzenia otrzymane`} value={all?.damage_received || 0} />
            <Stat title={`Przebicia otrzymane`} value={all?.direct_hits_received || 0} />
            <Stat title={`dropped_capture_points`} value={all?.dropped_capture_points || 0} />
            <Stat title={`explosion_hits`} value={all?.explosion_hits || 0} />
            <Stat title={`explosion_hits_received`} value={all?.explosion_hits_received || 0} />
            <Stat title={`Fragów`} value={all?.frags || 0} />
            <Stat title={`Przebić`} value={all?.hits || 0} />
            <Stat title={`Przegranych bitew`} value={all?.losses || 0} />
            <Stat title={`Strzały odbite`} value={all?.no_damage_direct_hits_received || 0} />
            <Stat title={`piercings`} value={all?.piercings || 0} />
            <Stat title={`piercings_received`} value={all?.piercings_received || 0} />
            <Stat title={`Oddanych strzałów`} value={all?.shots || 0} />
            <Stat title={`Punktów wyspotowania`} value={all?.spotted || 0} />
            <Stat title={`Przetrwanych bitew`} value={all?.survived_battles || 0} />
            <Stat title={`Wygranych bitew`} value={all?.wins || 0} />
            <Stat title={`Zdobyte PD`} value={all?.xp || 0} />
          </StatsList>
        </Grid>
      </Grid>
    </Card>
  );
}