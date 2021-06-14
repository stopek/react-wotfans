import { backgroundByType, prepareMessages } from "helpers/flashHelper";
import nl2br from "helpers/nl2br";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { flashMessages } from "reducers/flashSlice";
import styled, { keyframes } from "styled-components";
import { RADIUS } from "styles/colors";

const Messages = styled.div`
  position: fixed;
  max-width: 1000px;
  width: 100%;
  display: table;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  text-align: center;
`;

const slideDownAnimation = keyframes`
 0% { bottom: 15px; opacity: 0; }
 100% { bottom: 0; opacity: 1; }
`;

const Message = styled.div`
  background: ${(props) => backgroundByType(props?.type)};
  color: white;
  font-weight: 300;
  display: table;
  font-size: 15px;
  clear: both;
  margin: 5px auto;
  padding: 15px 35px;
  animation-name: ${slideDownAnimation};
  animation-duration: 1s;
  animation-iteration-count: 1;
  position: relative;
  border-radius: ${RADIUS};
`;

export default function Flash() {
  const messages = useSelector(flashMessages);
  const dispatch = useDispatch();

  const messages_list = prepareMessages(dispatch, messages).map((item) => {
    return (
      <Message key={item.id} type={item.type} data-id={item.id} onLoad={item.remove()}>
        {item.display_message && nl2br(item.display_message)}
      </Message>
    );
  });

  return (
    <Messages>{messages_list}</Messages>
  );
};