import React from 'react';
import styled from "styled-components";
import { COLOR_DARK_2, RADIUS } from "styles/colors";
import PropTypes from 'prop-types';

const Box = styled.div`
  background: ${COLOR_DARK_2};
  padding: 0 20px;
  margin: 15px 0;
  border-radius: ${RADIUS};
  ${props => props?.padding && `padding-left: 45px; padding-right: 45px;`}
`;

function DarkBox({ children, ...props }) {
  return (
    <Box {...props}>
      {children}
    </Box>
  );
}

DarkBox.propTypes = {
  children: PropTypes.element.isRequired
}

export default DarkBox;
