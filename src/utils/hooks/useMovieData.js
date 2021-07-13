import { useState, useEffect } from "react";
import getMovieData from "../helpers/getMovieData";

const useMovieData = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieData().then((movie) => {
      setMovieList(movie);
    });
  }, []);

  return movieList;
};

export default useMovieData;
