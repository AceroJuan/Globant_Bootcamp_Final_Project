import { useState, useEffect } from "react";
import getDataMovie from "../helpers/getDataMovie";

const useDataMovie = () => {
  const [movieList, setMovieList] = useState([]); // data movie list

  useEffect(() => {
    getDataMovie().then((movie) => {
      setMovieList(movie);
    });
  }, []);

  return movieList; // { data: [], loading: true }
};

export default useDataMovie;
