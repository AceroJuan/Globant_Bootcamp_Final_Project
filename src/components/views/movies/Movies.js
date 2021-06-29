import React from "react";
// import PropTypes from "prop-types";

import useDataMovie from "../../../utils/hooks/useDataMovie";
import MovieGridItem from "../../MovieGridItem";

const Movies = () => {
  const dataMovie = useDataMovie();

  return (
    <section>
      <header>
        <h2 className="capitalize center animate__animated animate__fadeIn">
          trending movies
        </h2>
      </header>
      <main>
        <ul className="card__grid animate__animated animate__fadeIn animate__delay-1s">
          {dataMovie.map((movie) => (
            <MovieGridItem key={movie.id} {...movie} />
          ))}
        </ul>
      </main>
    </section>
  );
};

Movies.propTypes = {};

export default Movies;
