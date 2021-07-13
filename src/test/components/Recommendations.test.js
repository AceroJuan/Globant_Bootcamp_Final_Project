import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Recommendations from "../../components/Recommendations/Recommendations";

describe("test for <Recommendations /> component", () => {
  test("should render component ok", () => {
    const data = {
      id: 459151,
      overview:
        "The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.",
      recommendation_backdrop_path:
        "https://image.tmdb.org/t/p/w300/gX5UrH1TLVVBwI7WxplW43BD6Z1.jpg",
      release_date: "2021-07-01",
      title: "The Boss Baby: Family Business",
      name: "The Boss Baby: Family Business",
      video: false,
      vote_average: 7.949,
      vote_count: 433,
    };
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Recommendations
          id={data.id}
          title={data.title}
          poster_img={data.poster_img}
          recommendation_backdrop_path={data.recommendation_backdrop_path}
        />
      </Router>
    );

    expect(screen.getByTestId("recommendations").textContent).toBe(data.title);
  });
  test("should render component ok 2", () => {
    const data = {
      id: 459151,
      overview:
        "The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.",
      recommendation_backdrop_path:
        "https://image.tmdb.org/t/p/w300/gX5UrH1TLVVBwI7WxplW43BD6Z1.jpg",
      release_date: "2021-07-01",
      title: "The Boss Baby: Family Business",
      name: "The Boss Baby: Family Business",
      video: false,
      vote_average: 7.949,
      vote_count: 433,
    };
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Recommendations
          id={data.id}
          name={data.name}
          poster_img={data.poster_img}
          recommendation_backdrop_path={data.recommendation_backdrop_path}
        />
      </Router>
    );

    expect(screen.getByTestId("recommendations").textContent).toBe(data.name);
  });
});
