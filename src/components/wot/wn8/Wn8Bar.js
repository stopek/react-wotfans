import { priceFormat } from "helpers/priceFormat";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import {
  RADIUS,
  WN8_ABOVE_AVERAGE,
  WN8_AVERAGE,
  WN8_BAD,
  WN8_BELOW_AVERAGE,
  WN8_GOOD,
  WN8_GREAT,
  WN8_SUPER_UNICUM,
  WN8_UNICUM,
  WN8_VERY_BAD,
  WN8_VERY_GOOD
} from "styles/colors";

const Bar = styled.span`
  background: ${props => props?.color};
  border-radius: ${RADIUS};
  padding: 5px;
  display: inline-block;
  color: white;
`;

const getWn8Color = (value) => {
  const values = [
    { amount: 450, color: WN8_BAD },
    { amount: 450, color: WN8_BELOW_AVERAGE },
    { amount: 650, color: WN8_AVERAGE },
    { amount: 900, color: WN8_ABOVE_AVERAGE },
    { amount: 1200, color: WN8_GOOD },
    { amount: 1600, color: WN8_VERY_GOOD },
    { amount: 2000, color: WN8_GREAT },
    { amount: 2450, color: WN8_UNICUM },
    { amount: 2900, color: WN8_SUPER_UNICUM },
  ];

  let response_color = WN8_VERY_BAD;
  values.map(({ amount, color }) => {
    if (value >= amount) {
      response_color = color;
    }
  });

  return response_color;
}

export default function Wn8Bar({ value = 0, unit = '' }) {
  return (
    <Bar color={getWn8Color(value)}>
      {value >= 0 ? priceFormat(value, ',', unit) : <FormattedMessage id={`no.data`} />}
    </Bar>
  );
}