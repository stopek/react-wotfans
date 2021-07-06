import React from "react";
import styled from "styled-components";
import { COLOR_TEXT, COLOR_THEME } from "styles/colors";
import FavoriteIcon from '@material-ui/icons/Favorite';
const Content = styled.div`
  font-size: 13px;
  line-height: 1.6;
  color: ${COLOR_TEXT};
  margin-bottom: 15px;
  vertical-align: center;
  max-width: 700px;
  
  span {
    color: #5c6bc0;
    font-weight: 600;
    font-size: 14px;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-bottom: -7px;
    color: ${COLOR_THEME};
    margin-right: 5px;
  }

  strong, a {
    text-decoration: none; 
    margin: 0 5px;
    color: ${COLOR_THEME};
  }
`;

export default function ThanksBox({ children }) {
  return (
    <Content>
      <FavoriteIcon />
      {children}
    </Content>
  );
}
