import React, { useState } from "react";
// import PropTypes from "prop-types";
import AddMovie from "../../AddMovie";

const Home = () => {
  const [setMovies] = useState(["Iron Man"]);
  return (
    <>
      <h2>Home</h2>
      <main className="main">
        <AddMovie setMovies={setMovies} />
        <ul className="main__ul">
          {/* {movies.map((movie) => (
            <MovieGrid key={movie} movie={movie} />
          ))} */}
        </ul>
      </main>
    </>
  );
};

Home.propTypes = {};

export default Home;
