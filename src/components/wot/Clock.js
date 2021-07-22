import { format } from "date-fns";
import React, { useEffect } from "react";
import styled from "styled-components";
import { COLOR_DARK_2, COLOR_TEXT, RADIUS } from "styles/colors";

const Time = styled.div`
  background: ${COLOR_DARK_2};
  font-size: 35px;
  display: table;
  line-height: 1;
  padding: 5px 25px;
  border-radius: ${RADIUS};
  font-weight: 700;
  margin: 0 auto 15px auto;
  color: ${COLOR_TEXT};
`;

export default function Clock({ setDate, date }) {
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, [date, setDate]);

  return (
    <Time>
      {format(date, 'HH:mm:ss')}
    </Time>
  );
}
