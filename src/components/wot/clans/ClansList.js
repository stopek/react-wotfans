import { Hidden } from "@material-ui/core";
import ButtonInput from "components/ui/input/ButtonInput";
import ClanSmallCard from "components/wot/clans/ClanSmallCard";
import { date_from_unix } from "helpers/date";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { COLOR_TEXT } from "styles/colors";
import { FitTableTd, SimpleTable, TableTbody, TableTdSmall, TableThead, TableTr } from "styles/GlobalStyled";

const Clans = styled.div`
  width: 100%;
  margin-top: 15px;
  color: ${COLOR_TEXT};
`;

export default function ClansList({ clans = [], check }) {
  clans = Object.values(clans);
  if (!clans?.length) {
    return null;
  }

  return (
    <Clans>
      <SimpleTable>
        <Hidden smDown>
          <TableThead>
            <TableTr>
              <FitTableTd as={`th`}>
                <FormattedMessage id={`shortcut`} />
              </FitTableTd>
              <TableTdSmall as={`th`}>
                <FormattedMessage id={`full.clan.name`} />
              </TableTdSmall>
              <FitTableTd as={`th`}>
                <FormattedMessage id={`created.date`} />
              </FitTableTd>
              <FitTableTd as={`th`}>
                <FormattedMessage id={`amount`} />
              </FitTableTd>
              <FitTableTd as={`th`}>
                <FormattedMessage id={`details`} />
              </FitTableTd>
            </TableTr>
          </TableThead>
        </Hidden>

        <TableTbody>
          {clans.map((clan, clan_key) => (
            <TableTr key={`clan-${clan_key}`}>
              <Hidden mdUp>
                <ClanSmallCard clan={clan} check={check} as={`td`} />
              </Hidden>

              <Hidden smDown>
                <FitTableTd>{clan?.tag}</FitTableTd>
                <TableTdSmall>{clan?.name}</TableTdSmall>
                <FitTableTd>{date_from_unix(clan?.clan_created_at)}</FitTableTd>
                <FitTableTd>{clan?.members_count}</FitTableTd>
                <FitTableTd>
                  <ButtonInput
                    color={`secondary`}
                    label={`see.profile`}
                    onClick={() => check(clan?.tag)}
                  />
                </FitTableTd>
              </Hidden>
            </TableTr>
          ))}
        </TableTbody>
      </SimpleTable>
    </Clans>
  );
}
