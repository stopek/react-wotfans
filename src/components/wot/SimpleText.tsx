import { ChildrenInterface } from "interfaces/ChildrenInterface";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { COLOR_TEXT, COLOR_THEME } from "styles/colors";

const Text = styled.div<{ full?: boolean }>`
  color: ${COLOR_TEXT};
  line-height: 1.7;
  ${props => !props?.full && `max-width: 700px;`}
  display: block;
  width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;

  strong {
    font-weight: 900;
  }

  a {
    color: ${COLOR_THEME};
    text-decoration: none;
  }

  span {
    display: block;
    font-size: 15px;
  }

  p:first-child {
    margin-top: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

function SimpleText({ children, ...props }: ChildrenInterface) {
  return (
    <Text {...props}>
      {children}
    </Text>
  );
}

SimpleText.propTypes = {
  children: PropTypes.element
}

export default SimpleText;
