import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Textfield from "./Textfield";

test("Search input type", () => {
  render(<Textfield />);
  const input = screen.getByTestId("search-input");
  userEvent.type(input, "green");
  expect(input).toHaveValue("green");
});
