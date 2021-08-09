import { LOGIN_URL } from "app/routes";
import { isLogged } from "helpers/user";
import { RouterComponentProps } from "interfaces/router/RouterComponentProps";
import React from "react";
import { Redirect } from "react-router";

export default function TitledComponentHOC<T extends {}>(
  OriginalComponent: React.ComponentType<T>,
  params?: RouterComponentProps,
  authorized: boolean = false,
) {
  return class HOCComponent extends React.Component {
    render() {
      if (authorized && !isLogged()) {
        return <Redirect to={LOGIN_URL} />
      }

      return (
        <OriginalComponent {...params as unknown as T} />
      );
    }
  }
}
