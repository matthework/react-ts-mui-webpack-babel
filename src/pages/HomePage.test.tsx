import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

test("renders welcome message", () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/Welcome to/i);
  expect(linkElement).toBeInTheDocument();
});
