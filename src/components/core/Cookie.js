import { TEXT_PAGE_URL } from "app/routes";
import ButtonInput from "components/ui/input/ButtonInput";
import fillRoute from "helpers/fillRoute";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useHistory } from "react-router";
import styled, { css, keyframes } from "styled-components";
import { COLOR_TEXT_DARK, COLOR_THEME } from "styles/colors";

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

const CookieBox = styled.div`
  background: white;
  padding: 15px;
  border-top-left-radius: 20px;
  position: fixed;
  width: 100%;
  z-index: 2000;
  font-size: 16px;
  color: ${COLOR_TEXT_DARK};
  line-height: 1.5;
  bottom: -100%;
  max-width: 600px;
  right: 0;
  box-shadow: 17px 23px 29px black;
  transition: bottom .1s ease-in-out;
  ${props => props.animation}
`;

const TextContent = styled.div`
  margin-bottom: 15px;
  text-align: justify;
  min-height: 105px;
`;

const PolicyUrl = styled.span`
  cursor: pointer;
  color: ${COLOR_THEME};
  font-weight: 700;
`;

export default function Cookie() {
  const history = useHistory();
  const accepted = Cookies.get('accept_cookie') || null;
  const [accept, setAccept] = useState(false);

  const handleAccept = () => {
    setAccept(true);
    Cookies.set('accept_cookie', true);
  }

  if (accepted) {
    return null;
  }

  return (
    <CookieBox animation={!accepted && !accept && slideUpCss}>
      <TextContent>
        Używamy ciasteczek i innych technologii, aby dostosowywać reklamy, mierzyć ich skuteczność oraz poprawiać działanie naszego serwisu.
      </TextContent>

      <ButtonInput label="Wyrażam zgodę" onClick={handleAccept} />
    </CookieBox>
  );
};