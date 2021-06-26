import store from "app/store";
import "assets/styles/default.css";
import "assets/styles/fonts.css";
import "assets/styles/scrollbar.css";

import "normalize.css";
import React from "react";
import { Provider } from "react-redux";
import RouterComponent from "router";

export default function Root() {
  return (
    <Provider store={store}>
      <RouterComponent />
    </Provider>
  )
}
