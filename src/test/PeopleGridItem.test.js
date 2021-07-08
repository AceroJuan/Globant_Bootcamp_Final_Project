import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import PeopleGridItem from "../components/PeopleGridItem/PeopleGridItem";

describe("test <Navbar /> component", () => {
  test("render links", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <PeopleGridItem />
      </Router>
    );

    expect(screen.getByTestId("peopleGridItem")).toHaveTextContent("name"); // check the input's value is empty
  });
});
