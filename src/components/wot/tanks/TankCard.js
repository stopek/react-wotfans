import { Grid } from "@material-ui/core";
import TankTypeIcon from "components/wot/tanks/TankTypeIcon";
import { priceFormat } from "helpers/priceFormat";
import React from "react";
import { FormattedMessage } from "react-intl";
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
  min-height: 250px;
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

const BoxesInfo = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
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
  width: 100%;

  span {
    display: block;
    font-size: 150%;
    font-weight: 700;
  }
`;

const Stat = ({ translation, value }) => {
  return (
    <StatsItem>
      <span>
        <FormattedMessage id={translation} />
      </span>
      <span>{value}</span>
    </StatsItem>
  );
}

export default function TankCard({ tank = {}, stats = {}, statistics = {} }) {
  const infos_data = [
    { translation: 'nation', value: tank.nation },
    { translation: 'Tier', value: tank.tier },
    { translation: 'price.silver', value: priceFormat(tank.price_credit, ',', '') },
    { translation: 'price.gold', value: priceFormat(tank.price_gold, ',', '') },
    { translation: 'price.xp', value: priceFormat(tank.prices_xp, ',', '') }
  ];

  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <TankName>
            <TankTypeIcon type={tank?.type} dark />
            {tank?.name}
          </TankName>
          <Image image={tank?.image} />
          <Description>
            {tank?.description}
          </Description>

          <BoxesInfo>
            {infos_data.map((item, key) => (
              <BoxInfos key={`box-info-${key}`}>
                <FormattedMessage id={item.translation} />
                <span>{item.value}</span>
              </BoxInfos>
            ))}
          </BoxesInfo>
        </Grid>

        <Grid item md={6}>
          <StatsList>
            <Stat translation={`wn8`} value={priceFormat(stats?.wn8, ',', 'WN8')} />
            <Stat translation={`max.frags`} value={stats?.max_frags || 0} />
            <Stat translation={`wn8.weight`} value={priceFormat(stats?.weight, ',', '%')} />

            <Stat translation={`battles`} value={statistics.battles || 0} />
            <Stat translation={`capture.points`} value={statistics?.capture_points || 0} />
            <Stat translation={`damage.assisted.radio`} value={statistics?.damage_assisted_radio || 0} />
            <Stat translation={`damage.assisted.track`} value={statistics?.damage_assisted_track || 0} />
            <Stat translation={`damage.dealt`} value={statistics?.damage_dealt || 0} />
            <Stat translation={`damage.received`} value={statistics?.damage_received || 0} />
            <Stat translation={`hits.received`} value={statistics?.direct_hits_received || 0} />
            <Stat translation={`capture.points.dropped`} value={statistics?.dropped_capture_points || 0} />
            <Stat translation={`explosion.hits`} value={statistics?.explosion_hits || 0} />
            <Stat translation={`explosion.hits.received`} value={statistics?.explosion_hits_received || 0} />
            <Stat translation={`frags`} value={statistics?.frags || 0} />
            <Stat translation={`hits`} value={statistics?.hits || 0} />
            <Stat translation={`losses`} value={statistics?.losses || 0} />
            <Stat translation={`no.damage.direct.hits.received`} value={statistics?.no_damage_direct_hits_received || 0} />
            <Stat translation={`piercings`} value={statistics?.piercings || 0} />
            <Stat translation={`piercings.received`} value={statistics?.piercings_received || 0} />
            <Stat translation={`shots`} value={statistics?.shots || 0} />
            <Stat translation={`spotted`} value={statistics?.spotted || 0} />
            <Stat translation={`survived.battles`} value={statistics?.survived_battles || 0} />
            <Stat translation={`wins`} value={statistics?.wins || 0} />
            <Stat translation={`xp`} value={statistics?.xp || 0} />
          </StatsList>
        </Grid>
      </Grid>
    </Card>
  );
}