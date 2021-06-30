import { wn8Ranges } from "app/settings";
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
`;

const getWn8Color = (wn8_value) => {
  let response_color = 'transparent';
  wn8Ranges.map(({ value, background }) => {
    if (wn8_value >= value) {
      response_color = background;
    }
  });

  return response_color;
}

export default function Wn8Bar({ value = -1, unit = '', large = false }) {
  return (
    <Bar background={getWn8Color(value)} large={large}>
      {value >= 0 ? priceFormat(value, ',', unit) : <FormattedMessage id={`no.data`} />}
    </Bar>
  );
}
