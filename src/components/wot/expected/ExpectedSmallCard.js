import { TANK_URL } from "app/routes";
import TankNameWithIconType from "components/wot/tanks/TankNameWithIconType";
import fillRoute from "helpers/fillRoute";
import { numberResult } from "helpers/priceFormat";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";
import { COLOR_DARK, COLOR_TEXT, COLOR_TEXT_ON_THEME, COLOR_THEME, RADIUS } from "styles/colors";

const TankImage = styled.img`
  max-height: 70px;
  margin-top: -10px;
`;

const Content = styled.div`
  width: 100%;
  padding: 5px 5px;
  cursor: pointer;
  color: ${COLOR_TEXT};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  @media ${breakpoint.sm} {
    flex-direction: row;
    align-items: center;
  }

  &:hover {
    background: ${COLOR_THEME};
    color: ${COLOR_TEXT_ON_THEME};
  }
`;

const NameWithImage = styled.div`
  display: flex;
  flex: 3;
`;

const Statistics = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex: 5;
  gap: 5px;
  align-items: center;
  @media ${breakpoint.sm} {
    justify-content: flex-end;
  }
`;

const Statistic = styled.div`
  display: inline-flex;
  flex-direction: column;
  background: ${COLOR_DARK};
  border-radius: ${RADIUS};
  line-height: 1;
  padding: 5px;
  font-size: 12px;

`;

export default function ExpectedSmallCard({ item = {}, ...props }) {
  const tank = item?.tank;
  const history = useHistory();

  const statistics = {
    damage: 'exp.damage',
    def: 'exp.def',
    frag: 'exp.frag',
    spot: 'exp.spot',
    win: 'exp.win'
  };

  return (
    <Content onClick={() => history.push(fillRoute(TANK_URL, { tank_id: tank?.id }))} {...props}>
      <NameWithImage>
        <TankImage src={tank?.image} />
        <TankNameWithIconType tank={tank} />
      </NameWithImage>
      <Statistics>
        {Object.keys(statistics).map((value_key) => (
          <Statistic key={`exp-card-${value_key}`}>
            <FormattedMessage id={statistics[value_key]} />
            <strong title={item[value_key] ?? 0}>
              {numberResult(item[value_key] ?? 0)}
            </strong>
          </Statistic>
        ))}
      </Statistics>
    </Content>
  );
}
