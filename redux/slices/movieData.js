import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const movieDataSlice = createSlice({
  name: "movieData",
  initialState,
  reducers: {
    changeMovieData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeMovieData } = movieDataSlice.actions;
export default movieDataSlice.reducer;
