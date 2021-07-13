import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Cast from "../../components/Cast/Cast";

describe("test for <Cast /> component", () => {
  test("should render component ok", () => {
    const data = {
      character: "Natasha Romanoff / Black Widow",
      credits_profile_path:
        "https://image.tmdb.org/t/p/w300/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg",
      id: 1245,
      name: "Scarlett Johansson",
    };

    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Cast
          id={data.id}
          name={data.name}
          character={data.character}
          credits_profile_path={data.credits_profile_path}
        />
      </Router>
    );

    expect(screen.getByTestId("cast")).toHaveTextContent("Scarlett Johansson");
  });
});
