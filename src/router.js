import routes from "app/routing";
import ScrollTop from "components/core/ScrollTop";
import NotFound from "components/errors/NotFound";
import TitledComponentHOC from "hoc/TitledComponentHOC";
import LanguageProvider from "language";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { selectedLanguage } from "reducers/languageSlice";

export default function RouterComponent() {
  const language = useSelector(selectedLanguage);

  // let routes_list = [];
  //
  // ['', ':locale'].forEach((locale) => {
  //   Object.values(routes).forEach(({ authorized = false, route, header, Component, params }, key) => {
  //     const RouteComponent = TitledComponentHOC(Component, { ...params, header: header }, authorized);
  //     const currentRoute = routeForLocale(route, locale);
  //
  //     routes_list.push(() => (
  //       <Route key={`route-${locale}-${key}`} strict exact path={currentRoute}>
  //         <RouteComponent />
  //       </Route>
  //     ));
  //   });
  // });
  //

  const routes_list = routes.map(({ route, header, Component, params, ...rest }, key) => {
    let RouteComponent = TitledComponentHOC(Component, { ...params });
    return (
      <Route key={key} strict exact path={route}>
        <RouteComponent />
      </Route>
    );
  });

  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollTop>
          <Switch>
            {routes_list}

            <Route path="*" exact={true} status={404}>
              <NotFound />
            </Route>
          </Switch>
        </ScrollTop>
      </BrowserRouter>
    </LanguageProvider>
  );
};
