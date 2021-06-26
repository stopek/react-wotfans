import Empty from "components/core/Empty";
import CharsList from "components/wot/char/CharsList";
import { PieChar } from "components/wot/char/PieChar";
import PlayerNameWithConsoleLogo from "components/wot/player/PlayerNameWithConsoleLogo";
import StatsList from "components/wot/StatsList";
import TankModalStats from "components/wot/tanks/TankModalStats";
import TanksListAndFilters from "components/wot/tanks/TanksListAndFilters";
import TanksStatsList from "components/wot/tanks/TanksStatsList";
import Wn8Bar from "components/wot/wn8/Wn8Bar";
import { priceFormat } from "helpers/priceFormat";
import { sortByWeight } from "helpers/user";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { Header, LargeHeader, Wn8BarContent } from "styles/GlobalStyled";

const TanksListOverflow = styled.div`
  max-height: 605px;
  overflow: auto;
  padding: 0 10px;
`;

const pf = (value, unit) => {
  return priceFormat(value, ',', unit);
}

export default function PlayerDetails({ player = {}, statistics = {} }) {
  const player_statistics = player.stats[0] || [];

  const winsPercentage = (100 * player_statistics?.wins) / player_statistics?.battles;
  const lossesPercentage = (100 * player_statistics?.losses) / player_statistics?.battles;
  const drawPercentage = (100 - winsPercentage - lossesPercentage);
  const survivedPercentage = (100 * player_statistics?.survived_battles) / player_statistics?.battles;

  const haveStats = Object.values(player_statistics)?.length > 0;
  const win_pie_data = [
    {
      "id": "wins",
      "label": <FormattedMessage id={`pie.wins`} />,
      "value": parseFloat(winsPercentage.toFixed(2)),
    },
    {
      "id": "losses",
      "label": <FormattedMessage id={`pie.losses`} />,
      "value": parseFloat(lossesPercentage.toFixed(2)),
    },
    {
      "id": "draws",
      "label": <FormattedMessage id={`pie.draws`} />,
      "value": parseFloat(drawPercentage.toFixed(2)),
    },
  ];
  const survived_pie_data = [
    {
      "id": "survived",
      "label": <FormattedMessage id={`pie.survived`} />,
      "value": parseFloat(survivedPercentage.toFixed(2)),
    },
    {
      "id": "died",
      "label": <FormattedMessage id={`pie.died`} />,
      "value": parseFloat((100 - survivedPercentage).toFixed(2)),
    },
  ];
  const tanks_wn8 = statistics?.tanks_wn8 || {};
  const tanksStats = player?.tanksStats || [];

  //łączymy tankStats z obliczeniami wn8
  const tanks_stats = Object.values(tanksStats).map((tankStats) => {
    return Object.assign({}, tankStats, tanks_wn8[tankStats.tank.id] || {});
  });

  //boostowe czołgi
  const wn8_boost_tanks = sortByWeight(tanks_stats).slice(0, 12);
  const [previewTank, setPreviewTank] = useState({});
  const [open, setOpen] = useState(false);
  const [preview_stats, setPreviewStats] = useState({});
  const [preview_statistics, setPreviewStatistics] = useState({});

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
            <FormattedMessage id={`player.summary`} />
          </Header>
          <StatsList list={[
            { translation: 'battles', value: player_statistics?.battles },
            { translation: 'damage.dealt', value: player_statistics?.damage_dealt },
            { translation: 'damage.received', value: player_statistics?.damage_received },
            { translation: 'frags', value: player_statistics?.frags },
            { translation: 'hits', value: player_statistics?.hits },
            { translation: 'losses', value: player_statistics?.losses },
            { translation: 'shots', value: player_statistics?.shots },
            { translation: 'spotted', value: player_statistics?.spotted },
            { translation: 'survived.battles', value: player_statistics?.survived_battles },
            { translation: 'wins', value: player_statistics?.wins },
            { translation: 'xp', value: player_statistics?.xp },
          ]} />

          <Header>
            <FormattedMessage id={`achievements`} />
          </Header>
          <StatsList list={[
            { translation: 'damage.assisted.radio', value: player_statistics?.damage_assisted_radio },
            { translation: 'damage.assisted.track', value: player_statistics?.damage_assisted_track },
            { translation: 'direct.hits.received', value: player_statistics?.direct_hits_received },
            { translation: 'explosion.hits', value: player_statistics?.explosion_hits },
            { translation: 'explosion.hits.received', value: player_statistics?.explosion_hits_received },
            {
              translation: 'max.damage', value: player_statistics?.max_damage,
              tank: {
                tank: player_statistics?.max_damage_tank,
                props: {
                  onClick: () => preview(player_statistics?.max_damage_tank)
                }
              }
            },
            {
              translation: 'max.frags',
              value: player_statistics?.max_frags,
              tank: {
                tank: player_statistics?.max_frags_tank,
                props: {
                  onClick: () => preview(player_statistics?.max_frags_tank)
                }
              }
            },
            {
              translation: 'max.xp',
              value: player_statistics?.max_xp,
              tank: {
                tank: player_statistics?.max_xp_tank,
                props: {
                  onClick: () => preview(player_statistics?.max_xp_tank)
                }
              }
            },
            { translation: 'no.damage.direct.hits.received', value: player_statistics?.no_damage_direct_hits_received },
            { translation: 'piercings', value: player_statistics?.piercings },
            { translation: 'piercings.received', value: player_statistics?.piercings_received },
            { translation: 'trees.cut', value: player_statistics?.trees_cut }
          ]} />

          <Header>
            <FormattedMessage id={`stats`} />
          </Header>
          <StatsList list={[
            { translation: 'win.percentage', value: pf(winsPercentage, '%') },
            { translation: 'losses.percentage', value: pf(lossesPercentage, '%') },
            { translation: 'draw.percentage', value: pf(drawPercentage, '%') },
            { translation: 'xp.battle.stats', value: pf(player_statistics?.xp / player_statistics?.battles, 'PD') },
            { translation: 'shots.battle.stats', value: pf(player_statistics?.shots / player_statistics?.battles, '') },
            { translation: 'frags.battle.stats', value: pf(player_statistics?.frags / player_statistics?.battles, '') },
            {
              translation: 'trees.battle.stats',
              value: pf(player_statistics?.trees_cut / player_statistics?.battles, '')
            },
            { translation: 'survived.percentage', value: pf(survivedPercentage, '') }
          ]} />

          <CharsList list={[
            <PieChar data={win_pie_data} />,
            <PieChar data={survived_pie_data} />
          ]} />

          <Header>
            <FormattedMessage id={`tanks.list`} />
          </Header>

          <TanksListOverflow>
            <TanksListAndFilters
              tanks_stats={tanks_stats}
            />
          </TanksListOverflow>

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
