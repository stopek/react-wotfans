import instance from "api/service";
import { useAppDispatch } from "app/hooks";
import { AppDispatch } from "app/store";
import Cookie from "components/core/Cookie";
import Flash from "components/core/Flash";
import Seo from "components/core/Seo";
import { getToken } from "helpers/cookies";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { Element } from 'react-scroll'
import { clearMessages } from "reducers/flashSlice";
import { getUser } from "reducers/wotSlice";
import styled from "styled-components";
import { COLOR_DARK } from "styles/colors";


const Content = styled(Element)`
  background: ${COLOR_DARK};
`;

const action = (token: string) => {
  return (dispatch: AppDispatch) => {
    if (token?.length > 0) {
      instance.defaults.headers.common["X-Auth-Token"] = token;
      dispatch(getUser());
    }
  }
}

function Base({ match, children, seo, seo_values = {}, ...props }) {
  delete props['staticContext'];

  const values = Object.assign({}, seo?.values || {}, seo_values || {});
  const dispatch = useAppDispatch();
  const token = getToken();

  useEffect(() => {
    const timer = setInterval(() => action(dispatch, token), 30000);
    return () => clearInterval(timer)
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(clearMessages());
    action(dispatch, token);
  }, [dispatch, token]);

  return (
    <Content name={`main`} id={`main`} {...props}>
      <Seo
        title={seo?.title}
        description={seo?.description}
        values={values}
      />

      {children}

      <Flash />
      <Cookie />
    </Content>
  );
}

export default withRouter(Base);
