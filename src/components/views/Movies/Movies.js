import React from "react";
import useMovieData from "../../../utils/hooks/useMovieData";
import DataGridItem from "../../DataGridItem/DataGridItem";
import "./styles.css";

const Movies = () => {
  const movieData = useMovieData();

  return (
    <main className="cards">
      <h1
        className="cards__h1 capitalize px animate__animated animate__fadeIn"
        data-testid="movies"
      >
        trending movies
      </h1>
      <div className="cards__grid animate__animated animate__fadeIn animate__delay-1s">
        {movieData.map((movie) => (
          <DataGridItem key={movie.id} path={"movie"} {...movie} />
        ))}
      </div>
    </main>
  );
};

export default Movies;
