import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import SearchResults from "../components/SearchResults/SearchResults";

describe("test <Navbar /> component", () => {
  test("render links", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <SearchResults />
      </Router>
    );

    expect(screen.getByTestId("searchResults")).toHaveTextContent("movies"); // check the input's value is empty
  });
});
