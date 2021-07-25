import { Grid } from "@material-ui/core";
import EfficiencyBar from "components/wot/efficiency/EfficiencyBar";
import TankBase from "components/wot/tanks/TankBase";
import WN7Bar from "components/wot/wn7/WN7Bar";
import Wn8Bar from "components/wot/wn8/Wn8Bar";
import { perBattleCalculator, perBattleDisplay, priceFormat } from "helpers/priceFormat";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";

const Card = styled.div`
  width: 100%;
  color: black;
`;

const StatsList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 15px 0;
  white-space: nowrap;
`;

const Gap = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

const StatsItem = styled.li`
  font-size: 15px;
  color: black;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;

  @media ${breakpoint.md} {
    flex-wrap: nowrap;
  }

  span {
    flex: 2;
    @media ${breakpoint.md} {
      text-align: right;
    }
  }

  > strong {
    display: flex;
    width: 100%;
    @media ${breakpoint.md} {
      flex: 8;
      display: inline-flex;
    }
  }

  &:not(:last-child) {
    border-bottom: 1px solid #e3e3e3;
  }

  &:hover {
    background: #f1f1f1
  }
`;

const Stat = ({ translation, value, value2 }) => {
  return (
    <StatsItem>
      <strong>
        <FormattedMessage id={translation} />
      </strong>
      <span>{value}</span>
      {!!value2 && <span>{value2}</span>}
    </StatsItem>
  );
}

export default function TankCard({ tank = {}, stats = {}, statistics = {}, ...props }) {
  const statsList = [
    { translation: 'capture.points', value: statistics?.capture_points },
    { translation: 'damage.assisted.radio', value: statistics?.damage_assisted_radio },
    { translation: 'damage.assisted.track', value: statistics?.damage_assisted_track },
    { translation: 'damage.dealt', value: statistics?.damage_dealt },
    // { translation: 'damage.received', value: statistics?.damage_received },
    // { translation: 'hits.received', value: statistics?.direct_hits_received },
    { translation: 'capture.points.dropped', value: statistics?.dropped_capture_points },
    // {translation: 'explosion.hits', value: statistics?.explosion_hits},
    // {translation: 'explosion.hits.received', value: statistics?.explosion_hits_received},
    { translation: 'frags', value: statistics?.frags },
    { translation: 'hits', value: statistics?.hits },
    { translation: 'losses', value: statistics?.losses },
    // { translation: 'no.damage.direct.hits.received', value: statistics?.no_damage_direct_hits_received },
    // {translation: 'piercings', value: statistics?.piercings},
    // {translation: 'piercings.received', value: statistics?.piercings_received},
    { translation: 'shots', value: statistics?.shots },
    { translation: 'spotted', value: statistics?.spotted },
    { translation: 'survived.battles', value: statistics?.survived_battles },
    { translation: 'wins', value: statistics?.wins },
    // {translation: 'xp', value: statistics?.xp},
  ];

  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item lg={6} md={4} xs={12}>
          <TankBase
            tank={tank}
            {...props}
          />
        </Grid>

        <Grid item lg={6} md={8} xs={12}>
          {tank?.tier > 0 && (
            <Gap>
              <Wn8Bar value={stats?.wn8} unit={`WN8`} />
              <WN7Bar value={stats?.wn7} unit={`WN7`} />
              <EfficiencyBar value={stats?.efficiency} unit={`EFFI`} />
            </Gap>
          )}

          <StatsList>
            {tank?.tier > 0 && (
              <Stat
                translation={`wn8.weight`}
                value={priceFormat(stats?.weight, ',', '%', 5)}
              />
            )}

            <Stat
              translation={`max.frags`}
              value={statistics?.max_frags || 0}
            />

            <Stat
              translation={`battles`}
              value={statistics?.battles || 0}
              value2={<strong><FormattedMessage id={`per.battle`} /></strong>}
            />

            {statsList.map((stat, key) => (
              <Stat
                key={`stat-${key}`}
                translation={stat.translation}
                value={stat.value || 0}
                value2={perBattleDisplay(perBattleCalculator(stat.value, statistics?.battles))}
              />
            ))}
          </StatsList>
        </Grid>
      </Grid>
    </Card>
  );
}
