import Error from "components/core/Error";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from 'styled-components';
import { RADIUS } from "styles/colors";
import logo from "assets/images/logo.png";

const NotFoundBoxContainer = styled.div`
  padding: 55px;
  border-radius: ${RADIUS};
  max-width: 1100px;
  display: table;
  margin: auto;
  width: 100%;
  text-align: center;
`;

const Image = styled.img`

`;

export default function NotFoundBox() {
  return (
    <NotFoundBoxContainer>
      <Image src={logo} />
      <FormattedMessage id="not-found">
        {translation => (<Error message={translation} />)}
      </FormattedMessage>
    </NotFoundBoxContainer>
  );
}