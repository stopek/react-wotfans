import React from 'react';
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module'
import Root from "root";
import reportWebVitals from './reportWebVitals';

const gtmId = process.env.REACT_APP_TAG_MANAGER;
if (typeof gtmId === "string") {
  TagManager.initialize({
    gtmId: gtmId
  });
}

ReactDOM.render(<Root />, document.getElementById("root"));
reportWebVitals();
