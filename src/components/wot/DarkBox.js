import React from 'react';
import styled from "styled-components";
import { COLOR_DARK, RADIUS } from "styles/colors";

const Box = styled.div`
  background: ${COLOR_DARK};
  padding: 0 10px;
  margin: 15px 0;
  border-radius: ${RADIUS};
`;

export default function DarkBox({ children }) {
  return (
    <Box>
      {children}
    </Box>
  );
}
