import { configureStore } from "@reduxjs/toolkit";
import themeModeReducer from "./slices/themeMode";
import movieDataReducer from "./slices/movieData"

export const store = configureStore({
  reducer: {
    themeMode: themeModeReducer,
    movieData: movieDataReducer,
  },
});
