import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./Home";

test("renders Prolific Creations as a text", () => {
  render(<HomePage />);

  const prolificCreationsElement = screen.getByText("Prolific Creations");
  expect(prolificCreationsElement).toBeInTheDocument();
});
