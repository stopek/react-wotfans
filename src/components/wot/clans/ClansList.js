import { Hidden } from "@material-ui/core";
import ButtonInput from "components/ui/input/ButtonInput";
import ClanSmallCard from "components/wot/clans/ClanSmallCard";
import { date_from_unix } from "helpers/date";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import {
  COLOR_DARK,
  COLOR_DARK_2,
  COLOR_GREY_DARK_3,
  COLOR_TEXT,
  COLOR_TEXT_ON_THEME,
  COLOR_THEME
} from "styles/colors";

const Clans = styled.div`
  width: 100%;
  margin-top: 15px;
  color: ${COLOR_TEXT};
`;

const Tr = styled.tr``;

const Td = styled.td`
  font-size: 15px;
  text-align: left;
  padding: 10px 15px;
`;

const Fit = styled(Td)`
  white-space: nowrap;
  width: 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background: ${COLOR_THEME};
  color: ${COLOR_TEXT_ON_THEME};
  font-weight: 900;
`;

const Tbody = styled.tbody`
  tr {
    background: ${COLOR_DARK};

    &:nth-child(2n + 1) {
      background: ${COLOR_DARK_2};
    }

    &:hover {
      background: ${COLOR_GREY_DARK_3};
    }
  }
`;

export default function ClansList({ clans = [], check }) {
  clans = Object.values(clans);
  if (!clans?.length) {
    return null;
  }

  return (
    <Clans>
      <Table>
        <Hidden smDown>
          <Thead>
            <Tr>
              <Fit as={`th`}>
                <FormattedMessage id={`shortcut`} />
              </Fit>
              <Td as={`th`}>
                <FormattedMessage id={`full.clan.name`} />
              </Td>
              <Fit as={`th`}>
                <FormattedMessage id={`created.date`} />
              </Fit>
              <Fit as={`th`}>
                <FormattedMessage id={`amount`} />
              </Fit>
              <Fit as={`th`}>
                <FormattedMessage id={`details`} />
              </Fit>
            </Tr>
          </Thead>
        </Hidden>

        <Tbody>
          {clans.map((clan, clan_key) => (
            <Tr key={`clan-${clan_key}`}>
              <Hidden mdUp>
                <ClanSmallCard clan={clan} check={check} as={`td`} />
              </Hidden>

              <Hidden smDown>
                <Fit>{clan?.tag}</Fit>
                <Td>{clan?.name}</Td>
                <Fit>{date_from_unix(clan?.clan_created_at)}</Fit>
                <Fit>{clan?.members_count}</Fit>
                <Fit>
                  <ButtonInput
                    color={`secondary`}
                    label={`see.profile`}
                    onClick={() => check(clan?.tag)}
                  />
                </Fit>
              </Hidden>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Clans>
  );
}
