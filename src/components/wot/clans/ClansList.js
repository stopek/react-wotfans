import { Hidden } from "@material-ui/core";
import { CLAN_URL } from "app/routes";
import ButtonInput from "components/ui/input/ButtonInput";
import ClanSmallCard from "components/wot/clans/ClanSmallCard";
import PercentageBar from "components/wot/PercentageBar";
import Wn8Bar from "components/wot/wn8/Wn8Bar";
import { date_from_unix } from "helpers/date";
import fillRoute from "helpers/fillRoute";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { COLOR_TEXT } from "styles/colors";
import { FitTableTd, SimpleTable, TableTbody, TableTdSmall, TableThead, TableTr } from "styles/GlobalStyled";

const Clans = styled.div`
  width: 100%;
  margin-top: 15px;
  color: ${COLOR_TEXT};
`;

export default function ClansList({ clans = [] }) {
  const history = useHistory();
  clans = Object.values(clans);
  if (!clans?.length) {
    return null;
  }

  const handleProfileClick = (event, tag) => {
    event.preventDefault();

    return history.push(fillRoute(CLAN_URL, { tag: tag }));
  }

  return (
    <Clans>
      <SimpleTable>
        <Hidden smDown>
          <TableThead>
            <TableTr>
              <TableTdSmall as={`th`}>
                <FormattedMessage id={`shortcut`} />
              </TableTdSmall>
              <TableTdSmall as={`th`}>
                <FormattedMessage id={`active.players.percentage`} />
              </TableTdSmall>
              <FitTableTd as={`th`}>
                <FormattedMessage id={`wn8`} />
              </FitTableTd>
              <FitTableTd as={`th`}>
                <FormattedMessage id={`created.date`} />
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
                <ClanSmallCard clan={clan} check={handleProfileClick} as={`td`} />
              </Hidden>

              <Hidden smDown>
                <TableTdSmall>
                  {clan?.tag}
                  <small>{clan?.name}</small>
                </TableTdSmall>
                <TableTdSmall>
                  <PercentageBar amount={clan?.active_players ?? 0} total={clan?.members_count ?? 0} />
                </TableTdSmall>
                <FitTableTd>
                  <Wn8Bar value={clan?.wn8} />
                </FitTableTd>
                <FitTableTd>{date_from_unix(clan?.clan_created_at)}</FitTableTd>
                <FitTableTd>
                  <ButtonInput
                    color={`secondary`}
                    label={`see.profile`}
                    onClick={(event) => handleProfileClick(event, clan?.tag)}
                    as={`a`}
                    href={fillRoute(CLAN_URL, { tag: clan?.tag })}
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
