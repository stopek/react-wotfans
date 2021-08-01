import { Hidden } from "@material-ui/core";
import RoleWithClanButton from "components/wot/clans/RoleWithClanButton";
import EfficiencyBar from "components/wot/efficiency/EfficiencyBar";
import PlayerNameWithConsoleLogo from "components/wot/player/PlayerNameWithConsoleLogo";
import PlayerProfileButton from "components/wot/player/PlayerProfileButton";
import PlayerSmallCard from "components/wot/player/PlayerSmallCard";
import WN7Bar from "components/wot/wn7/WN7Bar";
import Wn8Bar from "components/wot/wn8/Wn8Bar";
import { date_from_unix } from "helpers/date";
import { percentageCalculator, priceFormat } from "helpers/priceFormat";
import { sortByActivityAndWN8 } from "helpers/user";
import { PlayerInterface } from "interfaces/PlayerInterface";
import PropTypes from "prop-types";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { COLOR_TEXT } from "styles/colors";
import { FitTableTd, SimpleTable, TableTbody, TableTdSmall, TableThead, TableTr } from "styles/GlobalStyled";

const List = styled.div`
  position: relative;
  z-index: 2;
  color: ${COLOR_TEXT};
  margin: 15px 0;
`;

type PlayersList = {
  players: PlayerInterface[]
}

function PlayersList({ players }: PlayersList) {
  players = Object.values(players);

  if (!players?.length) {
    return null;
  }

  players = sortByActivityAndWN8(players);

  return (
    <List>
      <SimpleTable>
        <Hidden smDown>
          <TableThead>
            <TableTr>
              <TableTdSmall><FormattedMessage id={`player.name`} /></TableTdSmall>
              <FitTableTd><FormattedMessage id={`wn8`} /></FitTableTd>
              <FitTableTd><FormattedMessage id={`wn7`} /></FitTableTd>
              <FitTableTd><FormattedMessage id={`efficiency`} /></FitTableTd>
              <FitTableTd><FormattedMessage id={`battles`} /></FitTableTd>
              <FitTableTd><FormattedMessage id={`win.percentage`} /></FitTableTd>
              <FitTableTd><FormattedMessage id={`frags`} /></FitTableTd>
              <FitTableTd><FormattedMessage id={`in.game.at`} /></FitTableTd>
              <FitTableTd><FormattedMessage id={`clan.role`} /></FitTableTd>
              <FitTableTd><FormattedMessage id={`details`} /></FitTableTd>
            </TableTr>
          </TableThead>
        </Hidden>

        <TableTbody>
          {players.map((player) => {
            const statistics = player.stats[0] ?? {};
            const winPercentage = percentageCalculator(statistics?.wins, statistics?.battles);

            return (
              <TableTr key={`player-${player?.id}`} disable={!!player?.is_inactive}>
                <Hidden mdUp>
                  <td>
                    <PlayerSmallCard player={player} />
                  </td>
                </Hidden>

                <Hidden smDown>
                  <TableTdSmall>
                    <PlayerNameWithConsoleLogo
                      name={player?.name}
                      last_battle={player?.last_battle_time}
                    />
                  </TableTdSmall>

                  <FitTableTd>
                    <Wn8Bar value={player?.wn8 || 0} />
                  </FitTableTd>

                  <FitTableTd>
                    <WN7Bar value={player?.wn7 || 0} />
                  </FitTableTd>

                  <FitTableTd>
                    <EfficiencyBar value={player?.efficiency || 0} />
                  </FitTableTd>

                  <FitTableTd>{statistics?.battles}</FitTableTd>
                  <FitTableTd>{priceFormat(winPercentage, ',', '%')}</FitTableTd>
                  <FitTableTd>{statistics?.frags}</FitTableTd>
                  <FitTableTd>{date_from_unix(player?.player_created_at)}</FitTableTd>
                  <FitTableTd>
                    <RoleWithClanButton
                      role={player?.role}
                      tag={player?.clan?.tag}
                    />
                  </FitTableTd>
                  <FitTableTd>
                    <PlayerProfileButton account_id={player?.id} name={player?.name} />
                  </FitTableTd>
                </Hidden>
              </TableTr>
            );
          })}
        </TableTbody>
      </SimpleTable>
    </List>
  );
}

PlayersList.propTypes = {
  list: PropTypes.array
}
export default PlayersList;
