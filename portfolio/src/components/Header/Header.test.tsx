// This test file verifies the navigation functionality of the Header component.

//import necessary modules and functions
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import { renderWithProviders } from "../../test/test-utils"; 

// group tests related to Header navigation
describe("Header navigation", () => {
  it("navigates to About page when About link is clicked", async () => {
    const user = userEvent.setup();

    // render Header with routing context
    renderWithProviders(
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
      { route: "/" }
    );

    // simulate user clicking the About link
    await user.click(screen.getByRole("link", { name: /about/i }));

    expect(screen.getByText(/about page/i)).toBeInTheDocument();
  });

  // test for Projects link navigation
  it("navigates to Projects page when Projects link is clicked", async () => {
    const user = userEvent.setup();

    renderWithProviders(
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
      { route: "/" }
    );

    // simulate user clicking the Projects link
    await user.click(screen.getByRole("link", { name: /projects/i }));

    expect(screen.getByText(/projects page/i)).toBeInTheDocument();
  });
});
