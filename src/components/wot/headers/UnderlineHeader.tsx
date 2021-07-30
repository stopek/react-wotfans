import PropTypes from 'prop-types';
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { COLOR_THEME } from "styles/colors";

export const Header = styled.h2<{ up?: boolean, down?: boolean }>`
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

type UnderlineHeaderType = {
  translation: string,
  small?: string,
  values?: Record<string, React.ReactNode>
}

function UnderlineHeader({ translation, small, values, ...props }: UnderlineHeaderType) {
  return (
    <Header {...props}>
      <FormattedMessage id={translation} values={values} />

      {!!small && (
        <small>
          <FormattedMessage id={small} values={values} />
        </small>
      )}
    </Header>
  );
}

UnderlineHeader.propTypes = {
  translation: PropTypes.string.isRequired,
  small: PropTypes.string,
  values: PropTypes.object,
  up: PropTypes.bool,
  down: PropTypes.bool
}

UnderlineHeader.defaultProps = {
  up: false,
  down: false
}

export default UnderlineHeader;
