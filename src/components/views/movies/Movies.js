import React from "react";
// import PropTypes from "prop-types";

import useDataMovie from "../../../utils/hooks/useDataMovie";
import MovieGridItem from "../../MovieGridItem";

const Movies = () => {
  const dataMovie = useDataMovie();

  return (
    <>
      <h2>movies</h2>
      <ul className="card__grid">
        {dataMovie.map((movie) => (
          <MovieGridItem key={movie.id} {...movie} />
        ))}
      </ul>
    </>
  );
};

Movies.propTypes = {};

export default Movies;
