import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: "pl",
  },
  reducers: {
    changeLanguage: (state, action: PayloadAction<String, Number>) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export const selectedLanguage = (state) => state.language.language;

export default languageSlice.reducer;
