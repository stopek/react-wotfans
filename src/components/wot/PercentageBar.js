import { percentageDisplay } from "helpers/priceFormat";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { COLOR_DARK_3, COLOR_SECOND, RADIUS } from "styles/colors";

const Content = styled.div`
  width: 100%;
  height: 15px;
  border-radius: ${RADIUS};
  background: ${COLOR_DARK_3};
  margin-top: 25px;
  position: relative;
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
  font-size: 12px;
  white-space: nowrap;
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
    <Content>
      {translation?.length > 0 && (
        <Title>
          <FormattedMessage id={translation} />
        </Title>
      )}

      <Percent width={percent}>
        {percentageDisplay(percent)} ({amount}/{total})
      </Percent>
    </Content>
  );
}
