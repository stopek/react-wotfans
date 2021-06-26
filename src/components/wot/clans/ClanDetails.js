import { PLAYER_URL } from "app/routes";
import ButtonInput from "components/ui/input/ButtonInput";
import PlayerNameWithConsoleLogo from "components/wot/player/PlayerNameWithConsoleLogo";
import PlayersList from "components/wot/player/PlayersList";
import StatsList from "components/wot/StatsList";
import Wn8Bar from "components/wot/wn8/Wn8Bar";
import { date_from_unix } from "helpers/date";
import fillRoute from "helpers/fillRoute";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { LargeHeader, Wn8BarContent } from "styles/GlobalStyled";

const ClanName = styled.div`
  font-size: 45px;
  line-height: 1.2;
  font-weight: 700;
  margin: 45px 0;
  color: white;

  small {
    display: block;
    font-size: 15px;
  }
`;

export default function ClanDetails({ clan = {}, statistics = {} }) {
  const history = useHistory();

  const ProfileButton = ({ account_id, ...props }) => (
    <ButtonInput
      color={`secondary`}
      onClick={() => history.push(fillRoute(PLAYER_URL, { account_id: account_id }))}
      label={`see.profile`}
      {...props}
    />
  );

  const is_creator = clan?.creator;
  const is_leader = clan?.leader;

  let statsList = [
    {
      translation: 'creator',
      value: is_creator ? <PlayerNameWithConsoleLogo name={clan.creator.name} /> : 'no.data',
      button: is_creator ? <ProfileButton account_id={clan.creator.id} /> : null
    },
    {
      translation: 'created.date',
      value: date_from_unix(clan?.clan_created_at)
    },
    {
      translation: 'leader',
      value: is_leader ? <PlayerNameWithConsoleLogo name={clan.leader.name} /> : 'no.data',
      button: is_leader ? <ProfileButton account_id={clan.leader.id} /> : null
    },
    {
      translation: 'amount',
      value: clan?.members_count
    }
  ];

  const players = Object.values(clan.players).map((player) => {
    return Object.assign({}, player, { wn8: statistics?.players[player.id] || -1 });
  });

  return (
    <>

      <LargeHeader>
        <ClanName>
          {clan?.tag}
          <small>{clan?.name}</small>
        </ClanName>

        <Wn8BarContent>
          <Wn8Bar value={statistics?.wn8 || 0} unit={`WN8`} large />
        </Wn8BarContent>
      </LargeHeader>

      <StatsList list={statsList} />

      <PlayersList
        players={players}
      />
    </>
  );
}
