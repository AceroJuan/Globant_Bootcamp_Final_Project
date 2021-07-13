import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Preview from "../../components/Preview/Preview";

describe("test for <Preview /> component", () => {
  test("should render the component ok", () => {
    const item = {
      id: 736073,
      overview:
        "Following a brutal series of murders taking place on Halloween...",
      poster: "/fvaB0jrzFXq07bUpox03k6qOAJu.jpg",
      poster_img:
        "https://image.tmdb.org/t/p/w300/fvaB0jrzFXq07bUpox03k6qOAJu.jpg",
      release_date: "2021-06-21",
      title: "Batman: The Long Halloween, Part One",
      vote_average: 7.7,
    };
    const path = "movie";

    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Preview />
      </Router>
    );

    expect(screen.getByTestId("previewH2")).toHaveTextContent("cast");
  });
});
