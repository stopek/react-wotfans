import { percentageDisplay } from "helpers/priceFormat";
import PropTypes from "prop-types";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { COLOR_DARK_3, COLOR_SECOND, COLOR_TEXT, RADIUS } from "styles/colors";

const Content = styled.div<{ down?: boolean }>`
  width: 100%;
  height: 15px;
  border-radius: ${RADIUS};
  background: ${COLOR_DARK_3};
  position: relative;
  ${props => props?.down && `margin-top: 15px;`}
`;

const Percent = styled.div<{ width: number }>`
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

type PercentageBarType = {
  amount: number,
  translation?: string,
  total: number
}

function PercentageBar({ amount, translation, total }: PercentageBarType) {
  const percent = (100 * amount) / total;

  return (
    <Content down={!!translation}>
      {!!translation && (
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

PercentageBar.propTypes = {
  amount: PropTypes.number.isRequired,
  translation: PropTypes.string,
  total: PropTypes.number.isRequired
}

export default PercentageBar;
