import React from "react";
import useTvShowsData from "../../../utils/hooks/useTvShowsData";
import DataGridItem from "../../DataGridItem/DataGridItem";
import "./styles.css";

const TvShows = () => {
  const dataTvSeries = useTvShowsData();
  return (
    <main className="cards">
      <h1
        className="cards__h1 capitalize px animate__animated animate__fadeIn"
        data-testid="tvshows"
      >
        popular tv shows
      </h1>
      <div className="cards__grid animate__animated animate__fadeIn animate__delay-1s ">
        {dataTvSeries.map((tvShow) => (
          <DataGridItem key={tvShow.id} path={"tv"} {...tvShow} />
        ))}
      </div>
    </main>
  );
};

export default TvShows;
