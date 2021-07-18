import { TANK_URL } from "app/routes";
import TankNationBox from "components/wot/tanks/components/TankNationBox";
import TankTypeIcon from "components/wot/tanks/components/TankTypeIcon";
import fillRoute from "helpers/fillRoute";
import { priceFormat } from "helpers/priceFormat";
import { getTranslationByNation } from "helpers/user";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";
import { COLOR_SECOND, COLOR_THEME } from "styles/colors";

const BoxesInfo = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
  
  @media ${breakpoint.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const BoxInfos = styled.div`
  display: inline-flex;
  padding: 15px;
  background: ${COLOR_SECOND};
  border-radius: 5px;
  color: white;
  line-height: 1;
  flex-direction: column;
  font-size: 15px;
  width: 100%;

  span {
    display: block;
    font-size: 150%;
    font-weight: 700;
  }
`;

const TankName = styled.h2`
  font-size: 20px;
  margin: 0 0 15px 0;
  display: flex;
  gap: 15px;
  align-items: center;
  color: black;

  @media ${breakpoint.md} {
    font-size: 30px;
  }
  
  ${props => props?.more && `
    cursor: pointer;
    
    &:hover {
      color: ${COLOR_THEME};
    }
  `}
`;

const Description = styled.p`
  font-size: 15px;
  color: gray;
`;

const Image = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: #e7e7e7;
  background-image: url(${props => props?.image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: auto;
  display: flex;
`;

export default function TankBase({ tank = {}, more }) {
  const history = useHistory();

  const infos_data = [
    { translation: 'tier', value: tank.tier },
    tank?.price_credit > 0 && { translation: 'price.silver', value: priceFormat(tank?.price_credit, ',', '', 0) },
    tank?.price_gold > 0 && { translation: 'price.gold', value: priceFormat(tank?.price_gold, ',', '', 0) },
    tank?.prices_xp > 0 && { translation: 'price.xp', value: priceFormat(tank?.prices_xp, ',', '', 0) }
  ];

  return (
    <>
      <TankName more={more} onClick={() => more && history.push(fillRoute(TANK_URL, { tank_id: tank?.id }))}>
        <TankTypeIcon type={tank?.type} dark />
        {tank?.name}
        <TankNationBox tank={tank} />
      </TankName>
      <Image image={tank?.image} premium={tank?.is_premium} />
      <Description>
        {tank?.description}
      </Description>

      <BoxesInfo>
        {infos_data.filter((item) => !!item).map((item, key) => (
          <BoxInfos key={`box-info-${key}`}>
            <FormattedMessage id={item.translation} />
            <span>{item.value}</span>
          </BoxInfos>
        ))}
      </BoxesInfo>
    </>
  );
}
