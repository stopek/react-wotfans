import { priceFormat } from "helpers/priceFormat";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";
import { RADIUS } from "styles/colors";

const Bar = styled.span`
  background: ${props => props?.background};
  border-radius: ${RADIUS};
  padding: 5px;
  display: inline-block;
  color: white;
  font-weight: 600;
  font-size: ${props => props?.large ? 25 : 20}px;
  position: relative;
  text-align: center;
  line-height: 1;

  ${props => props?.small && `padding: 3px; font-size: 13px; border-radius: 0;`}
  
  @media ${breakpoint.md} {
    font-size: ${props => props?.large ? 32 : 16}px;
  }

  > div {
    background: ${props => props?.background};
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 60%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${RADIUS};
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    cursor: help;

    &:hover {
      opacity: 1;
    }
  }
`;

const Value = styled.span`
  white-space: nowrap;
`;

const getValue = (check_value, list, key) => {
  let response_color = 'transparent';
  list.forEach((item) => {
    if (check_value >= item.value) {
      response_color = item[key];
    }
  });

  return response_color;
}

export default function ColorStatBox({ list = [], value = -1, unit = '', large = false, small = false }) {
  const color = getValue(value, list, 'background');

  return (
    <Bar background={color} large={large} small={small}>
      {value >= 0 && (
        <div>
          <FormattedMessage id={getValue(value, list, 'translation')} />
        </div>
      )}

      <Value>
        {value >= 0 ? priceFormat(value, ',', unit) : <FormattedMessage id={`no.data`} />}
      </Value>
    </Bar>
  );
}
