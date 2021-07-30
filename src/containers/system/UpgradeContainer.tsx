import image from "assets/images/break.jpg";
import React from 'react';
import { COLOR_DARK_3 } from "styles/colors";

export default function UpgradeContainer({ ...props }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: COLOR_DARK_3,
      justifyContent: 'center'
    }} {...props}>
      <div style={{
        background: `url(${image}) no-repeat center center`,
        width: '100%',
        height: '100%'
      }} />
    </div>
  );
}
