 // This file contains tests for the ThemeToggle component and Header navigation

// import necessary modules and functions
 import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import ThemeToggle from "./ThemeToggle";
import Header from "../../components/Header/Header";
import { Routes, Route } from "react-router-dom";

// Tests for ThemeToggle component
describe("ThemeToggle with Redux", () => {
  // test to verify theme toggling functionality
  it("toggles theme mode in Redux state", async () => {
    const user = userEvent.setup();
    const store = configureStore({
      reducer: { theme: themeReducer },
      // initial state set to light mode
      preloadedState: { theme: { mode: "light" as "light" | "dark" } },
    });

    // render ThemeToggle with Redux provider
    render(
      <Provider store={store}>
        <ThemeToggle />
      </Provider>
    );

    // simulate user clicking the toggle button and verify state changes
    const button = screen.getByRole("button", { name: /toggle theme/i });
    expect(store.getState().theme.mode).toBe("light");
    await user.click(button);
    // after first click, mode should be dark
    expect(store.getState().theme.mode).toBe("dark");
  });
});

// Header navigation tests

// group tests related to Header navigation
describe("Header navigation", () => {
  // test for About link navigation
  it("navigates to About page when About link is clicked", async () => {
    const user = userEvent.setup();
    render(
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <h1>Home</h1>
            </>
          }
        />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>,
      {
        wrapper: ({ children }) => (
          <Provider
            store={configureStore({
              reducer: { theme: themeReducer },
              preloadedState: { theme: { mode: "light" as "light" | "dark" } },
            })}
          >
            {children}
          </Provider>
        ),
      }
    );

    // simulate user clicking the About link
    await user.click(screen.getByRole("link", { name: /about/i }));
    expect(screen.getByText(/about page/i)).toBeInTheDocument();
  });

  // test for Projects link navigation
  it("navigates to Projects page when Projects link is clicked", async () => {
    const user = userEvent.setup();
    render(
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <h1>Home</h1>
            </>
          }
        />
        <Route path="/projects" element={<h1>Projects Page</h1>} />
      </Routes>,
      {
        wrapper: ({ children }) => (
          <Provider
            store={configureStore({
              reducer: { theme: themeReducer },
              preloadedState: { theme: { mode: "light" as "light" | "dark" } },
            })}
          >
            {children}
          </Provider>
        ),
      }
    );

    // simulate user clicking the Projects link
    await user.click(screen.getByRole("link", { name: /projects/i }));
    expect(screen.getByText(/projects page/i)).toBeInTheDocument();
  });
});
