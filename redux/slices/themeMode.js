import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "dark",
};

export const themeModeSlice = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.value = state.value === "dark" ? "light" : "dark";
    },
  },
});

export const { toggleThemeMode } = themeModeSlice.actions;
export default themeModeSlice.reducer;
