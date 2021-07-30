import PropTypes from "prop-types";
import React from "react";
import styled, { keyframes } from "styled-components";

const LoaderContent = styled.div<{ center?: boolean }>`
  position: relative;
  ${props => props?.center && 'display: flex; width: 100%; justify-content: center;'}
`;

const gear2 = keyframes`
  0% {
    transform: scale(.5) rotate(0deg);
  }
  100% {
    transform: scale(.5) rotate(-360deg);
  }
`;

const gear = keyframes`
  0% {
    transform: scale(.5) rotate(0deg);
  }
  100% {
    transform: scale(.5) rotate(360deg);
  }
`;

const Gear = styled.div`
  width: 120px;
  height: 90px;
  border-radius: 10%;
  border: 5px solid #fff;
  position: relative;
  box-shadow: 0 10px 0 0 rgba(0, 0, 0, .1);
  margin: 0;

  &:before {
    content: "";
    width: 58px;
    height: 58px;
    border-radius: 100%;
    display: block;
    border: 5px dashed #fff;
    position: absolute;
    top: 26px;
    right: -14px;
    box-shadow: inset 0 0 0 10px #fff;
    transform: scale(.5) rotate(0deg);
    animation: ${gear2} 4s linear infinite;
  }

  &:after {
    content: "";
    width: 120px;
    height: 120px;
    border-radius: 100%;
    display: block;
    border: 5px dashed #fff;
    position: absolute;
    top: -25px;
    left: -25px;
    box-shadow: inset 0 0 0 20px #fff;
    transform: scale(.5) rotate(0deg);
    animation: ${gear} 6s linear infinite;
  }
`;

type PreloaderType = {
  center?: boolean
}

function Preloader({ center }: PreloaderType) {
  return (
    <LoaderContent center={center}>
      <Gear />
    </LoaderContent>
  );
}

Preloader.propTypes = {
  center: PropTypes.bool
}

Preloader.defaultProps = {
  center: false
}

export default Preloader;
