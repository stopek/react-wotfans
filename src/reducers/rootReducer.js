import flashSlice from "reducers/flashSlice";
import languageSlice from "reducers/languageSlice";
import loaderSlice from "reducers/loaderSlice";
import wotSlice from "reducers/wotSlice";

import { combineReducers } from "redux";

export default combineReducers({
  wot: wotSlice,
  language: languageSlice,
  flash: flashSlice,
  loader: loaderSlice,
});
