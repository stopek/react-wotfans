import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import ps_logo from "assets/icons/ps_logo.png";
import xbox_logo from "assets/icons/xbox_logo.png";
import { date_ago_from_unix } from "helpers/date";
import { getDateLocale } from "helpers/languages";
import React from "react";
import { useSelector } from "react-redux";
import { selectedLanguage } from "reducers/languageSlice";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";
import { RADIUS } from "styles/colors";

const Name = styled.span`
  display: inline-flex;
  gap: 10px;
  align-items: center;
  white-space: nowrap;
`;

const Logo = styled.div`
  width: 30px;
  height: 30px;
  background: url(${props => props?.image}) no-repeat center center;
  background-size: cover;
  border-radius: ${RADIUS};
  
  @media ${breakpoint.md} {
    width: 40px;
    height: 40px;
  }
`;

const getConsoleLogo = (name) => {
  if (name === 'p') {
    return ps_logo;
  }

  return xbox_logo;
}

const LastBattle = styled.div`
  font-size: 12px;
  font-weight: 300;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const NameBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function PlayerNameWithConsoleLogo({ name = '', last_battle = '' }) {
  const language = useSelector(selectedLanguage);
  const date_locale = getDateLocale(language);

  if (!name) {
    return null;
  }

  const pattern = /(.*)([- ])([^- ]*$)/;

  const nick = name.replace(pattern, "$1");
  const platform = name.replace(pattern, "$3");

  return (
    <Name title={name}>
      <Logo image={getConsoleLogo(platform)} />
      <NameBox>
        <span>{nick}</span>

        {last_battle?.length > 0 && (
          <LastBattle>
            <SportsEsportsIcon />
            {date_ago_from_unix(last_battle, 'yyyy-MM-dd HH:mm', {
              locale: date_locale
            })}
          </LastBattle>
        )}
      </NameBox>
    </Name>
  );
}
