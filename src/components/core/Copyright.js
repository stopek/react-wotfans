import React from "react";
import styled from "styled-components";

const Text = styled.div`
  font-size: 14px;
  color: #6c6a6a;
  text-align: center;
  width: 100%;
  position: relative;
  padding: 25px 10px;
  max-width: 800px;
  display: table;
  margin: auto;
`;

export default function Copyright() {
  return (
    <Text>
      Wargaming API testing <br />
      © 2021 wotfans.online - All rights reserved. <br /><br />

      Statistical data provided by Wargaming API.<br />
      Images of in-game elements are under ownership of Wargaming.

      "Wargaming.net" and "World of Tanks", and their respective logos are trademarks or registered trademarks of
      Wargaming in the USA and other countries. <br />

      The "PS" Family logo is a registered trademark and "PS4" is a trademark
      of Sony Interactive Entertainment Inc. <br />

      "Xbox" and the Xbox logos are trademarks of the Microsoft group of
      companies and are used under license from Microsoft.
    </Text>
  );
}