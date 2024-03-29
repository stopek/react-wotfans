import TankNationBox from "components/wot/tanks/components/TankNationBox";
import TankNameWithIconType from "components/wot/tanks/TankNameWithIconType";
import { priceFormat } from "helpers/priceFormat";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";
import { COLOR_SECOND, COLOR_THEME } from "styles/colors";

const BoxesInfo = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;

  @media ${breakpoint.sm} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${breakpoint.lg} {
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
  flex-wrap: wrap;

  @media ${breakpoint.md} {
    font-size: 30px;
  }
  cursor: pointer;

  &:hover {
    color: ${COLOR_THEME};
  }
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

export default function TankBase({ tank = {} }) {
  const infos_data = [
    { translation: 'tier', value: tank.tier },
    tank?.price_credit > 0 && { translation: 'price.silver', value: priceFormat(tank?.price_credit, ',', '', 0) },
    tank?.price_gold > 0 && { translation: 'price.gold', value: priceFormat(tank?.price_gold, ',', '', 0) },
    tank?.prices_xp > 0 && { translation: 'price.xp', value: priceFormat(tank?.prices_xp, ',', '', 0) }
  ];

  return (
    <>
      <TankName>
        <TankNameWithIconType tank={tank} />
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
