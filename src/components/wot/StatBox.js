import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { COLOR_DARK, COLOR_THEME, RADIUS } from "styles/colors";

const Box = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: relative;
  align-items: flex-start;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: ${COLOR_DARK};
  border-radius: ${RADIUS};
  line-height: 1;
  color: white;
  flex-wrap: nowrap;

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

const Tank = styled.div`
  flex: 3;
  background: ${COLOR_THEME} url(${props => props?.image}) no-repeat center center;
  background-size: contain;
  display: flex;
  height: 100%;
  border-radius: ${RADIUS};
  cursor: pointer;
`;

const Content = styled.div`
  flex: 4;
  padding: 25px;
`;


export default function StatBox({ translation, value, button, tank }) {
  return (
    <Box>
      <Content>
        <Title>
          <FormattedMessage id={translation} />
        </Title>
        <Value>{value}</Value>
        {!!button && button}
      </Content>

      {!!tank?.tank && (
        <Tank image={tank?.tank?.image} {...tank?.props} />
      )}
    </Box>
  );
}
