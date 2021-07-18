import { TANK_URL } from "app/routes";
import TankMarkOfMastery from "components/wot/tanks/components/TankMarkOfMastery";
import TankModalStats from "components/wot/tanks/TankModalStats";
import TankPriceBox from "components/wot/tanks/components/TankPriceBox";
import Wn8Bar from "components/wot/wn8/Wn8Bar";
import fillRoute from "helpers/fillRoute";
import { priceFormat } from "helpers/priceFormat";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import { COLOR_DARK_2, COLOR_SECOND, COLOR_THEME, RADIUS } from "styles/colors";

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
  ${props => props?.premium && `
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
  color: white;
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
  left: -1px;
  border-radius: ${RADIUS};
  overflow: hidden;
  bottom: -1px;

  ${hoverCss}
`;

export default function Tank({ tank = {}, stats = {}, statistics = {}, ...props }) {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  const history = useHistory();
  const route = fillRoute(TANK_URL, { tank_id: tank.id });

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
        onClick={() => (props?.tank_profile ? history.push(route) : setOpen(true))}
        premium={tank?.is_premium || false}
        pointer={!props?.no_stats || props?.tank_profile}
      >
        {props?.weight && (
          <Weight hover={hover}>{priceFormat(stats?.weight, ',', '%', 4)}</Weight>
        )}

        <MarkPosition hover={hover}>
          <TankMarkOfMastery mark={statistics?.mark_of_mastery} size={30} />
        </MarkPosition>

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
