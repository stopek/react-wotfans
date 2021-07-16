import React from 'react';
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module'
import Root from "root";
import reportWebVitals from './reportWebVitals';

TagManager.initialize({
  gtmId: process.env.REACT_APP_TAG_MANAGER
});

ReactDOM.render(<Root />, document.getElementById("root"));
reportWebVitals();
