import china from "assets/flags/011-china.png";
import ussr from "assets/flags/044-russia.png";
import uk from "assets/flags/110-united-kingdom.png";
import poland from "assets/flags/165-poland.png";
import usa from "assets/flags/186-united-states.png";
import sweden from "assets/flags/190-sweden.png";
import france from "assets/flags/197-france.png";
import czech from "assets/flags/202-czech republic.png";
import germany from "assets/flags/208-germany.png";
import japan from "assets/flags/241-japan.png";
import italy from "assets/flags/263-italy.png";
import merc from "assets/flags/merc.png";
import { getTranslationByNation } from "helpers/user";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { COLOR_SECOND, COLOR_TEXT_ON_THEME } from "styles/colors";

const NationBox = styled.div`
  display: inline-flex;
  line-height: 1;
  font-size: 12px;
  overflow: hidden;
  align-items: center;
  background: ${COLOR_SECOND};
  border-radius: 25px;
`;

const Flag = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: -1px;
  background: url(${props => props?.icon}) no-repeat center center;
  background-size: cover;
`;

const Nation = styled.div`
  font-size: 14px;
  padding: 0 20px 0 10px;
  line-height: 1;
  text-transform: uppercase;
  color: ${COLOR_TEXT_ON_THEME};
`;

const getIconByType = (type) => {
  switch (type) {
    case 'ussr':
      return ussr;
    case 'sweden':
      return sweden;
    case 'uk':
      return uk;
    case 'czech':
      return czech;
    case 'italy':
      return italy;
    case 'poland':
      return poland;
    case 'usa':
      return usa;
    case 'france':
      return france;
    case 'japan':
      return japan;
    case 'china':
      return china;
    case 'merc':
      return merc;
    case 'germany':
      return germany;
    default:
      return null;
  }
}

export default function TankNationBox({ tank = {}, hidename = false, ...props }) {
  const icon = getIconByType(tank?.nation);
  if (!icon) {
    return null;
  }

  return (
    <NationBox {...props}>
      <Flag icon={icon} />
      {!hidename && (
        <Nation>
          <FormattedMessage id={getTranslationByNation(tank.nation)} />
        </Nation>
      )}
    </NationBox>
  );
}
