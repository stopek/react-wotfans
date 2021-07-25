import { MAIN_URL } from "app/routes";
import ButtonInput from "components/ui/input/ButtonInput";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { COLOR_RED, RADIUS } from "styles/colors";

const ErrorContent = styled.div`
  color: white;
  padding: 10px;
  border-radius: ${RADIUS};
  line-height: 1;
  background: rgba(0, 0, 0, 0.2);
`;

const Boxes = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 900;
  margin: 0 0 5px 0;
  color: ${COLOR_RED};
  text-transform: uppercase;
`

export default function Error({ message = '', surprise = 'ups',  ...props }) {
  const history = useHistory();

  return (
    <ErrorContent {...props}>
      {surprise?.length > 0 && (
        <H1>
          <FormattedMessage id={surprise} />...
        </H1>
      )}

      {message?.length > 0 && (
        <FormattedMessage id={message} />
      )}

      <Boxes>
        <ButtonInput onClick={() => window.location.reload(false)} label={`try-again`} />
        <ButtonInput onClick={() => history.push(MAIN_URL)} label={`go-to-homepage`} />
      </Boxes>
    </ErrorContent>
  );
};
