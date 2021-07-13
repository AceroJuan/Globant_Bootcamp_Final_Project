import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import People from "../../components/views/People/People";

describe("test for <People /> component", () => {
  test("should render component ok", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <People />
      </Router>
    );

    expect(screen.getByTestId("people")).toHaveTextContent("people");
  });
});
