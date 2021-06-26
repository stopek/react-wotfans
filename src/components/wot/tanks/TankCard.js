import { Grid } from "@material-ui/core";
import TankBase from "components/wot/tanks/TankBase";
import Wn8Bar from "components/wot/wn8/Wn8Bar";
import { priceFormat } from "helpers/priceFormat";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  color: black;
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

export default function TankCard({ tank = {}, stats = {}, statistics = {}, ...props }) {
  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <TankBase
            tank={tank}
            {...props}
          />
        </Grid>

        <Grid item md={6}>
          <StatsList>
            <Stat translation={`wn8`} value={<Wn8Bar value={stats?.wn8} />} />
            <Stat translation={`wn8.weight`} value={priceFormat(stats?.weight, ',', '%')} />

            <Stat translation={`max.frags`} value={statistics?.max_frags || 0} />
            <Stat translation={`battles`} value={statistics?.battles || 0} />
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
            <Stat translation={`no.damage.direct.hits.received`}
                  value={statistics?.no_damage_direct_hits_received || 0} />
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
