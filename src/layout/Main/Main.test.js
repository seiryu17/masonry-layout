import { render, screen, waitFor } from "@testing-library/react";
import Main from "./Main";
import axios from "axios";
import datasource from "../../datasource";

jest.mock("axios");

it("melakukan test untuk fetch image", async () => {
  const images = datasource;
  axios.get.mockImplementation(() => Promise.resolve({ data: images }));
  render(<Main />);
  const { container } = render(<Main />);

  await waitFor(() =>
    expect(container.getElementsByClassName("lazyload-wrapper")).toHaveLength(
      images.length
    )
  );
});
