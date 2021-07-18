import { Hidden } from "@material-ui/core";
import React from "react";
import { FormattedMessage } from "react-intl";
import { FitTableTd, SimpleTable, TableTbody, TableTdSmall, TableThead, TableTr } from "styles/GlobalStyled";

export default function GamesList({ games = [] }) {
  return (
    <SimpleTable>
      <Hidden smDown>
        <TableThead>
          <TableTr>
            <TableTdSmall><FormattedMessage id={`game.name`} /></TableTdSmall>
            <FitTableTd><FormattedMessage id={`game.type`} /></FitTableTd>
            <FitTableTd><FormattedMessage id={`created.date`} /></FitTableTd>
            <FitTableTd><FormattedMessage id={`options`} /></FitTableTd>
          </TableTr>
        </TableThead>
      </Hidden>

      <TableTbody>
        {games.map((game) => {
          return (
            <TableTr key={`game-${game?.id}`}>
              <Hidden smDown>
                <TableTdSmall>

                </TableTdSmall>

                <FitTableTd>

                </FitTableTd>
                <FitTableTd>

                </FitTableTd>
                <FitTableTd>

                </FitTableTd>
                <FitTableTd>

                </FitTableTd>
              </Hidden>
            </TableTr>
          );
        })}
      </TableTbody>
    </SimpleTable>
  );
}
