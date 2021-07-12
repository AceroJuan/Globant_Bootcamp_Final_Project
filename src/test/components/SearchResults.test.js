import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import SearchResults from "../../components/SearchResults/SearchResults";

describe("test <SearchResults /> component", () => {
  test("should render component ok", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <SearchResults />
      </Router>
    );
    expect(screen.getByText(/search results/i)).toBeInTheDocument();
  });
});
