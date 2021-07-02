import { priceFormat } from "helpers/priceFormat";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { RADIUS } from "styles/colors";

const Bar = styled.span`
  background: ${props => props?.background};
  border-radius: ${RADIUS};
  padding: 5px;
  display: inline-block;
  color: white;
  font-weight: 600;
  font-size: ${props => props?.large ? 32 : 16}px;
  position: relative;
  text-align: center;

  > div {
    background: ${props => props?.background};
    position: absolute;
    width: 100%;
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${RADIUS};
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all .2s ease-in-out;
    cursor: help;

    &:hover {
      transform: translate(-50%, -50%) scale(1.15);
      opacity: 1;
      z-index: 10;
    }
  }
`;

const getValue = (check_value, list, key) => {
  let response_color = 'transparent';
  list.map((item) => {
    if (check_value >= item.value) {
      response_color = item[key];
    }
  });

  return response_color;
}

export default function ColorStatBox({ list = [], value = -1, unit = '', large = false }) {
  const color = getValue(value, list, 'background');

  return (
    <Bar background={color} large={large}>
      <div>
        <FormattedMessage id={getValue(value, list, 'translation')} />
      </div>
      {value >= 0 ? priceFormat(value, ',', unit) : <FormattedMessage id={`no.data`} />}
    </Bar>
  );
}
