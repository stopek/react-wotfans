import { PLAYER_URL } from "app/routes";
import ButtonInput from "components/ui/input/ButtonInput";
import PlayerNameWithConsoleLogo from "components/wot/player/PlayerNameWithConsoleLogo";
import fillRoute from "helpers/fillRoute";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import { FitTableTd, SimpleTable, TableTbody, TableTdSmall, TableThead } from "styles/GlobalStyled";
import styled from "styled-components";

const Content = styled.div`
  ${props => props?.max_height > 0 && (
    `
      max-height: ${props?.max_height}px;
      overflow-y: auto;
    `
  )}
`;

export default function BestPlayersOnTank(
  {
    header_translation = '',
    column_key = '',
    max_height = 0,
    stats = []
  }
) {
  const history = useHistory();

  return (
    <Content max_height={max_height}>
      <SimpleTable>
        <TableThead>
          <tr>
            <TableTdSmall as={`th`} />
            <FitTableTd as={`th`}><FormattedMessage id={`player.name`} /></FitTableTd>
            <FitTableTd as={`th`} />
          </tr>
        </TableThead>
        <TableTbody>
          {Object.values(stats).map((stat, key) => (
            <tr key={`stat-${column_key}-${key}`}>
              <TableTdSmall>{stat[column_key]}</TableTdSmall>
              <FitTableTd>
                <PlayerNameWithConsoleLogo name={stat?.player?.name} />
              </FitTableTd>
              <FitTableTd>
                <ButtonInput
                  color={`secondary`}
                  onClick={() => history.push(fillRoute(PLAYER_URL, { account_id: stat?.player?.id }))}
                  label={`see.profile`}
                />
              </FitTableTd>
            </tr>
          ))}
        </TableTbody>
      </SimpleTable>
    </Content>
  );
}
