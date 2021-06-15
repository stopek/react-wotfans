import { LOGIN_ENDPOINT } from "api/endpoints";
import instance from "api/service";
import { ACCOUNT_URL } from "app/routes";
import ButtonInput from "components/ui/input/ButtonInput";
import { saveToken } from "helpers/cookies";
import { useQuery } from "helpers/useQuery";
import { isLogged } from "helpers/user";
import WotOverlay from "overlays/Wot";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import { getUser, selectUser } from "reducers/wotSlice";
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

const WargamingLogo = styled.img`
  
`;

function LoginContainer(...props) {
  const dispatch = useDispatch();
  const query = useQuery();
  const token = query.get('token');
  const history = useHistory();
  const user = useSelector(selectUser);

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
    <WotOverlay title={`Logowanie`} {...props}>
      <WargamingLogo src={`https://developers.wargaming.net/static/1.12.0/assets/img/header/wg_logo.png`} />

      <Info>
        Aby dokonać autoryzacji i zalogować się do portalu kliknij w poniższy przycisk
        <strong>
          Portal nie gromadzi żadnych prywatnych danych użytkowników.<br />
          Logowanie służy jedynie do prawidłowego połączenia
          utworzonego w systemie konta z zalogowanym użytkownikiem
        </strong>
      </Info>

      <ButtonInput
        as={`a`}
        href={`${process.env.REACT_APP_BACKEND_SERVICE_URL}${LOGIN_ENDPOINT}`}
        rel={`nofollow`}
        label={`Zaloguj się`}
        large
      />
    </WotOverlay>
  );
}

export default LoginContainer;