import { LOGIN_URL } from "app/routes";
import { isLogged } from "helpers/user";
import React from "react";
import { Redirect } from "react-router";

export default function TitledComponentHOC(OriginalComponent, params, authorized = false) {
  return class HOCComponent extends React.Component {
    render() {
      if (authorized === true && !isLogged()) {
        return <Redirect to={LOGIN_URL} />
      }

      return (
        <OriginalComponent {...params} />
      );
    }
  }
}
