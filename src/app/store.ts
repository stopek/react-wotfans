import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "reducers/rootReducer";
import logger from 'redux-logger'

const is_production = process.env.REACT_APP_NODE_ENV === 'production';
const middleware = (getDefaultMiddleware: () => any) => (is_production ? getDefaultMiddleware() : getDefaultMiddleware().concat(logger));

const store = configureStore({
    reducer: rootReducer,
    middleware: middleware,
    devTools: !is_production
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
