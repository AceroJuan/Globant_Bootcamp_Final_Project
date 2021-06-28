import { useState, useEffect } from "react";
import { useSearch } from "../context/useSearchContext";

const useSearchData = () => {
  const [dataList, setDataList] = useState([]); // data movie list
  const [word, setWord] = useState(""); // palabra de busqueda

  /***
   * llamada al API 'the movie database' para obtener listado de pelicuales tendencias,
   * poster_img se estructura de esa manera debido a que el API entrega el link de la imagen incompleta, es decir
   * se debe interpolar la variable a la url espeficicada en la documentacion de la API para formar el link de la imagen
   */
  const getMovieSearch = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=34041f61c196b07d1af8c759950a0672&language=en-US&page=1&include_adult=false&query=${word}`;
    const resp = await fetch(url);
    const { results } = await resp.json();
    console.log(results);
    const data = results.map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        poster_img: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
      };
    });

    setDataList((currentState) => [...currentState, ...data]);
  };

  const getTvShowSearch = async () => {
    const url = `https://api.themoviedb.org/3/search/tv?api_key=34041f61c196b07d1af8c759950a0672&language=en-US&page=1&include_adult=false&query=${word}`;
    const resp = await fetch(url);
    const { results } = await resp.json();
    console.log(results);
    const data = results.map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        poster_img: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
      };
    });
    setDataList((currentState) => [...currentState, ...data]);
  };

  useEffect(() => {
    if (word.length) {
      getMovieSearch();
      getTvShowSearch();
    }
  }, [word]);

  return [dataList, setWord];
};

export default useSearchData;
