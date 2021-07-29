import { createSlice } from "@reduxjs/toolkit";
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
export const selectedLanguage = (state) => state.language.language;

export default languageSlice.reducer;
