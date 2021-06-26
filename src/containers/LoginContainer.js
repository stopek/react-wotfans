import { LOGIN_ENDPOINT } from "api/endpoints";
import instance from "api/service";
import { ACCOUNT_URL } from "app/routes";
import ButtonInput from "components/ui/input/ButtonInput";
import { saveToken } from "helpers/cookies";
import { useQuery } from "helpers/useQuery";
import { isLogged } from "helpers/user";
import WotOverlay from "overlays/Wot";
import React, { useEffect } from 'react';
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import { getUser } from "reducers/wotSlice";
import styled from "styled-components";

const Info = styled.div`
  color: white;
  line-height: 1.3;
  padding: 25px 0;

  strong {
    width: 100%;
    display: block;
    font-weight: 700;
  }
`;

export default function LoginContainer({ ...props }) {
  const dispatch = useDispatch();
  const query = useQuery();
  const token = query.get('token');
  const history = useHistory();

  useEffect(() => {
    if (token?.length > 0) {
      saveToken(token);
      instance.defaults.headers.common["X-Auth-Token"] = token;

      const timer = setTimeout(() => {
        dispatch(getUser());

        return history.push(ACCOUNT_URL);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [dispatch]);

  if (isLogged()) {
    return <Redirect to={ACCOUNT_URL} />
  }

  return (
    <WotOverlay {...props}>
      <img
        src={`https://developers.wargaming.net/static/1.12.0/assets/img/header/wg_logo.png`}
        alt=""
      />

      <Info>
        <FormattedMessage id={`login.message.1`} />
        <strong>
          <FormattedMessage id={`login.message.2`} />
        </strong>
      </Info>

      <ButtonInput
        as={`a`}
        href={`${process.env.REACT_APP_BACKEND_SERVICE_URL}${LOGIN_ENDPOINT}`}
        rel={`nofollow`}
        label={`log.in`}
        large
      />
    </WotOverlay>
  );
}
