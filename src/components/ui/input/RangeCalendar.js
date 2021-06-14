import { pl } from "date-fns/locale";
import React from "react";
import DateRange from "react-date-range/dist/components/DateRange";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import styled from "styled-components";

const CustomDateRange = styled(DateRange)`
  .rdrDay {
    height: 3.5em;
  }
  .rdrEndEdge {
    border-top-right-radius: 2.5em;
    border-bottom-right-radius: 2.5em;
  }
  
  .rdrStartEdge {
    border-top-left-radius: 2.5em;
    border-bottom-left-radius: 2.5em;
  }
  
  .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span, 
  .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, 
  .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span, 
  .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span {
    color: black;
  }
`;

export default function RangeCalendar({ date, calendar = null, setCalendar = null }) {
  return (
    <CustomDateRange
      showSelectionPreview={true}
      editableDateInputs={false}
      moveRangeOnFirstSelection={false}
      locale={pl}
      showPreview={false}
      months={1}
      showDateDisplay={false}
      showMonthAndYearPickers={false}
      showMonthArrow={false}
      shownDate={date}
      onChange={item => setCalendar({ ...calendar, ...item })}
      ranges={[calendar.selection1, calendar.selection2]}
    />
  );
}