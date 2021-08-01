import { priceFormat } from "helpers/priceFormat";
import { WNRangeInterface } from "interfaces/WNRangeInterface";
import PropTypes from 'prop-types';
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";
import { RADIUS } from "styles/colors";

const Bar = styled.span<{ background?: string, large?: boolean, small?: boolean }>`
  background: ${props => props?.background};
  border-radius: ${RADIUS};
  padding: 5px;
  display: inline-block;
  color: white;
  font-weight: 500;
  font-size: ${props => props?.large ? 25 : 20}px;
  position: relative;
  text-align: center;
  line-height: 1;

  ${props => props?.small && `
    padding: 3px; 
    font-size: 13px; 
    border-radius: 0;
  `}
  
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

  @media ${breakpoint.md} {
    font-size: ${props => props?.large ? 25 : 14}px;
  }
`;

const Value = styled.span`
  white-space: nowrap;
`;

const getValue = (value: any, list: WNRangeInterface[], key: keyof WNRangeInterface) => {
  let response_color: any = '#3d3d3d';
  list.forEach((item) => {
    if (value >= item.value) {
      response_color = item[key];
    }
  });

  return response_color;
}

type ColorStatBoxType = {
  list: WNRangeInterface[],
  value: any,
  unit?: any,
  large: boolean,
  small: boolean
}

function ColorStatBox({ list, value, unit, large, small }: ColorStatBoxType) {
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

ColorStatBox.propTypes = {
  list: PropTypes.array.isRequired,
  value: PropTypes.number,
  unit: PropTypes.string,
  large: PropTypes.bool,
  small: PropTypes.bool
}

ColorStatBox.defaultProps = {
  unit: '',
  large: false,
  value: -1,
  small: false
}

export default ColorStatBox;
