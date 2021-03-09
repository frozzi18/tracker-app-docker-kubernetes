import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders app component correctly", () => {
  render(<App />);
  const linkElement = screen.getByText(/Adding Exercise List/i);
  expect(linkElement).toBeInTheDocument();
});
