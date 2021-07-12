import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import SearchResultItem from "../../components/SearchResultItem/SearchResultItem";

describe("test <SearchResultItem /> component", () => {
  test("cambiar", () => {
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
        <SearchResultItem item={item} path={path} />
      </Router>
    );

    expect(screen.getByTestId("searchResultItemImg").src).toBe(
      "https://image.tmdb.org/t/p/w300/fvaB0jrzFXq07bUpox03k6qOAJu.jpg"
    ); // check the input's value is empty
    expect(screen.getByTestId("searchResultItemA").href).toBe(
      "http://localhost/movie/preview/736073"
    ); // check the input's value is empty
    expect(screen.getByTestId("searchResultItemA").textContent).toBe(
      "Batman: The Long Halloween, Part One"
    ); // check the input's value is empty
  });

  test("cambiar esto", () => {
    const item = {
      id: 736073,
      overview:
        "Following a brutal series of murders taking place on Halloween, Thanksgiving, and Christmas, Gotham City's young vigilante known as the Batman sets out to pursue the mysterious serial killer alongside police officer James Gordon and district attorney Harvey Dent.",
      poster: "/fvaB0jrzFXq07bUpox03k6qOAJu.jpg",
      poster_img:
        "https://image.tmdb.org/t/p/w300/fvaB0jrzFXq07bUpox03k6qOAJu.jpg",
      first_air_date: "2021-06-21",
      name: "Batman: The Long Halloween, Part One",
      vote_average: 7.7,
    };
    const path = "movie";
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <SearchResultItem item={item} path={path} />
      </Router>
    );

    expect(screen.getByTestId("searchResultItemA").href).toBe(
      "http://localhost/movie/preview/736073"
    ); // check the input's value is empty
    expect(screen.getByTestId("searchResultItemA").textContent).toBe(
      "Batman: The Long Halloween, Part One"
    ); // check the input's value is empty
    expect(screen.getByTestId("searchResultItemP").textContent).toBe(
      "2021-06-21"
    ); // check the input's value is empty
  });
});
