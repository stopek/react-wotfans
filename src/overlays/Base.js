import instance from "api/service";
import Cookie from "components/core/Cookie";
import Flash from "components/core/Flash";
import Seo from "components/core/Seo";
import { getToken } from "helpers/cookies";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { clearMessages } from "reducers/flashSlice";
import { getUser } from "reducers/wotSlice";

const action = (dispatch, token) => {
  if (token?.length > 0) {
    instance.defaults.headers.common["X-Auth-Token"] = token;
    dispatch(getUser());
  }
}

function Base({ match, children, seo, seo_values = {}, ...props }) {
  const dispatch = useDispatch();
  const token = getToken();
  // const language = useSelector(selectedLanguage);
  // const history = useHistory();


  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     action(dispatch, token);
  //   }, 10000);
  //
  //   return () => {
  //     clearInterval(timer);
  //   }
  // }, [dispatch, token]);

  useEffect(() => {
    dispatch(clearMessages());
    action(dispatch, token);
  }, [dispatch, token]);

  const values = Object.assign({}, seo?.values || {}, seo_values || {});

  // const explode = trim(match.url, '/').split('/');
  // if (!explode[0]?.length) {
  //   const currentRoute = routeForLocale(match?.path, language, match?.params);
  //
  //   console.log(explode);
  //   console.log(match);
  //   console.log(currentRoute);
  //
  //   return null;
  //   return <Redirect to={currentRoute} />
  // }
  //
  //
  // if (!match?.params?.locale) {
  //   // return <Redirect to={currentRoute} />
  // }

  return (
    <div {...props}>
      <Seo
        title={seo?.title}
        description={seo?.description}
        values={values}
      />

      {children}

      <Flash />
      <Cookie />
    </div>
  );
}

export default withRouter(Base);
