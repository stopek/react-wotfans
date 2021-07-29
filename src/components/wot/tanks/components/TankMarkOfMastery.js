import first from "assets/icons/marks/1.jpg";
import second from "assets/icons/marks/2.jpg";
import third from "assets/icons/marks/3.jpg";
import m from "assets/icons/marks/m.jpg";
import PropTypes from 'prop-types';
import React from "react";
import styled from "styled-components";

const imageFromMarkValue = (mark) => {
  return { 1: third, 2: second, 3: first, 4: m }[mark] ?? null;
}

const Content = styled.div`
  width: ${props => props?.size}px;
  height: ${props => props?.size}px;
  background: url(${props => props?.image}) no-repeat center center;
  background-size: contain;
`;

function TankMarkOfMastery({ mark, size }) {
  if (mark <= 0) {
    return null;
  }

  const image = imageFromMarkValue(mark);
  if (!image) {
    return null;
  }

  return (
    <Content image={image} size={size} />
  );
}

TankMarkOfMastery.propTypes = {
  mark: PropTypes.number,
  size: PropTypes.number
}

TankMarkOfMastery.defaultProps = {
  size: 30
}

export default TankMarkOfMastery;
