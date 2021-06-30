import { PLAYER_URL } from "app/routes";
import ButtonInput from "components/ui/input/ButtonInput";
import RoleWithClanButton from "components/wot/clans/RoleWithClanButton";
import PlayerNameWithConsoleLogo from "components/wot/player/PlayerNameWithConsoleLogo";
import Wn8Bar from "components/wot/wn8/Wn8Bar";
import { date_from_unix } from "helpers/date";
import fillRoute from "helpers/fillRoute";
import { percentageCalculator, priceFormat } from "helpers/priceFormat";
import { sortByWN8 } from "helpers/user";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { COLOR_THEME } from "styles/colors";

const List = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  margin: 15px 0;
`;

const Item = styled.div`
  background: #1c1c1c;
  display: flex;
  width: 100%;
  margin: 5px 0;
  flex-wrap: wrap;

  ${props => props?.header && `background: ${COLOR_THEME}; color: white; font-weight: 900;`}
`;

const Name = styled.div`
  font-size: 15px;
  flex: 5;
  padding: 5px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Small = styled(Name)`
  flex: 1;
  white-space: nowrap;
`;

const Info = styled(Name)`
  flex: 1.5;
  text-align: center;
`;

export default function PlayersList({ players = [] }) {
  players = Object.values(players);
  const history = useHistory();

  if (!players?.length) {
    return null;
  }

  players = sortByWN8(players);

  return (
    <List>
      <Item header>
        <Name><FormattedMessage id={`player.name`} /></Name>
        <Small><FormattedMessage id={`wn8`} /></Small>
        <Small><FormattedMessage id={`battles`} /></Small>
        <Small><FormattedMessage id={`win.percentage`} /></Small>
        <Small><FormattedMessage id={`frags`} /></Small>
        <Small><FormattedMessage id={`in.game.at`} /></Small>
        <Small><FormattedMessage id={`clan.role`} /></Small>
        <Info><FormattedMessage id={`details`} /></Info>
      </Item>

      {players.map((player) => {
        const statistics = player.stats[0] ?? {};
        const winPercentage = percentageCalculator(statistics?.wins, statistics?.battles);

        return (
          <Item key={`player-${player?.id}`}>
            <Name>
              <PlayerNameWithConsoleLogo
                name={player?.name}
                last_battle={player?.last_battle_time}
              />
            </Name>
            <Small>
              <Wn8Bar value={player?.wn8 || 0} />
            </Small>
            <Small>{statistics?.battles}</Small>
            <Small>{priceFormat(winPercentage, ',', '%')}</Small>
            <Small>{statistics?.frags}</Small>
            <Small>{date_from_unix(player?.player_created_at)}</Small>
            <Small>
              <RoleWithClanButton
                role={player?.role}
                tag={player?.clan?.tag}
              />
            </Small>
            <Info>
              <ButtonInput
                color={`secondary`}
                onClick={() => history.push(fillRoute(PLAYER_URL, { account_id: player?.id }))}
                label={`see.profile`}
              />
            </Info>
          </Item>
        );
      })}
    </List>
  );
}
