import instance from "api/service";
import { useAppDispatch } from "app/hooks";
import { AppDispatch } from "app/store";
import Cookie from "components/core/Cookie";
import Flash from "components/core/Flash";
import Seo from "components/core/Seo";
import { getToken } from "helpers/cookies";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Element } from 'react-scroll'
import { clearMessages } from "reducers/flashSlice";
import { getUser } from "reducers/wotSlice";
import styled from "styled-components";
import { COLOR_DARK } from "styles/colors";

const Content = styled(Element)`
  background: ${COLOR_DARK};
`;

const action = (token: string | null) => {
  return (dispatch: AppDispatch) => {
    if (!!token) {
      instance.defaults.headers.common["X-Auth-Token"] = token;
      dispatch<any>(getUser());
    }
  }
}

type BaseType = {
  children: JSX.Element | JSX.Element[],
  seo?: {
    values: object,
    title?: string,
    description?: string
  },
  seo_values?: object
}

function Base({ children, seo, seo_values = {}, ...props }: BaseType) {
  const values = Object.assign({}, seo?.values || {}, seo_values || {});
  const dispatch = useAppDispatch();
  const token = getToken();

  useEffect(() => {
    const timer = setInterval(() => dispatch<any>(action(token)), 30000);
    return () => clearInterval(timer)
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(clearMessages());
    dispatch<any>(action(token));
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

Base.propTypes = {
  children: PropTypes.element,
  seo: PropTypes.object,
  seo_values: PropTypes.object
}

export default Base;
