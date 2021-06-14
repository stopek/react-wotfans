import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";

import { COLOR_TEXT_DARK } from "styles/colors";

function overflow(type) {
  switch (type) {
    case "elipsis":
      return css`
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      `;
    default:
      return null;
  }
}

const Text = styled.span`
  font-size: ${(props) => props.size ?? "18px"};
  color: ${(props) => props.color ?? COLOR_TEXT_DARK};
  font-weight: ${(props) => props.weight ?? "normal"};
  text-align: ${(props) => props.align ?? "unset"};
  cursor: ${(props) => props.cursor ?? "inherit"};
  display: ${(props) => props.display ?? "inline-block"};

  max-width: ${(props) => props.max_width + 'px' ?? "auto"};
  text-decoration: ${(props) => props.underline ? 'underline' : "none"};
  
  ${(props) => props.vertical_margin ? 'margin-top: ' + props.vertical_margin + ';' : ''}
  ${(props) => props.vertical_margin ? 'margin-bottom: ' + props.vertical_margin + ';' : ''}  
  ${(props) => props.horizontal_margin ? "margin-left: " + props.horizontal_margin + ';' : ""}
  ${(props) => props.horizontal_margin ? "margin-right: " + props.horizontal_margin + ';' : ""}
  
  ${(props) => (props.top ? "margin-top: " + props.top + "px;" : "")}
  ${(props) => (props.bottom ? "margin-bottom: " + props.bottom + "px;" : "")}
  
  ${(props) => (props.left ? "margin-left: " + props.left + "px;" : "")}
  ${(props) => (props.right ? "margin-right " + props.right + "px;" : "")}
  ${(props) => overflow(props.overflow)}

  text-decoration: ${(props) => props.decoration ?? "none"};
  line-height: ${(props) => props.line_height ?? 1};
  ${props => props.align && `text-align: ${props.align}`}
  
  ${props => props.flex_center ? 'display: flex; align-items: center;' : ''}
`;

function Texts({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
}

const validPx = (props, propName, componentName) => {
  if (props[propName] && !/\d+px$/.test(props[propName])) {
    return new Error(
      "Invalid prop `" +
      propName +
      "` supplied to" +
      " `" +
      componentName +
      "`. Validation failed."
    );
  }
};

Texts.propTypes = {
  size: validPx,
  vertical_margin: PropTypes.string,
  horizontal_margin: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.number,
  cursor: PropTypes.string,
  align: PropTypes.string,
  display: PropTypes.string,
  decoration: PropTypes.string,
  overflow: PropTypes.string,
  max_width: PropTypes.string,
  top: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,

  flex_center: PropTypes.bool,
  line_height: PropTypes.number,
};
export default Texts;
