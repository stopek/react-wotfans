import CharsList from "components/wot/char/CharsList";
import { PieChar } from "components/wot/char/PieChar";
import PlayerNameWithConsoleLogo from "components/wot/player/PlayerNameWithConsoleLogo";
import StatsList from "components/wot/StatsList";
import TanksList from "components/wot/tanks/TanksList";
import TanksListAndFilters from "components/wot/tanks/TanksListAndFilters";
import Wn8Bar from "components/wot/wn8/Wn8Bar";
import { priceFormat } from "helpers/priceFormat";
import React from "react";
import styled from "styled-components";
import { Header, LargeHeader } from "styles/GlobalStyled";

const Wn8BarContent = styled.div`
  position: absolute;
  right: 0;
  font-size: 30px;
  top: 50%;
  transform: translateY(-50%);
`;

const pf = (value, unit) => {
  return priceFormat(value, ',', unit);
}

export default function PlayerDetails({ player = {}, statistics = {} }) {
  const player_statistics = player.stats[0];

  const winsPercentage = (100 * player_statistics?.wins) / player_statistics?.battles;
  const lossesPercentage = (100 * player_statistics?.losses) / player_statistics?.battles;
  const drawPercentage = (100 - winsPercentage - lossesPercentage);
  const survivedPercentage = (100 * player_statistics?.survived_battles) / player_statistics?.battles;

  const win_pie_data = [
    {
      "id": "wins",
      "label": "Wygrane",
      "value": parseFloat(winsPercentage.toFixed(2)),
    },
    {
      "id": "losses",
      "label": "Przegrane",
      "value": parseFloat(lossesPercentage.toFixed(2)),
    },
    {
      "id": "draws",
      "label": "Remisy",
      "value": parseFloat(drawPercentage.toFixed(2)),
    },
  ];

  const survived_pie_data = [
    {
      "id": "survived",
      "label": "Przetrwał",
      "value": parseFloat(survivedPercentage.toFixed(2)),
    },
    {
      "id": "dead",
      "label": "Zginął",
      "value": parseFloat((100 - survivedPercentage).toFixed(2)),
    },
  ];

  // const wn8_boost_tanks = Object.values(player?.tanks).sort(function (a, b) {
  //   return b.weight - a.weight;
  // }).slice(0, 12)


  return (
    <>
      <LargeHeader>
        <PlayerNameWithConsoleLogo name={player?.name} />
        <small>
          Globalny rating: {player?.global_rating}
        </small>

        <Wn8BarContent>
          <Wn8Bar value={statistics?.wn8 || 0} unit={`WN8`} />
        </Wn8BarContent>
      </LargeHeader>

      <Header>
        Podsumowanie gracza
      </Header>
      <StatsList list={[
        { title: 'Rozegranych bitew', value: player_statistics?.battles },
        { title: 'Zadane uszkodzenia', value: player_statistics?.damage_dealt },
        { title: 'Otrzymane uszkodzenia', value: player_statistics?.damage_received },
        { title: 'Zniszczonych czołgów', value: player_statistics?.frags },
        { title: 'Przebić', value: player_statistics?.hits },
        { title: 'Przegranych bitew', value: player_statistics?.losses },
        { title: 'Oddanych strzałów', value: player_statistics?.shots },
        { title: 'Wykrytych czołgów', value: player_statistics?.spotted },
        { title: 'Przetrwanych bitew', value: player_statistics?.survived_battles },
        { title: 'Wygranych bitew', value: player_statistics?.wins },
        { title: 'Zdobyte XP', value: player_statistics?.xp },
      ]} />

      <Header>
        Osiągnięcia
      </Header>
      <StatsList list={[
        { title: 'Damage przez wykrycie', value: player_statistics?.damage_assisted_radio },
        { title: 'Damage przez gąski', value: player_statistics?.damage_assisted_track },
        { title: 'Otrzymany damage', value: player_statistics?.direct_hits_received },
        { title: 'explosion_hits', value: player_statistics?.explosion_hits },
        { title: 'explosion_hits_received', value: player_statistics?.explosion_hits_received },
        { title: 'Maxymalny damage', value: player_statistics?.max_damage },
        { title: 'Maksymalna ilość fragów', value: player_statistics?.max_frags },
        { title: 'Maksymalne zdobyte PD', value: player_statistics?.max_xp },
        { title: 'Strzałów odbitych', value: player_statistics?.no_damage_direct_hits_received },
        { title: 'piercings', value: player_statistics?.piercings },
        { title: 'piercings_received', value: player_statistics?.piercings_received },
        { title: 'Przewróconych drzew', value: player_statistics?.trees_cut }
      ]} />

      <Header>
        Statystyki
      </Header>
      <StatsList list={[
        { title: '% wygranych', value: pf(winsPercentage, '%') },
        { title: '% przegranych', value: pf(lossesPercentage, '%') },
        { title: '% remisów', value: pf(drawPercentage, '%') },
        { title: 'XP/bitwa', value: pf(player_statistics?.xp / player_statistics?.battles, 'PD') },
        { title: 'Strzałów/bitwa', value: pf(player_statistics?.shots / player_statistics?.battles, '') },
        { title: 'Fragów/bitwa', value: pf(player_statistics?.frags / player_statistics?.battles, '') },
        { title: 'Ścięte drzewa/bitwa', value: pf(player_statistics?.trees_cut / player_statistics?.battles, '') },
        { title: '% przetrwanych bitew', value: pf(survivedPercentage, '') }
      ]} />

      <CharsList list={[
        <PieChar data={win_pie_data} />,
        <PieChar data={survived_pie_data} />
      ]} />

      {/*<Header>*/}
      {/*  Czołgi*/}
      {/*</Header>*/}

      {/*<TanksListAndFilters tanks={player?.tanks} />*/}

      {/*<Header>*/}
      {/*  Czołgi WN8*/}
      {/*  <small>12 czołgów najbardziej wpływających na końcowe WN8 gracza</small>*/}
      {/*</Header>*/}

      {/*<TanksList*/}
      {/*  tanks={wn8_boost_tanks}*/}
      {/*  weight*/}
      {/*/>*/}
    </>
  );
}