import ButtonInput from "components/ui/input/ButtonInput";
import React, { useState } from "react";
import cookie from 'react-cookies'
import { FormattedMessage } from "react-intl";
import styled, { css, keyframes } from "styled-components";
import { COLOR_GREY_DARK_3 } from "styles/colors";

const slidUp = keyframes`
  0% {
    bottom: -100%;
  }

  100% {
    bottom: 0;
  }
`;

const slideUpCss = css`
  animation: ${slidUp} forwards .6s;
`;

const CookieBox = styled.div<{ animation?: boolean }>`
  background: ${COLOR_GREY_DARK_3};
  padding: 15px;
  position: fixed;
  width: 100%;
  z-index: 2000;
  font-size: 16px;
  color: white;
  line-height: 1.5;
  bottom: -100%;
  max-width: 600px;
  right: 0;
  box-shadow: 17px 23px 29px black;
  transition: bottom .1s ease-in-out;
  ${props => props.animation && slideUpCss}
`;

const TextContent = styled.div`
  margin-bottom: 15px;
  text-align: justify;
`;

export default function Cookie() {
  const accepted = cookie.load('accept_cookie') || null;
  const [accept, setAccept] = useState(false);

  const handleAccept = () => {
    setAccept(true);
    cookie.save('accept_cookie', Number(true), {
      path: '/'
    });
  }

  if (accepted) {
    return null;
  }

  return (
    <CookieBox animation={!accepted && !accept}>
      <TextContent>
        <FormattedMessage id={`cookies.text`} />
      </TextContent>

      <ButtonInput
        label={`accept.cookies`}
        onClick={handleAccept}
      />
    </CookieBox>
  );
};
