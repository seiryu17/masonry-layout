import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Iconbutton from "./Iconbutton";

const MOCK_SUBMIT_BTN = jest.fn();

test("Button that contain icon", () => {
  render(<Iconbutton onClick={MOCK_SUBMIT_BTN} />);
  const iconbutton = screen.getByTestId("icon-button");
  userEvent.click(iconbutton);
  expect(MOCK_SUBMIT_BTN).toHaveBeenCalled();
});
