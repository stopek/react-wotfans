import { Adsense } from "@ctrl/react-adsense";
import { Grid } from "@material-ui/core";
import RangeInput from "components/ui/input/RangeInput";
import SelectInput from "components/ui/input/SelectInput";
import Clock from "components/wot/Clock";
import DarkBox from "components/wot/DarkBox";
import DiscordLink from "components/wot/DiscordLink";
import MapRotatorList from "components/wot/map_rotator/MapRotatorList";
import ThanksBox from "components/wot/ThanksBox";
import { addHours, getHours } from "date-fns";
import { copyDateIS, mapsIntervalsList, mapsResultList } from "helpers/rotator";
import { getUniqueByKeyMulti, sortByKeyMulti } from "helpers/user";
import React, { useState } from "react";
import styled from "styled-components";
import { COLOR_TEXT_DARK } from "styles/colors";

const Tier = styled.div`
  color: ${COLOR_TEXT_DARK};
  font-size: 40px;
  display: table;
  font-weight: 700;
  margin: auto;
`;

const Rotator = styled.div`
  width: 100%;
`;

export default function MapRotator(
  {
    limit = [1, 5],
    server_date = '',
    user_date = '',
    maps = {},
    cycle = 4,
    tier = '',
    filter = false,
    ads = false
  }
) {
  //aktualna data użytkownika
  const [date, setDate] = useState(new Date());
  const diffHours = getHours(user_date) - getHours(server_date);
  const [maps_ranges, setMapsRanges] = useState(limit);
  const [filter_maps, setFilterMaps] = useState([]);

  server_date = addHours(server_date, getHours(date) - getHours(user_date));

  //aktualna data serwera korygowana o minuty/sekundy od użytkownika.
  const server_date_correct = copyDateIS(date, server_date);

  //lista map w oparciu o datę serwera
  const result_maps = mapsIntervalsList(maps, cycle, server_date);

  //lista map w oparciu skorygowany czas serwera
  const output_maps = mapsResultList(server_date_correct, result_maps, maps_ranges);

  const filtersMapsList = getUniqueByKeyMulti(sortByKeyMulti(maps.map((map) => {
    return {
      label: map.map.name,
      value: map.map.id
    };
  }), 'label'), 'value');

  return (
    <Rotator>
      <Clock
        date={date}
        setDate={setDate}
      />

      {filter && (
        <DarkBox>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <SelectInput
                current={filter_maps}
                variant={`standard`}
                translation={`maps.list`}
                options={filtersMapsList}
                onChange={(value) => setFilterMaps(value)}
                multiple={true}
                render_checkbox={true}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <RangeInput
                onChange={(value) => setMapsRanges(value)}
                value={maps_ranges}
                step={1}
                min={1}
                max={50}
                label={`limit`}
              />
            </Grid>
          </Grid>
        </DarkBox>
      )}

      <MapRotatorList
        list={output_maps}
        diff_hours={diffHours}
        filter_maps={filter_maps}
      />

      <ThanksBox>
        Generation algorithm created by <strong>wzorek2000</strong> with a lot of help
        from <strong>Z__Buta_Wjezdzam</strong> & <strong>kkpb17</strong>.
        Do you have any question for him? <DiscordLink username={`wzorek2000#8053`} />
      </ThanksBox>

      <Tier>
        {tier}
      </Tier>

      {ads && (
        <Adsense
          client="ca-pub-2424219527824461"
          slot="9531954360"
          style={{ display: 'block' }}
          format="auto"
          responsive=""
        />
      )}
    </Rotator>
  );
}
