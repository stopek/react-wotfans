import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "reducers/rootReducer";
import logger from 'redux-logger'

const is_production = process.env.REACT_APP_NODE_ENV === 'production';
let middleware;
if (is_production) {
  middleware = (getDefaultMiddleware) => getDefaultMiddleware();
} else {
  middleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(logger);
}

export default configureStore({
  reducer: rootReducer,
  middleware: middleware,
  devTools: !is_production
});