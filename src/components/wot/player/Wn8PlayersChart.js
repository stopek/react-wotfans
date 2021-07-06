import { ResponsiveBar } from '@nivo/bar'
import { nivoTheme, wn8Ranges } from "app/settings";
import PlayerWnTooltip from "components/wot/player/chart/PlayerWnTooltip";
import { sortByNumberMulti } from "helpers/user";
import React from "react";
import { injectIntl } from "react-intl";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
`;

function Wn8PlayersChart({ players = [], intl }) {
  let colors = {};
  let summary = {};
  const totalPlayers = players?.length || 0;

  wn8Ranges.forEach((wn) => {
    colors[intl.formatMessage({ id: wn.translation })] = wn.background;
  });

  Object.values(players).forEach((player) => {
    let found = false;

    sortByNumberMulti(wn8Ranges, 'value').forEach(({ value, translation }) => {
      const translated = intl.formatMessage({ id: translation });

      if (!summary[translated]) {
        summary[translated] = 0;
      }

      if (player.wn8 >= value && !found) {
        summary[translated] += 1;
        found = true;
      }
    });
  })

  const keys = Object.keys(colors).reverse();
  const data = keys.map((translated) => {
    return {
      'wn.name': translated,
      [translated]: summary[translated]
    }
  });

  return (
    <Content>
      <ResponsiveBar
        theme={nivoTheme}
        tooltip={({ id, value, color }) => (
          <PlayerWnTooltip data={{ id, value, color, totalPlayers: totalPlayers }} />
        )}
        data={data}
        keys={keys}
        indexBy="wn.name"
        margin={{ top: 10, right: 200, bottom: 30, left: 40 }}
        padding={0.3}
        colors={(bar) => colors[bar.id] ?? 'black'}
        colorBy="indexValue"
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </Content>
  );
}

export default injectIntl(Wn8PlayersChart);
