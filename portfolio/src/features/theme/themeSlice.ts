// This file defines the Redux slice for managing theme state (light/dark mode) 

// using Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// define the possible theme modes
export type ThemeMode = "light" | "dark";

// define the shape of the theme slice state
type ThemeState = {
  mode: ThemeMode;
};

// function to get the initial theme from localStorage or default to light
const getInitialTheme = (): ThemeMode => {
  // check localStorage for saved theme
  const saved = localStorage.getItem("theme");
  // validate and return the saved theme or default to light
  if (saved === "light" || saved === "dark") {
    return saved;
  }
  // default theme
  return "light";
};

// initial state for the theme slice
const initialState: ThemeState = {
  mode: getInitialTheme(),
};


// create the theme slice
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // reducer to set a specific theme
    setTheme(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
      localStorage.setItem("theme", action.payload);
    },
    // reducer to toggle between light and dark themes
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode);
    },
  },
});

// export the actions and reducer
export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
