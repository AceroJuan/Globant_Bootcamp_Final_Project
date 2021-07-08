import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import SearchResultItem from "../components/SearchResultItem/SearchResultItem";

describe("test <Navbar /> component", () => {
  test("render links", () => {
    const history = createMemoryHistory();
    // render(
    //   <Router history={history}>
    //     <SearchResultItem />
    //   </Router>
    // );
  });
});
