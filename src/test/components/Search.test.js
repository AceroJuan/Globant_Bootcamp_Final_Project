import { fireEvent, render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Search from "../../components/Search/Search";
import { ProvideSearch } from "../../utils/context/useSearchContext";
window.alert = jest.fn();

describe("test for <Search /> component", () => {
  test("should render component ok", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Search />
      </Router>
    );
    expect(screen.getByTestId("search")).toHaveTextContent("search");
  });

  test("should find the word batman", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Search />
      </Router>
    );
    fireEvent.change(screen.getByTestId("searchBox"), {
      target: { value: "batman" },
    });
    expect(screen.getByTestId("searchBox").value).toBe("batman");
  });

  test("should submit the word batman", () => {
    const history = createMemoryHistory();
    render(
      <ProvideSearch>
        <Router history={history}>
          <Search />
        </Router>
      </ProvideSearch>
    );

    fireEvent.change(screen.getByTestId("searchBox"), {
      target: { value: "batman" },
    });
    fireEvent.submit(screen.getByTestId("search"));

    expect(screen.getByTestId("searchBox").value).toBe("batman");
    expect(history.location.pathname).toBe("/search/movies");
  });

  test("should alert if the input is empty", () => {
    const history = createMemoryHistory();
    render(
      <ProvideSearch>
        <Router history={history}>
          <Search />
        </Router>
      </ProvideSearch>
    );
    fireEvent.change(screen.getByTestId("searchBox"), {
      target: { value: "" },
    });
    fireEvent.submit(screen.getByTestId("search"));

    expect(screen.getByTestId("searchBox").value).toBe("");
    window.alert.mockClear();
  });
});
