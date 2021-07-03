import React from "react";
// import PropTypes from "prop-types";
import useMovieData from "../../../utils/hooks/useMovieData";
import DataGridItem from "../../dataGridItem/DataGridItem";

import "./styles.css";

const Movies = () => {
  const movieData = useMovieData();

  return (
    <main>
      <h2 className="capitalize center px animate__animated animate__fadeIn">
        trending movies
      </h2>
      <div className="main__div animate__animated animate__fadeIn animate__delay-1s">
        {movieData.map((movie) => (
          <DataGridItem key={movie.id} path={"movie"} {...movie} />
        ))}
      </div>
    </main>
  );
};

// Movies.propTypes = {};

export default Movies;
