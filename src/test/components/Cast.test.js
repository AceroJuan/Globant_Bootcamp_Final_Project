import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Cast from "../../components/Cast/Cast";

describe("test <Navbar /> component", () => {
  test("render links", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Cast />
      </Router>
    );

    expect(screen.getByTestId("cast")).toHaveTextContent("name"); // check the input's value is empty
  });
});
