import React from "react";
// import PropTypes from "prop-types";
import useTvShowsData from "../../../utils/hooks/useTvShowsData";
import DataGridItem from "../../DataGridItem";

const TvShows = () => {
  const dataTvSeries = useTvShowsData();
  return (
    <main>
      <h2 className="capitalize center px animate__animated animate__fadeIn">
        popular tv shows
      </h2>
      <div className="card__grid animate__animated animate__fadeIn animate__delay-1s ">
        {dataTvSeries.map((tvShow) => (
          <DataGridItem key={tvShow.id} path={"tv"} {...tvShow} />
        ))}
      </div>
    </main>
  );
};

// TvShows.propTypes = {};

export default TvShows;
