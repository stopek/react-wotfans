import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Content = styled.div`
  width: 100% !important;
  height: ${props => props?.height}px !important;
  position: relative;
  overflow: hidden;
`;

const Map = styled(ReactPlayer)`
  width: 100% !important;
  height: 100% !important;
  z-index: 3;

  video {
    object-fit: cover;
  }
`;

export default function MapPreview({ video, height = 300, autoplay = true, loop = true, ...props }) {
  video = process.env.REACT_APP_DATA_URL + video;

  const webm = video + '.webm';
  const mp4 = video + '_1.mp4';

  return (
    <Content height={height}>
      <Map
        playing={autoplay}
        muted={true}
        controls={false}
        playsinline={autoplay}
        loop={loop}
        url={[
          { src: mp4, type: 'video/mp4' },
          { src: webm, type: 'video/webm' },
        ]}
        {...props}
      />
    </Content>
  );
}
