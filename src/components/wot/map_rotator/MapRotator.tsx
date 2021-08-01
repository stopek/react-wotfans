import { Adsense } from "@ctrl/react-adsense";
import { Grid } from "@material-ui/core";
import RangeInput from "components/ui/input/RangeInput";
import SelectInput from "components/ui/input/SelectInput";
import Clock from "components/wot/Clock";
import DarkBox from "components/wot/DarkBox";
import DiscordLink from "components/wot/DiscordLink";
import MapRotatorList from "components/wot/map_rotator/MapRotatorList";
import ThanksBox from "components/wot/ThanksBox";
import { addSeconds, differenceInSeconds } from "date-fns";
import { mapsIntervalsList, mapsResultList } from "helpers/rotator";
import { getUniqueByKeyMulti, sortByKeyMulti } from "helpers/user";
import { MapMapListInterface } from "interfaces/MapMapListInterface";
import { SelectItemInterface } from "interfaces/SelectItemInterface";
import PropTypes from 'prop-types';
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

type MapRotatorType = {
  limit: number[],
  server_date: Date,
  user_date: Date,
  maps: MapMapListInterface,
  cycle: number,
  tier: string,
  filter?: boolean,
  ads?: boolean
}

function MapRotator({ limit, server_date, user_date, maps, cycle, tier, filter, ads }: MapRotatorType) {
  const mapsList: SelectItemInterface[] = maps.map((map) => {
    return {
      label: map.map.name,
      value: map.map.id
    };
  });

  const sortedMaps = sortByKeyMulti<SelectItemInterface[]>(mapsList, 'label');
  const filtersMapsList = getUniqueByKeyMulti<SelectItemInterface[]>(sortedMaps, 'value');

  const [date, setDate] = useState(new Date());
  const [maps_ranges, setMapsRanges] = useState<number[] | number>(limit);
  const [filter_maps, setFilterMaps] = useState([]);

  const start_current_difference = differenceInSeconds(date, user_date);
  const date_server = addSeconds(server_date, start_current_difference);
  const result_maps = mapsIntervalsList(maps, cycle, date_server);
  const output_maps = mapsResultList(date_server, result_maps, Array.isArray(maps_ranges) ? maps_ranges : [1, 1]);
  const seconds_difference = differenceInSeconds(date, date_server);

  return (
    <>
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
                handleChange={(value) => setFilterMaps(value)}
                multiple={true}
                render_checkbox={true}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <RangeInput
                handleChange={(value) => setMapsRanges(value)}
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
        diff_seconds={seconds_difference}
        filter_maps={filter_maps}
        date={date}
        cycle_seconds={cycle * 60}
        advanced={filter}
      />

      <ThanksBox>
        <>
          Generation algorithm created by <strong>wzorek2000</strong> with a lot of help
          from <strong>Z__Buta_Wjezdzam</strong> & <strong>kkpb17</strong>.
          Do you have any question for him? <DiscordLink username={`wzorek2000#8053`} />
        </>
      </ThanksBox>

      {tier?.length > 0 && (
        <Tier>
          {tier}
        </Tier>
      )}

      {ads && (
        <Adsense
          client="ca-pub-2424219527824461"
          slot="9531954360"
          style={{ display: 'block' }}
          format="auto"
          responsive=""
        />
      )}
    </>
  );
}

MapRotator.propTypes = {
  server_date: PropTypes.instanceOf(Date).isRequired,
  user_date: PropTypes.instanceOf(Date).isRequired,
  maps: PropTypes.array.isRequired,
  limit: PropTypes.arrayOf(PropTypes.number),
  tier: PropTypes.string,
  cycle: PropTypes.number,
  ads: PropTypes.bool,
  filter: PropTypes.bool
}

MapRotator.defaultProps = {
  limit: [1, 1],
  cycle: 4,
  ads: false,
  filter: false
}

export default MapRotator;
