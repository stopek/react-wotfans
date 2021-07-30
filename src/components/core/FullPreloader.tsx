import Preloader from "components/core/Preloader";
import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { selectLoading } from "reducers/wotSlice";
import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Loading = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  display: flex;
  align-items: center;
  left: 0;
  top: 0;
  justify-content: center;

  transition: transform .1s ease-in-out;
  animation: ${fadeInOut} forwards .5s;
`;

type FullPreloaderType = {
  force?: boolean
}

function FullPreloader({ force }: FullPreloaderType) {
  const loader = useSelector(selectLoading);

  return (
    <>
      {(loader || force) && (
        <Loading>
          <Preloader />
        </Loading>
      )}
    </>
  );
}

FullPreloader.propTypes = {
  force: PropTypes.bool
}

FullPreloader.defaultProps = {
  force: false
}

export default FullPreloader;
