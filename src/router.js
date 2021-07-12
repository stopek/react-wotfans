import routes from "app/routing";
import ScrollTop from "components/core/ScrollTop";
import NotFound from "components/errors/NotFound";
import TitledComponentHOC from "hoc/TitledComponentHOC";
import LanguageProvider from "language";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function RouterComponent() {
  const routes_list = routes.map(({ authorized = false, route, header, Component, params }, key) => {
    let RouteComponent = TitledComponentHOC(Component, { ...params, header: header }, authorized);
    return (
      <Route key={key} strict exact path={route}>
        <RouteComponent />
      </Route>
    );
  });

  return (
    <LanguageProvider>
      <Router>
        <ScrollTop>
          <Switch>
            {routes_list}

            <Route path="*" exact={true} status={404}>
              <NotFound />
            </Route>
          </Switch>
        </ScrollTop>
      </Router>
    </LanguageProvider>
  );
};
