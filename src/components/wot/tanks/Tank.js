import { TANK_URL } from "app/routes";
import TankMarkOfMastery from "components/wot/tanks/components/TankMarkOfMastery";
import TankNationBox from "components/wot/tanks/components/TankNationBox";
import TankPriceBox from "components/wot/tanks/components/TankPriceBox";
import TankModalStats from "components/wot/tanks/TankModalStats";
import Wn8Bar from "components/wot/wn8/Wn8Bar";
import { date_ago_from_unix } from "helpers/date";
import fillRoute from "helpers/fillRoute";
import { getDateLocale } from "helpers/languages";
import { priceFormat } from "helpers/priceFormat";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectedLanguage } from "reducers/languageSlice";
import styled, { css } from "styled-components";
import { COLOR_DARK_2, COLOR_SECOND, COLOR_TEXT_ON_THEME, COLOR_THEME, RADIUS } from "styles/colors";

const hoverCss = css`
  transition: all .2s ease-in-out;
  opacity: ${props => props?.hover ? 0.1 : 1};
`;

const TankItem = styled.div`
  background-color: ${COLOR_DARK_2};
  border-radius: ${RADIUS};
  position: relative;
  transform: scale(0.95);
  ${props => props?.pointer && `cursor: pointer;`};
  ${props => props?.is_premium && `
      background: #ffcf40;
      background: linear-gradient(to right,#bf953f,#fcf6ba);
  `};

  &:hover {
    transform: scale(1.00);
    z-index: 20;
  }
`;

const TankName = styled.div`
  text-align: center;
  position: absolute;
  line-height: 1;
  font-weight: 600;
  background: ${COLOR_SECOND};
  opacity: ${props => props?.hover ? 1 : 1};
  color: white;
  bottom: -5px;
  right: -5px;
  padding: 5px;
  border-radius: ${RADIUS};
  font-size: 16px;

  ${hoverCss};

  opacity: ${props => props?.hover ? 0 : 1};
`;

const TankImage = styled.div`
  width: 100%;
  height: 150px;
  background: url(${props => props?.image}) no-repeat center center;
  background-size: contain;
`;

const WNBox = styled.div`
  display: inline-flex;
  position: absolute;
  top: -5px;
  left: -5px;
  gap: 5px;
  ${hoverCss}
`;

const Weight = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  background: ${COLOR_THEME};
  color: ${COLOR_TEXT_ON_THEME};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  ${hoverCss}
`;

const MarkPosition = styled.div`
  position: absolute;
  left: 5px;
  border-radius: ${RADIUS};
  overflow: hidden;
  bottom: 5px;
  display: flex;
  ${hoverCss}
`;

const TankNation = styled.div`
  ${hoverCss};
  display: flex;
  position: absolute;
  right: 5px;
  bottom: 25px;
  opacity: ${props => props?.hover ? 0 : 1};
`;

const LastBattle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 13px;
  background: ${COLOR_SECOND};
  padding: 5px;
  line-height: 1;
  color: white;
`;

export default function Tank({ tank = {}, stats = {}, statistics = {}, ...props }) {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  const history = useHistory();
  const route = fillRoute(TANK_URL, { tank_id: tank.id });

  const language = useSelector(selectedLanguage);
  const date_locale = getDateLocale(language);

  const handleCLick = (event) => {
    event.preventDefault();

    if (props?.tank_profile) {
      history.push(route);
      return;
    }

    if (!props?.no_stats) {
      setOpen(true);
      return;
    }

    if (props?.onChoiceTank) {
      return props?.onChoiceTank(statistics);
    }
  }

  return (
    <>
      {!props?.no_stats && (
        <TankModalStats
          tank={tank}
          stats={stats}
          statistics={statistics}
          setOpen={setOpen}
          open={open}
        />
      )}

      <TankItem
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleCLick}
        is_premium={tank?.is_premium || false}
        pointer={!props?.no_stats || props?.tank_profile || !!props?.onChoiceTank}
      >
        {props?.weight && (
          <Weight hover={hover}>{priceFormat(stats?.weight, ',', '%', 4)}</Weight>
        )}

        <MarkPosition hover={hover}>
          <TankMarkOfMastery mark={statistics?.mark_of_mastery} />
        </MarkPosition>

        {props?.battle_ago && (
          <LastBattle>
            {date_ago_from_unix(statistics?.last_battle_time, 'yyyy-MM-dd HH:mm', {
              locale: date_locale
            })}
          </LastBattle>
        )}

        <TankNation hover={!hover}>
          <TankNationBox tank={tank} without_name />
        </TankNation>

        <TankName hover={!hover}>{tank?.name}</TankName>
        <TankImage image={tank?.image} />

        {!props?.no_wn8 && statistics?.battles > 0 && tank?.tier > 0 && (
          <WNBox title={stats?.weight} hover={hover}>
            <Wn8Bar value={stats?.wn8} unit={`WN8`} />
          </WNBox>
        )}

        {props?.price && (
          <TankPriceBox tank={tank} />
        )}
      </TankItem>
    </>
  );
}
