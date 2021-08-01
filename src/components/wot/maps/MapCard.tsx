import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import ButtonInput from "components/ui/input/ButtonInput";
import MapPreview from "components/wot/maps/MapPreview";
import { MapInterface } from "interfaces/MapInterface";
import PropTypes from "prop-types";
import { MapPropType } from "proptypes/MapPropType";
import React, { useState } from 'react';
import styled from "styled-components";

const Card = styled.div`
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 10;
  align-items: center;
`;

const Name = styled.div`
  width: 100%;
  padding: 5px 10px;
  font-size: 20px;
  color: white;
`;

const Button = styled.div`
  padding: 5px;
`;

type MapCardType = {
  map: MapInterface,
  height: number
}

function MapCard({ map, height }: MapCardType) {
  const [preview, setPreview] = useState(false);

  return (
    <Card>
      <Header>
        <Name>
          {map.name}
        </Name>

        {!!map.video && (
          <Button>
            <ButtonInput
              onClick={() => setPreview(!preview)}
              icon={preview ? <StopRoundedIcon /> : <PlayArrowRoundedIcon />}
            />
          </Button>
        )}
      </Header>

      <MapPreview
        video={map.video}
        autoplay={preview}
        loop={false}
        onEnded={() => setPreview(false)}
        height={height}
      />
    </Card>
  );
}

MapCard.propTypes = {
  map: MapPropType,
  height: PropTypes.number
}

MapCard.defaultProps = {
  height: 300
}

export default MapCard;
