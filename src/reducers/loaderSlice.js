import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    loading: false
  },
  reducers: {
    setLoadingStatus: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoadingStatus } = loaderSlice.actions;

export const getLoadingStatus = (state) => state.loader.loading;

export default loaderSlice.reducer;
