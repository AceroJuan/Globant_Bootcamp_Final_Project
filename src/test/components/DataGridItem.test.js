import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import DataGridItem from "../../components/DataGridItem/DataGridItem";
import defaultImg from "../../assets/defaultImg.jpg";

describe("test for <DataGridItem /> component", () => {
  test("should render component ok", () => {
    const data = {
      id: 459151,
      title: "The Boss Baby: Family Business",
      poster_img:
        "https://image.tmdb.org/t/p/w300/gX5UrH1TLVVBwI7WxplW43BD6Z1.jpg",
    };
    const path = "movie";

    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <DataGridItem
          id={data.id}
          title={data.title}
          poster_img={data.poster_img}
          path={path}
        />
      </Router>
    );

    expect(screen.getByTestId("dataGridItem")).toHaveTextContent(
      "The Boss Baby: Family Business"
    );
    expect(screen.getByTestId("dataGridItemImg").src).toBe(
      "https://image.tmdb.org/t/p/w300/gX5UrH1TLVVBwI7WxplW43BD6Z1.jpg"
    );
  });

  test("should render component with broken image", () => {
    const data = {
      id: 459151,
      title: "The Boss Baby: Family Business",
      poster_img: defaultImg,
    };
    const path = "movie";

    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <DataGridItem
          id={data.id}
          title={data.title}
          poster_img={data.poster_img}
          path={path}
        />
      </Router>
    );

    expect(screen.getByTestId("dataGridItemImg").src).toBe(
      `http://localhost/${data.poster_img}`
    );
  });
});
