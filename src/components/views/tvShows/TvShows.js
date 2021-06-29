import React from "react";
// import PropTypes from "prop-types";
import useDataTvSeries from "../../../utils/hooks/useDataTvSeries";
import MovieGridItem from "../../MovieGridItem";

const TvShows = () => {
  const dataTvSeries = useDataTvSeries();
  return (
    <section>
      <header>
        <h2 className="capitalize center animate__animated animate__fadeIn">
          popular tv shows
        </h2>
      </header>
      <main>
        <ul className="card__grid animate__animated animate__fadeIn animate__delay-1s ">
          {dataTvSeries.map((tvShow) => (
            <MovieGridItem key={tvShow.id} {...tvShow} />
          ))}
        </ul>
      </main>
    </section>
  );
};

// TvShows.propTypes = {};

export default TvShows;
