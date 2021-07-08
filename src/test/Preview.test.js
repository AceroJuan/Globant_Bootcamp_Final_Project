import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Preview from "../components/Preview/Preview";

describe("test <Navbar /> component", () => {
  test("render links", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Preview />
      </Router>
    );

    expect(screen.getByTestId("preview")).toHaveTextContent("name"); // check the input's value is empty
  });
});
