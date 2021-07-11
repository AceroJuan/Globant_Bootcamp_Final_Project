import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Search from "../../components/Search/Search";

describe("test <Navbar /> component", () => {
  test("render links", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Search />
      </Router>
    );

    expect(screen.getByTestId("search")).toHaveTextContent("search"); // check the input's value is empty
  });
});
