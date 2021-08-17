import { ResponsiveLine, Serie } from "@nivo/line";
import { format } from "date-fns";
import { getDateLocale } from "helpers/languages";
import React from "react";
import { useSelector } from "react-redux";
import { selectedLanguage } from "reducers/languageSlice";
import styled from "styled-components";
import { COLOR_THEME } from "styles/colors";
import { nivoTheme } from "styles/nivoTheme";

const Content = styled.div`
  height: 200px;
`;

interface SimpleDateValueCharInterface {
  data: Serie[]
}

export default function SimpleDateValueChar({ data }: SimpleDateValueCharInterface) {
  const language = useSelector(selectedLanguage);

  const locale = getDateLocale(language);
  const options = locale ? { locale: locale } : {}

  return (
    <Content>
      <ResponsiveLine
        data={data}
        theme={nivoTheme}
        margin={{ top: 0, right: 0, bottom: 50, left: 60 }}
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
          format: (value) => format(new Date(value), 'do MMM', options),
          // orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -35,
        }}
        axisLeft={{
          // orient: 'left',
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
