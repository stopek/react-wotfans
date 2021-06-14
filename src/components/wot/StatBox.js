import React from "react";
import styled from "styled-components";
import { COLOR_DARK, COLOR_THEME, RADIUS } from "styles/colors";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  align-items: flex-start;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: ${COLOR_DARK};
  padding: 25px;
  border-radius: ${RADIUS};
  line-height: 1;
  color: white;
  
  &:hover {
    background: ${COLOR_THEME};
    color: black;
  }
`;

const Title = styled.div`
  font-size: 16px;
`;

const Value = styled.div`
  font-size: 35px;
  font-weight: 700;
`;

export default function StatBox({ title, value, button }) {
  return (
    <Box>
      <Title>{title}</Title>
      <Value>{value}</Value>
      {!!button && button}
    </Box>
  );
}