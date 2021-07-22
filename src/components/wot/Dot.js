import React from "react";
import styled, { keyframes } from "styled-components";
import { COLOR_SECOND, COLOR_THEME } from "styles/colors";

const pulseDot = keyframes`
  0% {
    -webkit-transform: scale(0.1, 0.1);
    opacity: 0.0;
  }

  50% {
    opacity: 1.0;
  }

  100% {
    -webkit-transform: scale(1.2, 1.2);
    opacity: 0.0;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 10px 0;
`;

const Circle = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${props => props?.current ? COLOR_THEME : COLOR_SECOND};
  border-radius: 50%;
  position: absolute;
`;

const RingRing = styled.div`
  border: 3px solid ${props => props?.current ? COLOR_THEME : COLOR_SECOND};
  -webkit-border-radius: 30px;
  height: 25px;
  width: 25px;
  position: absolute;
  -webkit-animation: ${pulseDot} 2s ease-out;
  -webkit-animation-iteration-count: infinite;
  opacity: 0.0;
  ${props => !props?.current && `animation-name: none;`}
`;

export default function Dot({ blinking = false }) {
  return (
    <Content>
      <RingRing current={blinking} />
      <Circle current={blinking} />
    </Content>
  );
}
