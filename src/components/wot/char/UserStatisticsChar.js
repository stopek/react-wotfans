import { ResponsiveLine } from '@nivo/line'
import { nivoTheme } from "styles/nivoTheme";
import { format } from "date-fns";
import { date_parse } from "helpers/date";
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
`;

export default function UserStatisticsChar({ raw = [], data = {} }) {
  let data_array = Object.assign({}, data);
  const language = useSelector(selectedLanguage);

  Object.values(raw).forEach((history, k) => {
    data_array.data.push({
      x: date_parse(history.created_at, 'yyyy-MM-dd HH:mm:ss'),
      y: history[data_array.key] > 0 ? valueFormat(history[data_array.key], 5) : null
    });
  });

  if (!data_array.data?.length) {
    data_array.data = [{ x: new Date(), y: 0 }];
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
        sliceTooltip={({ slice }) => {
          return (
            <>test?</>
          )
        }}
        enableSlices="x"
        colors={COLOR_THEME}
        xFormat="time:%Y-%m-%d"
        yScale={{
          type: 'linear',
          min: 'auto', max: 'auto',
          stacked: true, reverse: false
        }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        enableArea={true}
        axisBottom={{
          tickValues: 'every day',
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
          tickRotation: -35,
        }}
        pointSize={10}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        useMesh={true}
      />
    </Content>
  );
}
