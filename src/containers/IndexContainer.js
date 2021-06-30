import Animation from "components/wot/Animation";
import WotOverlay from "overlays/Wot";
import React from 'react';

export default function IndexContainer({ ...props }) {
  return (
    <WotOverlay {...props} full>
      <Animation />
    </WotOverlay>
  );
}
