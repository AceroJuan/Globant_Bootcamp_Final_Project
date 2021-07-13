import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import TvShows from "../../components/views/TvShows/TvShows";

describe("test for <TvShows /> component", () => {
  test("should render component ok", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <TvShows />
      </Router>
    );

    expect(screen.getByTestId("tvshows")).toHaveTextContent("popular tv shows");
  });
});
