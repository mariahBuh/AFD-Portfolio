import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import ThemeToggle from "./ThemeToggle";
import themeReducer from "./themeSlice";
import '../../index.css';
import ThemeEffect from "./ThemeEffect"; // <-- Add this import

const createStore = (mode: "light" | "dark") =>
  configureStore({
    reducer: { theme: themeReducer },
    preloadedState: {
      theme: { mode },
    },
  });

const meta: Meta<typeof ThemeToggle> = {
  title: "UI/ThemeToggle",
  component: ThemeToggle,
};

export default meta;

type Story = StoryObj<typeof ThemeToggle>;

export const LightMode: Story = {
  render: () => (
    <Provider store={createStore("light")}>
      <ThemeEffect /> {/* <-- Add this line */}
      <ThemeToggle />
    </Provider>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <Provider store={createStore("dark")}>
      <ThemeEffect /> {/* <-- Add this line */}
      <ThemeToggle />
    </Provider>
  ),
};