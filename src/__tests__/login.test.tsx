import LoginPage from "@/app/auth/login/page";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: {
        id: 1,
        name: "John Doe",
      },
    }),
  },
}));

describe("Login", () => {
  test("input fields should be rendered", () => {
    render(<LoginPage />);
    const usernameInput = screen.getByPlaceholderText("username");
    expect(usernameInput).toBeInTheDocument();
    const passwordInput = screen.getByPlaceholderText("password");
    expect(passwordInput).toBeInTheDocument();
  });

  test("error message should be rendered", () => {
    render(<LoginPage />);
    const errorMessage = screen.getByTestId(/error/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("error message should be hidden", () => {
    render(<LoginPage />);
    const errorMessage = screen.getByTestId(/error/i);
    expect(errorMessage).not.toBeVisible();
  });

  test("button should be rendered", () => {
    render(<LoginPage />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("input fields should initially be empty", () => {
    render(<LoginPage />);

    const usernameInput = screen.getByPlaceholderText("username");
    const passwordInput = screen.getByPlaceholderText("password");

    expect(usernameInput.value).toBe("");
    expect(passwordInput.value).toBe("");
  });

  test("button should be disabled", () => {
    render(<LoginPage />);

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });

  test("username input should change", () => {
    render(<LoginPage />);

    const usernameInput = screen.getByPlaceholderText("username");
    fireEvent.change(usernameInput, { target: { value: "test" } });

    expect(usernameInput.value).toBe("test");
  });

  test("password input should change", () => {
    render(<LoginPage />);

    const passwordInput = screen.getByPlaceholderText("password");
    fireEvent.change(passwordInput, { target: { value: "test123" } });

    expect(passwordInput.value).toBe("test123");
  });

  test("button should not be disabled", () => {
    render(<LoginPage />);
    const button = screen.getByRole("button");
    const usernameInput = screen.getByPlaceholderText(/username/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);

    fireEvent.change(usernameInput, { target: { value: "test" } });
    fireEvent.change(passwordInput, { target: { value: "test123" } });

    expect(button).not.toBeDisabled();
  });

  test("logging in should not be rendered", () => {
    render(<LoginPage />);
    const button = screen.getByRole("button");

    expect(button).not.toHaveTextContent(/logging in/i);
  });

  test("logging in should be rendered", () => {
    render(<LoginPage />);

    const button = screen.getByRole("button");
    const usernameInput = screen.getByPlaceholderText(/username/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);

    fireEvent.change(usernameInput, { target: { value: "test" } });
    fireEvent.change(passwordInput, { target: { value: "test123" } });
    fireEvent.click(button);

    expect(button).toHaveTextContent(/logging in/i);
  });

  test("logging in should not be rendered after fetching", async () => {
    render(<LoginPage />);

    const button = screen.getByRole("button");
    const usernameInput = screen.getByPlaceholderText(/username/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);

    fireEvent.change(usernameInput, { target: { value: "test" } });
    fireEvent.change(passwordInput, { target: { value: "test123" } });
    fireEvent.click(button);

    await waitFor(() => expect(button).not.toHaveTextContent(/logging in/i));
  });

  test("name should be rendered after fetching", async () => {
    render(<LoginPage />);

    const button = screen.getByRole("button");
    const usernameInput = screen.getByPlaceholderText(/username/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);

    fireEvent.change(usernameInput, { target: { value: "test" } });
    fireEvent.change(passwordInput, { target: { value: "test123" } });
    fireEvent.click(button);

    const name = await screen.findByText(/john/i);

    expect(name).toHaveTextContent(/john/i);

  });
});
