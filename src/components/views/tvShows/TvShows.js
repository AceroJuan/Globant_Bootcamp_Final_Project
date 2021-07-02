import React from "react";
// import PropTypes from "prop-types";
import useTvShowsData from "../../../utils/hooks/useTvShowsData";
import DataGridItem from "../../dataGridItem/DataGridItem";

import "./styles.css";

const TvShows = () => {
  const dataTvSeries = useTvShowsData();
  return (
    <main>
      <h2 className="capitalize center px animate__animated animate__fadeIn">
        popular tv shows
      </h2>
      <div className="main__div animate__animated animate__fadeIn animate__delay-1s ">
        {dataTvSeries.map((tvShow) => (
          <DataGridItem key={tvShow.id} path={"tv"} {...tvShow} />
        ))}
      </div>
    </main>
  );
};

// TvShows.propTypes = {};

export default TvShows;
