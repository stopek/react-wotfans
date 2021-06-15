import { PLAYER_URL } from "app/routes";
import ButtonInput from "components/ui/input/ButtonInput";
import PlayersList from "components/wot/player/PlayersList";
import StatsList from "components/wot/StatsList";
import Wn8Bar from "components/wot/wn8/Wn8Bar";
import { date_from_unix } from "helpers/date";
import fillRoute from "helpers/fillRoute";
import { priceFormat } from "helpers/priceFormat";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

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

const Info = styled.div`
  font-size: 12px;
  color: white;
`;

export default function ClanDetails({ clan = {}, statistics = {} }) {
  const history = useHistory();

  // const response = players?.response;
  // const players_data = response?.players;
  // const players_clan = response?.clan_data;
  //
  // const clan_data = clan?.data;

  const ProfileButton = ({ account_id }) => (
    <ButtonInput
      color={`secondary`}
      onClick={() => history.push(fillRoute(PLAYER_URL, { account_id: account_id }))}
      label={<FormattedMessage id={`see.profile`} />}
    />
  );

  let statsList = [
    // {
    //   title: 'Założyciel',
    //   value: clan_details?.creator_name,
    //   button: <ProfileButton account_id={clan_details?.creator_id} />
    // },
    {
      translation: 'created.date',
      value: date_from_unix(clan?.clan_created_at)
    },
    // {
    //   title: 'Dowódca',
    //   value: clan_details?.leader_name,
    //   button: <ProfileButton account_id={clan_details?.leader_id} />
    // },
    // { title: 'Ilość graczy', value: clan_data?.members_count },
    {
      translation: 'clan.wn8',
      value: <Wn8Bar value={statistics?.wn8} />
    }
  ];

  statsList.push();

  const players = Object.values(clan.players).map((player) => {
    return Object.assign({}, player, { wn8: statistics?.players[player.id] || -1 });
  });

  return (
    <>
      <ClanName>
        {clan?.tag}
        <small>{clan?.name}</small>
      </ClanName>

      <StatsList list={statsList} />

      <PlayersList
        players={players}
        clan={clan || []}
      />
    </>
  );
}