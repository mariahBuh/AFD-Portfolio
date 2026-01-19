import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import '../../index.css';
import Header from "./Header";
import themeReducer from "../../features/theme/themeSlice";
import ThemeEffect from "../../features/theme/ThemeEffect";

const createStore = (mode: "light" | "dark") =>
  configureStore({
    reducer: { theme: themeReducer },
    preloadedState: {
      theme: { mode },
    },
  });

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const LightDesktop: Story = {
  render: () => (
    <Provider store={createStore("light")}> 
      <ThemeEffect />
      <MemoryRouter initialEntries={["/about"]}>
        <Header />
      </MemoryRouter>
    </Provider>
  ),
};

export const DarkDesktop: Story = {
  render: () => (
    <Provider store={createStore("dark")}> 
      <ThemeEffect />
      <MemoryRouter initialEntries={["/projects"]}>
        <Header />
      </MemoryRouter>
    </Provider>
  ),
};

export const MobileMenu: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1", 
    },
  },
  render: () => (
    <Provider store={createStore("light")}> 
      <ThemeEffect />
      <MemoryRouter initialEntries={["/about"]}>
        <Header />
      </MemoryRouter>
    </Provider>
  ),
};