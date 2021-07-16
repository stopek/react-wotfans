import { efficiencyRanges, wn7Ranges, wn8Ranges } from "app/settings";
import PercentageBar from "components/wot/PercentageBar";
import PlayerNameWithConsoleLogo from "components/wot/player/PlayerNameWithConsoleLogo";
import PlayerProfileButton from "components/wot/player/PlayerProfileButton";
import PlayersList from "components/wot/player/PlayersList";
import RangesPlayersChart from "components/wot/player/RangesPlayersChart";
import StatsList from "components/wot/StatsList";
import Tabs from "components/wot/Tabs";
import WN7Bar from "components/wot/wn7/WN7Bar";
import Wn8Bar from "components/wot/wn8/Wn8Bar";
import { date_from_unix } from "helpers/date";
import React from "react";
import { LargeHeader, Wn8BarContent } from "styles/GlobalStyled";

export default function ClanDetails({ clan = {}, statistics = {} }) {
  const is_creator = clan?.creator;
  const is_leader = clan?.leader;
  let players = Object.values(clan.players);

  const activePlayers = players.filter((player) => !player?.is_inactive)?.length;

  let statsList = [
    {
      translation: 'creator',
      value: is_creator ? <PlayerNameWithConsoleLogo name={is_creator.name} /> : 'no.data',
      button: is_creator ? <PlayerProfileButton account_id={is_creator.id} name={is_creator.name} /> : null
    },
    {
      translation: 'created.date',
      value: date_from_unix(clan?.clan_created_at)
    },
    {
      translation: 'leader',
      value: is_leader ? <PlayerNameWithConsoleLogo name={is_leader.name} /> : 'no.data',
      button: is_leader ? <PlayerProfileButton account_id={is_leader.id} name={is_leader.name} /> : null
    },
    {
      translation: 'amount',
      value: clan?.members_count,
      button: <PercentageBar
        amount={activePlayers}
        total={clan?.members_count}
        translation={`active.players.percentage`}
      />
    }
  ];

  players = players.map((player) => {
    return Object.assign({}, player, {
      wn8: statistics?.players?.wn8[player.id] || -1,
      wn7: statistics?.players?.wn7[player.id] || -1,
      efficiency: statistics?.players?.efficiency[player.id] || -1
    });
  });


  const statisticsTabs = [
    {
      translation: 'wn8',
      component: (
        <RangesPlayersChart
          players={players}
          ranges={wn8Ranges}
          data_key={`wn8`}
        />
      )
    },
    {
      translation: 'wn7',
      component: (
        <RangesPlayersChart
          players={players}
          ranges={wn7Ranges}
          data_key={`wn7`}
        />
      )
    },
    {
      translation: 'efficiency',
      component: (
        <RangesPlayersChart
          players={players}
          ranges={efficiencyRanges}
          data_key={`efficiency`}
        />
      )
    },
  ];

  return (
    <>
      <LargeHeader>
        <div>
          {clan?.tag}
          <small>{clan?.name}</small>
        </div>

        <Wn8BarContent>
          <Wn8Bar value={statistics?.wn8 || 0} unit={`WN8`} large />
          <WN7Bar value={statistics?.wn7 || 0} unit={`WN7`} large />
          <WN7Bar value={statistics?.efficiency || 0} unit={`EFFI`} large />
        </Wn8BarContent>
      </LargeHeader>

      <StatsList list={statsList} />

      <Tabs tabs={statisticsTabs} />

      <PlayersList players={players} />
    </>
  );
}
