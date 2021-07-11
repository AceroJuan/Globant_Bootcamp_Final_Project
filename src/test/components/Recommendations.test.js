import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Recommendations from "../../components/Recommendations/Recommendations";

describe("test <Navbar /> component", () => {
  test("render links", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Recommendations />
      </Router>
    );

    expect(screen.getByTestId("recommendations")).toHaveTextContent("title"); // check the input's value is empty
  });
});
