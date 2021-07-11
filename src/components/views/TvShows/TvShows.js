import React from "react";
// import PropTypes from "prop-types";
import useTvShowsData from "../../../utils/hooks/useTvShowsData";
import DataGridItem from "../../DataGridItem/DataGridItem";

import "./styles.css";

const TvShows = () => {
  const dataTvSeries = useTvShowsData();
  return (
    <main>
      <h1
        className="capitalize center px animate__animated animate__fadeIn"
        data-testid="tvshows"
      >
        popular tv shows
      </h1>
      <div className="card__container animate__animated animate__fadeIn animate__delay-1s ">
        {dataTvSeries.map((tvShow) => (
          <DataGridItem key={tvShow.id} path={"tv"} {...tvShow} />
        ))}
      </div>
    </main>
  );
};

// TvShows.propTypes = {};

export default TvShows;
