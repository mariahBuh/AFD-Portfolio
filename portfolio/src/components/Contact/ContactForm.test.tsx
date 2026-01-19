import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";
import { renderWithProviders } from "../../test/test-utils";

describe("ContactForm validation", () => {
  it("shows validation errors when submitting empty form", async () => {
    renderWithProviders(<ContactForm />);

    await userEvent.click(
      screen.getByRole("button", { name: /send message/i }),
    );

    expect(screen.getByText(/full name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/subject is required/i)).toBeInTheDocument();
    expect(screen.getByText(/message is required/i)).toBeInTheDocument();
  });

  it("shows error for invalid email", async () => {
    renderWithProviders(<ContactForm />);

    await userEvent.type(screen.getByPlaceholderText(/email/i), "not-an-email");

    await userEvent.click(
      screen.getByRole("button", { name: /send message/i }),
    );

    expect(
      screen.getByText(/please enter a valid email address/i),
    ).toBeInTheDocument();
  });
});
