import Clock from "components/wot/Clock";
import DiscordLink from "components/wot/DiscordLink";
import MapRotatorList from "components/wot/map_rotator/MapRotatorList";
import ThanksBox from "components/wot/ThanksBox";
import { addHours, differenceInHours } from "date-fns";
import { mapsIntervalsList, mapsResultList } from "helpers/rotator";
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

export default function MapRotator({ limit = [1, 1], server_date = new Date(), maps = {}, cycle = 4, tier = '' }) {
  const [date, setDate] = useState(new Date());
  const result_maps = mapsIntervalsList(maps, cycle, server_date);

  server_date = addHours(date, differenceInHours(server_date, date));

  return (
    <Rotator>
      <Clock
        date={date}
        setDate={setDate}
      />

      <MapRotatorList
        list={mapsResultList(server_date, result_maps, limit)}
        server_date={server_date}
        date={date}
      />

      <ThanksBox>
        Generation algorithm created by <strong>wzorek2000</strong> with a lot of help
        from <strong>Z__Buta_Wjezdzam</strong> & <strong>kkpb17</strong>.
        Do you have any question for him? <DiscordLink username={`wzorek2000#8053`} />
      </ThanksBox>

      <Tier>
        {tier}
      </Tier>
    </Rotator>
  );
}
