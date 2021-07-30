import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { getDefaultLanguage } from "helpers/languages";

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: getDefaultLanguage(),
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export const selectedLanguage = (state: RootState) => state.language.language;

export default languageSlice.reducer;
