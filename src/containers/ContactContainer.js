import SimpleText from "components/wot/SimpleText";
import WotOverlay from "overlays/Wot";
import React from 'react';
import { FormattedMessage } from "react-intl";
import { Header } from "styles/GlobalStyled";

export default function ContactContainer({ ...props }) {
  return (
    <WotOverlay {...props}>
      <Header>
        <FormattedMessage id={`contact`} />
      </Header>

      <SimpleText>
        If you have any questions, suggestions for changes, ideas for further development or if you want to help: <br/>
        - email: <strong>wotfans.online@gmail.com</strong> <br/>
        - ps user: <strong>wotfans-online</strong> <br/>
        - facebook: <strong>fb.me/wotfansonline</strong> <br/>
      </SimpleText>
    </WotOverlay>
  );
}
