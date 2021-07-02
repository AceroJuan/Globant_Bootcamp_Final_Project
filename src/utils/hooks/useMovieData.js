import { useState, useEffect } from "react";
import getMovieData from "../helpers/getMovieData";

const useMovieData = () => {
  const [movieList, setMovieList] = useState([]); // data movie list

  useEffect(() => {
    getMovieData().then((movie) => {
      setMovieList(movie);
    });
  }, []);

  return movieList; // { data: [], loading: true }
};

export default useMovieData;
