import instance from "api/service";
import Cookie from "components/core/Cookie";
import Flash from "components/core/Flash";
import Seo from "components/core/Seo";
import { getToken } from "helpers/cookies";
import React, { useEffect } from "react";
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

  return (
    <div {...props}>
      <Seo
        title={seo?.title}
        description={seo?.description}
        values={Object.assign({}, seo?.values || {}, seo_values || {})}
      />

      {children}

      <Flash />
      <Cookie />
    </div>
  );
};