import flashSlice from "reducers/flashSlice";
import languageSlice from "reducers/languageSlice";
import wotSlice from "reducers/wotSlice";

import { combineReducers } from "redux";

export default combineReducers({
  wot: wotSlice,
  language: languageSlice,
  flash: flashSlice,
});
