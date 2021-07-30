import { format } from "date-fns";
import PropTypes from 'prop-types';
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

export interface DateInterface {
  date: Date,
  setDate: (date: Date) => void
}

function Clock({ setDate, date }: DateInterface) {
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

Clock.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  setDate: PropTypes.func.isRequired
}

export default Clock;
