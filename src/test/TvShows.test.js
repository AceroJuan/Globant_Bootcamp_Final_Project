import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import TvShows from "../components/views/TvShows/TvShows";

describe("test <Navbar /> component", () => {
  test("render links", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <TvShows />
      </Router>
    );

    expect(screen.getByTestId("tvshows")).toHaveTextContent("popular tv shows"); // check the input's value is empty
  });
});
