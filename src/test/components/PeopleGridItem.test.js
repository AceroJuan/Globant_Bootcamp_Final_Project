import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import PeopleGridItem from "../../components/PeopleGridItem/PeopleGridItem";

describe("test for <PeopleGridItem /> component", () => {
  test("should render component ok", () => {
    const data = {
      id: 1245,
      name: "Scarlett Johansson",
      profile_img:
        "https://image.tmdb.org/t/p/w300/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg",
    };

    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <PeopleGridItem
          id={data.id}
          name={data.name}
          profile_img={data.profile_img}
        />
      </Router>
    );

    expect(screen.getByTestId("peopleGridItem")).toHaveTextContent(
      "Scarlett Johansson"
    );
  });
});
