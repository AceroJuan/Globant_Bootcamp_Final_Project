import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { createMemoryHistory } from "history";

describe("test <Navbar /> component", () => {
  test("render links", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    const peopleAnchorNode = screen.getByText(/people/i);
    expect(peopleAnchorNode).toBeInTheDocument();
  });
});
