import Empty from "components/core/Empty";
import ClanProfileButton from "components/wot/clans/ClanProfileButton";
import EfficiencyBar from "components/wot/efficiency/EfficiencyBar";
import UnderlineHeader from "components/wot/headers/UnderlineHeader";
import PlayerNameWithConsoleLogo from "components/wot/player/PlayerNameWithConsoleLogo";
import StatsList from "components/wot/StatsList";
import TankModalStats from "components/wot/tanks/TankModalStats";
import TanksListAndFilters from "components/wot/tanks/TanksListAndFilters";
import TanksStatsList from "components/wot/tanks/TanksStatsList";
import WN7Bar from "components/wot/wn7/WN7Bar";
import Wn8Bar from "components/wot/wn8/Wn8Bar";
import {
  perBattleCalculator,
  perBattleDisplay,
  percentageCalculator,
  percentageDisplay,
  xpResult
} from "helpers/priceFormat";
import { sortByWeight, sortByWN8 } from "helpers/user";
import { PlayerInterface } from "interfaces/PlayerInterface";
import { TankInterface } from "interfaces/TankInterface";
import { TankStatInterface } from "interfaces/TankStatInterface";
import { UserStatistics } from "interfaces/UserStatistics";
import React, { useState } from "react";
import styled from "styled-components";
import { LargeHeader, Wn8BarContent } from "styles/GlobalStyled";

const ClanBox = styled.div`
  font-size: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  margin-top: -10px;
`;

type PlayerDetailsType = {
  player: PlayerInterface,
  statistics: UserStatistics
}

const PlayerDetails: React.FC<PlayerDetailsType> = ({ player, statistics }) => {
  const [previewTank, setPreviewTank] = useState<TankInterface>();
  const [preview_stats, setPreviewStats] = useState(undefined);
  const [preview_statistics, setPreviewStatistics] = useState(undefined);
  const [open, setOpen] = useState(false);


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

  const totalOtherResults = parseFloat(winsPercentage + lossesPercentage);
  const drawPercentage = totalOtherResults > 0 ? (100 - totalOtherResults) : 0;

  const haveStats = Object.values(ps)?.length > 0;

  const tanksStats = Object.values(player?.tanksStats || []);

  //boostowe czołgi
  const wn8_boost_tanks = sortByWeight<TankStatInterface[]>(tanksStats).slice(0, 12);
  // const previewHighlightedTank = (tank) => {
  //   setPreviewTank(tank);
  //   setPreviewStatistics(Object.values(tanksStats).find((tank_stat) => tank_stat.tank.id === tank.id) || {});
  //   setOpen(true);
  // }


  return (
    <>
      {!!previewTank && (
        <TankModalStats
          tank={previewTank}
          stats={preview_stats}
          statistics={preview_statistics}
          setOpen={setOpen}
          open={open}
        />
      )}

      <LargeHeader>
        <PlayerNameWithConsoleLogo name={player?.name} />

        {!!player?.clan?.tag && (
          <ClanBox>
            {player?.clan?.tag}
            <ClanProfileButton tag={player?.clan?.tag} />
          </ClanBox>
        )}

        <Wn8BarContent>
          <Wn8Bar
            value={statistics?.wn8}
            unit={`WN8`}
            large
          />
          <WN7Bar
            value={statistics?.wn7}
            unit={`WN7`}
            large
          />
          <EfficiencyBar
            value={statistics?.efficiency}
            unit={`EFFI`}
            large
          />
        </Wn8BarContent>
      </LargeHeader>

      {haveStats ? (
        <>
          <UnderlineHeader translation={`stats`} />
          <StatsList list={[
            { translation: 'global.rating', value: player?.global_rating },
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
              translation: 'max.damage',
              value: ps?.max_damage,
              tank: ps?.max_damage_tank
              // tank: {
              //   tank: ps?.max_damage_tank,
              //   props: {
              //     onClick: () => previewHighlightedTank(ps?.max_damage_tank)
              //   }
              // }
            },
            {
              translation: 'max.frags',
              value: ps?.max_frags,
              tank: ps?.max_frags_tank
              // tank: {
              //   tank: ps?.max_frags_tank,
              //   props: {
              //     onClick: () => previewHighlightedTank(ps?.max_frags_tank)
              //   }
              // }
            },
            {
              translation: 'max.xp',
              value: ps?.max_xp,
              tank: ps?.max_xp_tank
              // tank: {
              //   tank: ps?.max_xp_tank,
              //   props: {
              //     onClick: () => previewHighlightedTank(ps?.max_xp_tank)
              //   }
              // }
            },
          ]} />

          {wn8_boost_tanks?.length > 0 && (
            <>
              <UnderlineHeader
                translation={`wn8.tanks`}
                small={`wn8.tanks.message`}
              />

              <TanksStatsList
                tanks_stats={wn8_boost_tanks}
                weight
              />
            </>
          )}

          {Object.values(tanksStats)?.length > 0 && (
            <>
              <UnderlineHeader translation={`tanks.list`} />
              <TanksListAndFilters
                tanks_stats={sortByWN8(tanksStats)}
                custom={{ wn8: true, battles: true, name: true, tier: true, nation: true, type: true, premium: true }}
              />
            </>
          )}
        </>
      ) : (
        <Empty
          translation={`no.stats.header`}
          message={`no.stats.message`}
        />
      )}
    </>
  );
}

export default PlayerDetails;
