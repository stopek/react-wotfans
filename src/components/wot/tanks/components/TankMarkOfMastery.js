import first from "assets/icons/marks/1.jpg";
import second from "assets/icons/marks/2.jpg";
import third from "assets/icons/marks/3.jpg";
import m from "assets/icons/marks/m.jpg";
import React from "react";
import styled from "styled-components";

const imageFromMark = (mark) => {
  switch (mark) {
    case 1:
      return third;
    case 2:
      return second;
    case 3:
      return first;
    case 4:
      return m;
    default:
      return null;
  }
}

const Content = styled.div`
  width: ${props => props?.size}px;
  height: ${props => props?.size}px;
  background: url(${props => props?.image}) no-repeat center center;
  background-size: contain;
`;

export default function TankMarkOfMastery({ mark = 0, size = 100 }) {
  if (mark <= 0) {
    return null;
  }

  const image = imageFromMark(mark);
  if (!image) {
    return null;
  }

  return (
    <Content image={image} size={size} />
  );
}
