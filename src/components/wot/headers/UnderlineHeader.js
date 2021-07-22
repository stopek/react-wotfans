import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { COLOR_THEME } from "styles/colors";

export const Header = styled.h2`
  color: white;
  font-size: 25px;
  position: relative;
  display: table;
  margin: 35px 0;

  ${props => props?.up && `margin-top: 0;`}
  ${props => props?.down && `margin-bottom: 15px;`}
  &:after {
    display: block;
    width: 50%;
    position: absolute;
    bottom: -5px;
    height: 2px;
    background: ${COLOR_THEME};
    content: '';
  }

  small {
    display: block;
    font-size: 60%;
  }
`;

export default function UnderlineHeader({ translation, small = '', ...props }) {
  return (
    <Header {...props}>
      <FormattedMessage id={translation} />
      {small?.length > 0 && (
        <small>
          <FormattedMessage id={small} />
        </small>
      )}
    </Header>
  );
}
