import { createSlice } from "@reduxjs/toolkit";
import { default_languages } from "helpers/languages";

const getDefaultLanguage = () => {
  const browser_language = navigator.language.split(/[-_]/)[0];

  const available_language = Object.keys(default_languages).includes(browser_language);
  if (available_language) {
    return browser_language;
  }

  return 'en';
}

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
export const selectedLanguage = (state) => state.language.language;

export default languageSlice.reducer;
