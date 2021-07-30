import routes from "app/routing";
import ScrollTop from "components/core/ScrollTop";
import NotFound from "components/core/NotFound";
import TitledComponentHOC from "hoc/TitledComponentHOC";
import LanguageProvider from "language";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function RouterComponent() {
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

  const routes_list = routes.map(({ route, header, Component, params }, key) => {
    let RouteComponent = TitledComponentHOC(Component, params);
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

            <Route path="*" exact={true}>
              <NotFound />
            </Route>
          </Switch>
        </ScrollTop>
      </BrowserRouter>
    </LanguageProvider>
  );
};
