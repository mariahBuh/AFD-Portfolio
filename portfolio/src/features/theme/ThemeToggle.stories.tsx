// This is a Storybook story for the ThemeToggle component

// import necessary modules
import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import ThemeToggle from "./ThemeToggle";
import themeReducer from "./themeSlice";
import '../../index.css';
// import ThemeEffect to apply the theme changes
import ThemeEffect from "./ThemeEffect"; 

// helper function to create a Redux store with preloaded theme state
const createStore = (mode: "light" | "dark") =>
  configureStore({
    reducer: { theme: themeReducer },
    preloadedState: {
      theme: { mode },
    },
  });

  // define metadata for the ThemeToggle stories
const meta: Meta<typeof ThemeToggle> = {
  title: "UI/ThemeToggle",
  component: ThemeToggle,
};

// export the metadata
export default meta;

// define the Story type
type Story = StoryObj<typeof ThemeToggle>;

// Story for Light Mode
export const LightMode: Story = {
  render: () => (
    <Provider store={createStore("light")}>
      <ThemeEffect /> {/* <-- Add this line */}
      <ThemeToggle />
    </Provider>
  ),
};

// Story for Dark Mode
export const DarkMode: Story = {
  render: () => (
    <Provider store={createStore("dark")}>
      <ThemeEffect /> {/* <-- Add this line */}
      <ThemeToggle />
    </Provider>
  ),
};