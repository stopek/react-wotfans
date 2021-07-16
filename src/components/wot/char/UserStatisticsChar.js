import { ResponsiveLine } from '@nivo/line'
import { nivoTheme } from "app/settings";
import { format } from "date-fns";
import { date_format, date_parse } from "helpers/date";
import { getDateLocale } from "helpers/languages";
import { valueFormat } from "helpers/priceFormat";
import React from "react";
import { useSelector } from "react-redux";
import { selectedLanguage } from "reducers/languageSlice";
import styled from "styled-components";
import { COLOR_THEME } from "styles/colors";

const Content = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
`;

export default function UserStatisticsChar({ raw = [], data = {} }) {
  let data_array = Object.assign({}, data);
  const language = useSelector(selectedLanguage);

  Object.values(raw).forEach((history, k) => {
    data_array.data.push({
      x: date_format(date_parse(history.created_at, 'yyyy-MM-dd HH:mm:ss'), 'yyyy-MM-dd'),
      y: history[data_array.key] > 0 ? valueFormat(history[data_array.key], 5) : null
    });
  });

  if (!data_array.data?.length) {
    data_array.data = [{x: format(new Date(), 'yyyy-MM-dd'), y: 0}];
  }

  return (
    <Content>
      <ResponsiveLine
        data={[data_array]}
        theme={nivoTheme}
        margin={{ top: 30, right: 10, bottom: 50, left: 60 }}
        xScale={{
          type: 'time',
          format: '%Y-%m-%d',
          useUTC: false,
          precision: 'day',
        }}
        colors={COLOR_THEME}
        xFormat="time:%Y-%m-%d"
        yScale={{
          type: 'linear',
          min: 'auto', max: 'auto',
          stacked: true, reverse: false
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          format: (value) => format(new Date(value), 'do MMM', { locale: getDateLocale(language) }),
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -35,
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        enableSlices={'y'}
      />
    </Content>
  );
}
