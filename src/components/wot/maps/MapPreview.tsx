import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Content = styled.div<{ height: number }>`
  width: 100% !important;
  height: ${props => props?.height}px !important;
  position: relative;
  overflow: hidden;
`;

const Map = styled.div<{ poster: string }>`
  width: 100% !important;
  height: 100% !important;
  z-index: 3;
  position: relative;
  background: url(${props => props?.poster}) no-repeat center center;
  background-size: cover;

  video {
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
  }
`;

type MapPreviewType = {
  video: string,
  height: number,
  autoplay: boolean,
  loop: boolean
} & React.HTMLAttributes<HTMLVideoElement>;

function MapPreview({ video, height, autoplay, loop, ...props }: MapPreviewType) {
  video = process.env.REACT_APP_DATA_URL + video;

  const mp4 = video + '_1.mp4';
  const poster = video + '.jpg';

  return (
    <Content height={height}>
      <Map poster={poster}>
        {autoplay && (
          <video
            muted={true}
            controls={false}
            playsInline={true}
            loop={loop}
            autoPlay={autoplay}
            {...props}
          >
            <source src={mp4} type={'video/mp4'} />
            Your browser does not support the video tag.
          </video>
        )}
      </Map>
    </Content>
  );
}

MapPreview.propTypes = {
  video: PropTypes.string.isRequired,
  height: PropTypes.number,
  autoplay: PropTypes.bool,
  loop: PropTypes.bool
}

MapPreview.defaultProps = {
  height: 300,
  autoplay: false,
  loop: false
}

export default MapPreview;
