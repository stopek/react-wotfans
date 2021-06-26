import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";
import { COLOR_DARK_2, COLOR_GREY_DARK_3, COLOR_TEXT_ON_THEME, COLOR_THEME } from "styles/colors";

export const Header = styled.h2`
  color: white;
  font-size: 25px;
  position: relative;
  display: table;
  margin: 55px 0;

  ${props => props?.up && `margin-top: 0;`}
  ${props => props?.down && `margin-bottom: 15px;`}
  
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


export const Wn8BarContent = styled.div`
  font-size: 30px;
  margin: 10px 0;

  @media ${breakpoint.lg} {
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    right: 0;
  }
`;


export const SimpleTable = styled.table`
  margin: 15px 0;
  width: 100%;
`;

export const TableTdSmall = styled.td`
  padding: 5px 15px;
  color: ${COLOR_TEXT_ON_THEME};
`;

export const FitTableTd = styled(TableTdSmall)`
  width: 0;
  white-space: nowrap;
`;

export const TableThead = styled.thead`
  background: ${COLOR_THEME};
`;

export const TableTbody = styled.tbody`
  tr {
    &:nth-child(2n + 1) {
      background: ${COLOR_DARK_2};
    }

    &:hover {
      background: ${COLOR_GREY_DARK_3};
    }
  }
`;
