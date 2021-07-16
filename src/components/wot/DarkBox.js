import React from 'react';
import styled from "styled-components";
import { COLOR_DARK, RADIUS } from "styles/colors";

const Box = styled.div`
  background: ${COLOR_DARK};
  padding: 0 20px;
  margin: 15px 0;
  border-radius: ${RADIUS};
  ${props => props?.padding && `padding-left: 45px; padding-right: 45px;`}
`;

export default function DarkBox({ children, ...props }) {
  return (
    <Box {...props}>
      {children}
    </Box>
  );
}
