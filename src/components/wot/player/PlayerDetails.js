import Empty from "components/core/Empty";
import PlayerNameWithConsoleLogo from "components/wot/player/PlayerNameWithConsoleLogo";
import StatsList from "components/wot/StatsList";
import TankModalStats from "components/wot/tanks/TankModalStats";
import TanksListAndFilters from "components/wot/tanks/TanksListAndFilters";
import TanksStatsList from "components/wot/tanks/TanksStatsList";
import Wn8Bar from "components/wot/wn8/Wn8Bar";
import {
  perBattleCalculator,
  perBattleDisplay,
  percentageCalculator,
  percentageDisplay,
  xpResult
} from "helpers/priceFormat";
import { sortByWeight, sortByWN8 } from "helpers/user";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { Header, LargeHeader, Wn8BarContent } from "styles/GlobalStyled";

const TanksListOverflow = styled.div`
  //max-height: 605px;
  //overflow: auto;
  padding: 0 10px;
`;

export default function PlayerDetails({ player = {}, statistics = {} }) {

  const [previewTank, setPreviewTank] = useState({});
  const [open, setOpen] = useState(false);
  const [preview_stats, setPreviewStats] = useState({});
  const [preview_statistics, setPreviewStatistics] = useState({});


  const ps = player.stats[0] || {};
  const player_battles = ps?.battles;

  const winsPercentage = percentageCalculator(ps?.wins, player_battles);
  const lossesPercentage = percentageCalculator(ps?.losses, player_battles);
  const survivedPercentage = percentageCalculator(ps?.survived_battles, player_battles);
  const accuracyPercentage = percentageCalculator(ps?.hits, ps?.shots);
  const noDamagePercentage = percentageCalculator(ps?.no_damage_direct_hits_received, ps?.direct_hits_received + ps?.no_damage_direct_hits_received);

  const treesBattle = perBattleCalculator(ps?.trees_cut, player_battles);
  const damageDealtBattle = perBattleCalculator(ps?.damage_dealt, player_battles);
  const shotsBattle = perBattleCalculator(ps?.shots, player_battles);
  const fragsBattle = perBattleCalculator(ps?.frags, player_battles);
  const pdBattle = perBattleCalculator(ps?.xp, player_battles);
  const spotBattle = perBattleCalculator(ps?.spotted, player_battles);
  const radioDamageBattle = perBattleCalculator(ps?.damage_assisted_radio, player_battles);
  const trackDamageBattle = perBattleCalculator(ps?.damage_assisted_track, player_battles);

  const drawPercentage = (100 - winsPercentage - lossesPercentage);

  const haveStats = Object.values(ps)?.length > 0;

  const tanks_wn8 = statistics?.tanks_wn8 || {};
  const tanksStats = player?.tanksStats || [];

  //boostowe czołgi
  const wn8_boost_tanks = sortByWeight(tanksStats).slice(0, 12);
  const preview = (tank) => {
    setPreviewTank(tank);
    setOpen(true);
    setPreviewStats(tanks_wn8[tank.id] || {});
    setPreviewStatistics(Object.values(tanksStats).find((tank_stat) => tank_stat.tank.id === tank.id) || {});
  }

  return (
    <>
      <TankModalStats
        tank={previewTank}
        stats={preview_stats}
        statistics={preview_statistics}
        setOpen={setOpen}
        open={open}
        card_props={{ more: true }}
      />

      <LargeHeader>
        <PlayerNameWithConsoleLogo name={player?.name} />
        <small>
          <FormattedMessage id={`global.rating`} />: {player?.global_rating}
        </small>

        <Wn8BarContent>
          <Wn8Bar
            value={statistics?.wn8}
            unit={`WN8`}
            large
          />
        </Wn8BarContent>
      </LargeHeader>

      {haveStats ? (
        <>
          <Header>
            <FormattedMessage id={`stats`} />
          </Header>
          <StatsList list={[
            { translation: 'battles', value: player_battles },
            { translation: 'accuracy.percentage', value: percentageDisplay(accuracyPercentage) },
            { translation: 'win.percentage', value: percentageDisplay(winsPercentage) },
            { translation: 'losses.percentage', value: percentageDisplay(lossesPercentage) },
            { translation: 'draw.percentage', value: percentageDisplay(drawPercentage) },
            { translation: 'survived.percentage', value: percentageDisplay(survivedPercentage) },
            { translation: 'no.damage.shots.percentage', value: percentageDisplay(noDamagePercentage) },

            { translation: 'avg.damage.dealt', value: perBattleDisplay(damageDealtBattle) },
            { translation: 'avg.damage.assisted.radio', value: perBattleDisplay(radioDamageBattle) },
            { translation: 'avg.damage.assisted.track', value: perBattleDisplay(trackDamageBattle) },

            { translation: 'avg.shots', value: perBattleDisplay(shotsBattle) },
            { translation: 'avg.frags', value: perBattleDisplay(fragsBattle) },
            { translation: 'avg.spotted', value: perBattleDisplay(spotBattle) },
            { translation: 'avg.trees', value: perBattleDisplay(treesBattle) },
            { translation: 'avg.xp', value: xpResult(pdBattle) },

            {
              translation: 'max.damage', value: ps?.max_damage,
              tank: {
                tank: ps?.max_damage_tank,
                props: {
                  onClick: () => preview(ps?.max_damage_tank)
                }
              }
            },
            {
              translation: 'max.frags',
              value: ps?.max_frags,
              tank: {
                tank: ps?.max_frags_tank,
                props: {
                  onClick: () => preview(ps?.max_frags_tank)
                }
              }
            },
            {
              translation: 'max.xp',
              value: ps?.max_xp,
              tank: {
                tank: ps?.max_xp_tank,
                props: {
                  onClick: () => preview(ps?.max_xp_tank)
                }
              }
            },
          ]} />

          <Header>
            <FormattedMessage id={`tanks.list`} />
          </Header>

          {/*<TanksListOverflow>*/}
          <TanksListAndFilters
            tanks_stats={sortByWN8(tanksStats)}
          />
          {/*</TanksListOverflow>*/}

          {wn8_boost_tanks?.length > 0 && (
            <>
              <Header>
                <FormattedMessage id={`wn8.tanks`} />
                <small>
                  <FormattedMessage id={`wn8.tanks.message`} />
                </small>
              </Header>

              <TanksStatsList
                tanks_stats={wn8_boost_tanks}
                weight
              />
            </>
          )}
        </>
      ) : (
        <Empty message={<FormattedMessage id={`no.stats.header`} />}>
          <FormattedMessage id={`no.stats.message`} />
        </Empty>
      )}
    </>
  );
}
