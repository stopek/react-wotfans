import { percentageCalculator, percentageDisplay } from "helpers/priceFormat";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { COLOR_DARK, COLOR_TEXT } from "styles/colors";

const Tooltip = styled.div`
  background: ${COLOR_DARK};
  font-size: 14px;
  color: ${COLOR_TEXT};
  padding: 2px;
  position: absolute;
  width: 100%;
  max-width: 250px;
`;

const WnName = styled.div`
  font-size: 15px;
  font-weight: 700;
  background: ${props => props?.color};
  padding: 5px 10px;
`;

const WnContent = styled.div`
  padding: 5px 10px;
`;

const WnInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${props => props?.color};

  span, strong {
    flex: 1;
  }

  strong {
    justify-content: flex-end;
    display: flex;
  }
`;

export default function PlayerWnTooltip({ data = {} }) {
  const playersPercentage = percentageCalculator(data.value, data.totalPlayers);

  return (
    <Tooltip>
      <WnName color={data.color}>{data.id}</WnName>
      <WnContent>
        <WnInfo color={data.color}>
          <span>
            <FormattedMessage id={`amount`} />
          </span>
          <strong>{data.value}({percentageDisplay(playersPercentage, 2)})</strong>
        </WnInfo>
      </WnContent>
    </Tooltip>
  );
}
