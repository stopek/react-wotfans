import { Box } from "@material-ui/core";
import { MAIN_URL } from "app/routes";
import ButtonInput from "components/ui/input/ButtonInput";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { COLOR_RED, RADIUS } from "styles/colors";

const ErrorContent = styled.div`
  margin: 5px 0 55px 0;
  color: white;
  background: ${COLOR_RED};
  padding: 10px;
  border-radius: ${RADIUS};
`;

export default function Error({ message = 'Page Not Found', ...props }) {
  const history = useHistory();

  return (
    <ErrorContent>
      {message}

      <Box>
        {props?.reload ? (
          <FormattedMessage id="try-again">
            {translation => (<ButtonInput onClick={() => window.location.reload(false)} label={translation} />)}
          </FormattedMessage>
        ) : (
          <FormattedMessage id="go-to-homepage">
            {translation => (<ButtonInput onClick={() => history.push(MAIN_URL)} label={translation} />)}
          </FormattedMessage>
        )}
      </Box>
    </ErrorContent>
  );
};