import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import { useAppSelector } from "app/hooks";
import ps_logo from "assets/icons/ps_logo.png";
import xbox_logo from "assets/icons/xbox_logo.png";
import { date_ago_from_unix } from "helpers/date";
import { getDateLocale } from "helpers/languages";
import React from "react";
import { selectedLanguage } from "reducers/languageSlice";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";
import { COLOR_TEXT, RADIUS } from "styles/colors";

enum Consoles {
  PS = 'p',
  XBOX = 'x'
}

const Name = styled.span`
  display: inline-flex;
  gap: 10px;
  align-items: center;
  white-space: nowrap;
  color: ${COLOR_TEXT};
`;

const Logo = styled.div<{ image: string, small?: boolean }>`
  width: 30px;
  height: 30px;
  background: url(${props => props?.image}) no-repeat center center;
  background-size: cover;
  border-radius: ${RADIUS};

  @media ${breakpoint.md} {
    width: 40px;
    height: 40px;

    ${props => props?.small && `width: 20px; height: 20px;`}
  }
`;

const getConsoleLogo = (name: Consoles) => {
  if (name === Consoles.PS) {
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

type PlayerNameWithConsoleLogoType = {
  name: string,
  last_battle?: string,
  small?: boolean
}

function PlayerNameWithConsoleLogo({ name, last_battle, small }: PlayerNameWithConsoleLogoType) {
  const language = useAppSelector(selectedLanguage);
  const date_locale = getDateLocale(language);

  if (!name) {
    return null;
  }

  const pattern = /(.*)([- ])([^- ]*$)/;

  const nick = name.replace(pattern, "$1");
  const platform = name.replace(pattern, "$3") as Consoles;

  return (
    <Name title={name}>
      {platform in Consoles && <Logo image={getConsoleLogo(platform)} small={small} />}

      <NameBox>
        <span>{nick}</span>

        {!!last_battle && (
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

export default PlayerNameWithConsoleLogo;
