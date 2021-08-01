import { useAppDispatch, useAppSelector } from "app/hooks";
import { backgroundByType, MessageTypes, prepareMessages } from "helpers/flashHelper";
import React from "react";
import { FormattedMessage } from "react-intl";
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
  0% {
    bottom: 15px;
    opacity: 0;
  }
  100% {
    bottom: 0;
    opacity: 1;
  }
`;

const Message = styled.div<{ type: MessageTypes }>`
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
  const messages = useAppSelector(flashMessages);
  const dispatch = useAppDispatch();

  const messages_list = prepareMessages(dispatch, messages).map((item) => {
    return (
      <Message
        key={item.id}
        type={item.type}
        data-id={item.id}
        // onLoad={item.remove()}
      >
        {!!item.display_message && <FormattedMessage id={item.display_message} />}
      </Message>
    );
  });

  return (
    <Messages>{messages_list}</Messages>
  );
};
