import Animation from "components/wot/Animation";
import WotOverlay from "overlays/Wot";
import React from 'react';

function IndexContainer(...props) {
  return (
    <WotOverlay title={`Strona główna`} {...props} full>
      <Animation />
    </WotOverlay>
  );
}

export default IndexContainer;