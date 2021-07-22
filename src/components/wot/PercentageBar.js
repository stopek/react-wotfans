import { percentageDisplay } from "helpers/priceFormat";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { COLOR_DARK_3, COLOR_SECOND, COLOR_TEXT, RADIUS } from "styles/colors";

const Content = styled.div`
  width: 100%;
  height: 15px;
  border-radius: ${RADIUS};
  background: ${COLOR_DARK_3};
  position: relative;
  ${props => props?.down && `margin-top: 15px;`}
`;

const Percent = styled.div`
  width: ${props => props?.width}%;
  height: 100%;
  background: ${COLOR_SECOND};
  border-radius: ${RADIUS};
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-size: 10px;
  white-space: nowrap;
  color: ${COLOR_TEXT};
`;

const Title = styled.div`
  position: absolute;
  font-size: 12px;
  top: -15px;
  white-space: nowrap;
`;

export default function PercentageBar({ amount = 0, translation = '', total = 0 }) {
  const percent = (100 * amount) / total;

  return (
    <Content down={translation?.length > 0}>
      {translation?.length > 0 && (
        <Title>
          <FormattedMessage id={translation} />
        </Title>
      )}

      <Percent width={percent}>
        {percentageDisplay(percent, 2)} ({amount}/{total})
      </Percent>
    </Content>
  );
}
