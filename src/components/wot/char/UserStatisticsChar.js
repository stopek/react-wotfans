import { ResponsiveLine } from "@nivo/line";
import { date_format, date_parse } from "helpers/date";
import React from "react";

export default function UserStatisticsChar({ raw = [] }) {
  const theme = {
    "textColor": "#ffffff",
    "fontSize": 11,
    "axis": {
      domain: {
        line: {
          stroke: 'transparent',
          strokeWidth: 1
        }
      },
      "ticks": {
        "line": {
          "stroke": "#777777",
          "strokeWidth": 1
        }
      }
    },
    crosshair: {
      line: {
        stroke: '#ffffff',
        strokeWidth: 1,
        strokeOpacity: 1,
      },
    },
    "grid": {
      "line": {
        "stroke": "#dddddd",
        "strokeWidth": 1
      }
    }
  };

  let data = [
    { id: "WN8", key: 'wn8', data: [] },
    { id: "WN7", key: 'wn7', data: [] },
    { id: "EFFI", key: 'efficiency', data: [] },
  ];

  data.forEach((item) => {
    Object.values(raw).forEach((history, k) => {
      item.data.push({
        x: date_format(date_parse(history.created_at, 'yyyy-MM-dd HH:mm:ss'), 'yyyy-MM-dd'),
        y: parseFloat(history[item.key])
      });
    });
  });

  return (
    <>
      <ResponsiveLine
        theme={theme}
        data={data}
        margin={{ top: 10, right: 60, bottom: 50, left: 40 }}
        xScale={{
          type: "time",
          format: "%Y-%m-%d",
          precision: "day"
        }}
        yFormat=" >-.2r"
        xFormat="time:%Y-%m-%d"
        enableArea={true}
        useMesh={true}
        isInteractive={true}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false
        }}
        indexBy="date"
        axisTop={null}
        axisRight={null}
        crosshairType="cross"
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          tickValues: 10
        }}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          format: "%Y-%m-%d",
          tickPadding: 5,
          tickRotation: -25,
        }}
        colors={{ scheme: "nivo" }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="y"
        pointLabelYOffset={-12}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 90,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </>
  );
}
