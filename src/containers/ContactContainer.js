import UnderlineHeader from "components/wot/headers/UnderlineHeader";
import SimpleText from "components/wot/SimpleText";
import WotOverlay from "overlays/Wot";
import React from 'react';

export default function ContactContainer({ ...props }) {
  return (
    <WotOverlay {...props}>
      <UnderlineHeader translation={`contact`} />

      <SimpleText>
        If you have any questions, suggestions for changes, ideas for further development or if you want to help: <br />
        - email: <strong><a href={`mailto: wotfans.online@gmail.com`}>wotfans.online@gmail.com</a></strong> <br />
        - ps user: <strong>wotfans-online</strong> <br />
        - facebook: <strong><a href={`https://fb.me/wotfansonline`} target={`_blank`} rel={`nofollow`}>fb.me/wotfansonline</a></strong> <br />
      </SimpleText>
    </WotOverlay>
  );
}
