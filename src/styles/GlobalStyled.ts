import hexToRgbA from "helpers/hexToRgbA";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";
import { COLOR_DARK, COLOR_DARK_2, COLOR_TEXT, COLOR_TEXT_ON_THEME, COLOR_THEME } from "styles/colors";

export const LargeHeader = styled.div`
  font-size: 25px;
  line-height: 1.2;
  font-weight: 700;
  margin: 0 0 5px 0;
  position: relative;
  color: ${COLOR_TEXT};

  @media ${breakpoint.md} {
    font-size: 45px;
  }

  small {
    display: block;
    font-size: 15px;
  }
`;


export const Wn8BarContent = styled.div`
  font-size: 20px;
  margin: 10px 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media ${breakpoint.lg} {
    font-size: 30px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    right: 0;
  }
`;


export const SimpleTable = styled.table`
  margin: 15px 0;
  width: 100%;
  border-collapse: collapse;
`;

export const TableThead = styled.thead`
  background: ${COLOR_THEME} !important;
`;

export const TableTdSmall = styled.td`
  padding: 5px 15px;
  color: ${COLOR_TEXT_ON_THEME};
`;

export const FitTableTd = styled(TableTdSmall)`
  width: 0;
  white-space: nowrap;

  small {
    display: block;
    font-size: 70%;
  }
`;

export const TableTr = styled.tr`
  ${props => !!props?.disable && `opacity: 0.2;`}
`;

export const TableTbody = styled.tbody`
  tr {
    background: ${COLOR_DARK};

    &:nth-child(2n + 1) {
      background: ${COLOR_DARK_2};
    }

    &:hover {
      background: ${hexToRgbA(COLOR_DARK_2, 0.8)};
      opacity: 1;
    }

    td {
      color: ${COLOR_TEXT};
    }
  }
`;

