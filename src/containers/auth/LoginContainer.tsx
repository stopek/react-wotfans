import { Link } from "@material-ui/core";
import { LOGIN_ENDPOINT } from "api/endpoints";
import instance from "api/service";
import { useAppDispatch } from "app/hooks";
import { ACCOUNT_URL } from "app/routes";
import ButtonInput from "components/ui/input/ButtonInput";
import SimpleText from "components/wot/SimpleText";
import { saveToken } from "helpers/cookies";
import { useQuery } from "helpers/useQuery";
import { isLogged } from "helpers/user";
import WotOverlay from "overlays/WotOverlay";
import React, { useEffect } from 'react';
import { FormattedMessage } from "react-intl";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import { getUser } from "reducers/wotSlice";

export default function LoginContainer({ ...props }) {
  const dispatch = useAppDispatch();
  const query = useQuery();
  const token = query.get('token');
  const history = useHistory();

  useEffect(() => {
    if (!!token) {
      saveToken(token);
      instance.defaults.headers.common["X-Auth-Token"] = token;

      const timer = setTimeout(() => {
        dispatch<any>(getUser());

        return history.push(ACCOUNT_URL);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [dispatch, token, history]);

  if (isLogged()) {
    return <Redirect to={ACCOUNT_URL} />
  }

  return (
    <WotOverlay {...props}>
      <img
        src={`https://developers.wargaming.net/static/1.12.0/assets/img/header/wg_logo.png`}
        alt=""
      />

      <SimpleText>
        <>
          <p>
            <FormattedMessage id={`login.message.1`} />
          </p>
          <p>
            <strong><FormattedMessage id={`login.message.2`} /></strong>
          </p>
          <p>
            <FormattedMessage id={`login.message.3`} />
          </p>
          <p>

            <ButtonInput
              large
              icon={(
                <Link
                  href={`${process.env.REACT_APP_BACKEND_SERVICE_URL}${LOGIN_ENDPOINT}`}
                  rel={`nofollow`}
                >
                  log.in
                </Link>
              )}
            />
          </p>
        </>
      </SimpleText>
    </WotOverlay>
  );
}
