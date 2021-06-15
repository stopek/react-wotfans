import ButtonInput from "components/ui/input/ButtonInput";
import { date_from_unix } from "helpers/date";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { COLOR_THEME } from "styles/colors";

const Clans = styled.div`
  width: 100%;
  margin-top: 15px;
  color: white;
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
  flex: 6;
  padding: 5px 15px;
  display: flex;
  align-items: center;
`;

const Small = styled(Name)`
  flex: 1;
`;

const Info = styled(Name)`
  flex: 1;
  text-align: center;
`;

export default function ClansList({ clans = [], check }) {
  clans = Object.values(clans);
  if (!clans?.length) {
    return null;
  }

  return (
    <Clans>
      <Item header>
        <Small><FormattedMessage id={`shortcut`} /></Small>
        <Name><FormattedMessage id={`full.clan.name`} /></Name>
        <Small><FormattedMessage id={`created.date`} /></Small>
        <Small><FormattedMessage id={`amount`} /></Small>
        <Info><FormattedMessage id={`details`} /></Info>
      </Item>

      {clans.map((clan, clan_key) => (
        <Item key={`clan-${clan_key}`}>
          <Small>{clan?.tag}</Small>
          <Name>{clan?.name}</Name>
          <Small>{date_from_unix(clan?.clan_created_at)}</Small>
          <Small>{clan?.members_count}</Small>
          <Info>
            <ButtonInput
              color={`secondary`}
              label={<FormattedMessage id={`see.profile`} />}
              onClick={() => check(clan?.tag)}
            />
          </Info>
        </Item>
      ))}
    </Clans>
  );
}