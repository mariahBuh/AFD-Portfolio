// Tests for ContactForm validation

// import necessary modules and components
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";
import { renderWithProviders } from "../../test/test-utils";

// group tests related to ContactForm validation
describe("ContactForm validation", () => {
  it("shows validation errors when submitting empty form", async () => {
    renderWithProviders(<ContactForm />);

    // simulate user clicking the submit button
    await userEvent.click(
      screen.getByRole("button", { name: /send message/i }),
    );

    // check for the presence of validation error messages
    expect(screen.getByText(/full name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/subject is required/i)).toBeInTheDocument();
    expect(screen.getByText(/message is required/i)).toBeInTheDocument();
  });

  it("shows error for invalid email", async () => {
    renderWithProviders(<ContactForm />);

    // simulate user typing an invalid email
    await userEvent.type(screen.getByPlaceholderText(/email/i), "not-an-email");

    // simulate user clicking the submit button
    await userEvent.click(
      screen.getByRole("button", { name: /send message/i }),
    );

    // check for the presence of the email validation error message
    expect(
      screen.getByText(/please enter a valid email address/i),
    ).toBeInTheDocument();
  });
});
