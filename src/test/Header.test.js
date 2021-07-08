import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Header from "../components/Header/Header";

describe("test for <Header /> component", () => {
  test("Header render ok", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Header />
      </Router>
    );

    expect(screen.getByTestId("header")).toHaveTextContent("hola movies"); // check the input's value is empty
  });
});
