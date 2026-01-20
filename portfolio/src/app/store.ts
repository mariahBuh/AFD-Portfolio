// This sceipt imports Redux Toolkit's helper for creating a Redux store with good defaults
// Its function is to set up the store with reducers for different slices of state: theme, projects, and contact.
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import projectsReducer from "../features/projects/projectsSlice";
import contactReducer from "../features/contact/contactSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    projects: projectsReducer,
    contact: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
