import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import FilterMenu from "../../components/FilterMenu/FilterMenu";

describe("test for <FilterMenu /> component", () => {
  test("should render component ok", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <FilterMenu />
      </Router>
    );

    expect(screen.getByTestId("filterMenu")).toHaveTextContent(
      "search results"
    );
  });
});
