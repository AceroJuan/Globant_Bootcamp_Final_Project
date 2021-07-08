import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Person from "../components/Person/Person";

describe("test <Navbar /> component", () => {
  test("render links", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Person />
      </Router>
    );

    expect(screen.getByTestId("person")).toHaveTextContent("name"); // check the input's value is empty
  });
});
