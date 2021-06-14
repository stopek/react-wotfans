import Cookie from "components/core/Cookie";
import Flash from "components/core/Flash";
import Seo from "components/core/Seo";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearMessages } from "reducers/flashSlice";

export default function Base({ children, seo, seo_values = {}, ...props }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessages());
  }, [dispatch]);


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