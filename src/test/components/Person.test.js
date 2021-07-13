import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Person from "../../components/Person/Person";

describe("test for <Person /> component", () => {
  test("should render component ok", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Person />
      </Router>
    );

    expect(screen.getByTestId("person")).toHaveTextContent("name");
  });
});
