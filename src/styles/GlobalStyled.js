import styled from "styled-components";
import { COLOR_THEME } from "styles/colors";

export const Header = styled.h2`
  color: white;
  font-size: 25px;
  position: relative;
  display: table;
  margin: 55px 0;
  
  ${props => props?.up && `margin-top: 0;`}
  
  &:after {
    display: block;
    width: 50%;
    position: absolute;
    bottom: -5px;
    height: 2px;
    background: ${COLOR_THEME};
    content: '';
  }

  small {
    display: block;
    font-size: 60%;
  }
`;

export const LargeHeader = styled.div`
  font-size: 45px;
  line-height: 1.2;
  font-weight: 700;
  margin: 45px 0;
  position: relative;
  color: white;

  small {
    display: block;
    font-size: 15px;
  }
`;