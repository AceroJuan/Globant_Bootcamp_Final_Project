import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Movies from "../../components/views/Movies/Movies";

describe("test <Movies /> component", () => {
  test("should render component ok", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Movies />
      </Router>
    );

    expect(screen.getByTestId("movies")).toHaveTextContent("trending movies"); // check the input's value is empty
  });
});
