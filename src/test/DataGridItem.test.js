import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import DataGridItem from "../components/DataGridItem/DataGridItem";

describe("test <Navbar /> component", () => {
  test("render links", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <DataGridItem />
      </Router>
    );

    expect(screen.getByTestId("dataGridItem")).toHaveTextContent("title"); // check the input's value is empty
  });
});
