import { Hidden } from "@material-ui/core";
import ButtonInput from "components/ui/input/ButtonInput";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { FitTableTd, SimpleTable, TableTbody, TableTdSmall, TableThead, TableTr } from "styles/GlobalStyled";

const List = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  margin: 15px 0;
`;

export default function PlayerSessions({ sessions = [] }) {
  sessions = Object.values(sessions);

  if (!sessions?.length) {
    return null;
  }

  return (
    <List>
      <SimpleTable>
        <Hidden smDown>
          <TableThead>
            <TableTr>
              <FitTableTd><FormattedMessage id={`logged.date`} /></FitTableTd>
              <TableTdSmall><FormattedMessage id={`browser.name`} /></TableTdSmall>
              <FitTableTd><FormattedMessage id={`log.out`} /></FitTableTd>
            </TableTr>
          </TableThead>
        </Hidden>

        <TableTbody>
          {sessions.map((session) => {
            return (
              <TableTr key={`session-${session?.id}`} disable={session.deleted_at !== ''}>
                <FitTableTd>
                  {session.created_at}
                </FitTableTd>

                <TableTdSmall>
                  {session?.user_agent}
                </TableTdSmall>

                <FitTableTd>
                  {session.deleted_at === '' && (
                    <ButtonInput label={`log.out`} />
                  )}
                </FitTableTd>
              </TableTr>
            );
          })}
        </TableTbody>
      </SimpleTable>
    </List>
  );
}
