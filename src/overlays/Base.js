import instance from "api/service";
import Cookie from "components/core/Cookie";
import Flash from "components/core/Flash";
import Seo from "components/core/Seo";
import { getToken } from "helpers/cookies";
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import { clearMessages } from "reducers/flashSlice";
import { getUser } from "reducers/wotSlice";

export default function Base({ children, seo, seo_values = {}, ...props }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessages());
  }, [dispatch]);

  const token = getToken();
  useEffect(() => {
    if (token?.length > 0) {
      instance.defaults.headers.common["X-Auth-Token"] = token;
      dispatch(getUser());
    }
  }, [dispatch, token]);

  const values = Object.assign({}, seo?.values || {}, seo_values || {});

  return (
    <div {...props}>
      {!!seo?.title && (
        <FormattedMessage id={seo?.title}>
          {translation => (
            <Seo
              title={translation[0]}
              description={seo?.description}
              values={values}
            />
          )}
        </FormattedMessage>
      )}

      {children}

      <Flash />
      <Cookie />
    </div>
  );
};