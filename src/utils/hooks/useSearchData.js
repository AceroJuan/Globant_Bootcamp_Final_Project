import { useState, useEffect } from "react";
import { useSearch } from "../context/useSearchContext";
import defaultImg from "../../assets/defaultImg.jpg";
import defaultImg2 from "../../assets/defaultImg2.jpg";

const useSearchData = () => {
  const [word, setWord] = useState("");
  const { setState } = useSearch();

  useEffect(() => {
    const getMovieSearch = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=34041f61c196b07d1af8c759950a0672&language=en-US&page=1&include_adult=false&query=${word}`;
      const resp = await fetch(url);
      const { results } = await resp.json();

      const movieData = results.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          poster: movie.poster_path,
          release_date: movie.release_date,
          vote_average: movie.vote_average,
          poster_img: movie.poster_path
            ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
            : defaultImg2,
        };
      });

      setState((prevData) => {
        return {
          ...prevData,
          movies: movieData,
        };
      });
      setWord("");
    };

    const getTvShowSearch = async () => {
      const url = `https://api.themoviedb.org/3/search/tv?api_key=34041f61c196b07d1af8c759950a0672&language=en-US&page=1&include_adult=false&query=${word}`;
      const resp = await fetch(url);
      const { results } = await resp.json();
      const tvData = results.map((tv) => {
        return {
          id: tv.id,
          name: tv.name,
          overview: tv.overview,
          first_air_date: tv.first_air_date,
          vote_average: tv.vote_average,
          poster_img: tv.poster_path
            ? `https://image.tmdb.org/t/p/w300/${tv.poster_path}`
            : defaultImg2,
        };
      });

      setState((prevData) => {
        return {
          ...prevData,
          tv: tvData,
        };
      });
      setWord("");
    };

    const getPeopleSearch = async () => {
      const url = `https://api.themoviedb.org/3/search/person?api_key=34041f61c196b07d1af8c759950a0672&language=en-US&page=1&include_adult=false&query=${word}`;
      const resp = await fetch(url);
      const { results } = await resp.json();
      console.log(results);
      const peopleData = results.map((people) => {
        return {
          id: people.id,
          name: people.name,
          known_for: people.known_for,
          known_for_department: people.known_for_department,
          profile_path: people.profile_path
            ? `https://image.tmdb.org/t/p/w300${people.profile_path}`
            : defaultImg,
        };
      });

      setState((prevData) => {
        return {
          ...prevData,
          people: peopleData,
        };
      });
      setWord("");
    };

    if (word.length > 1) {
      getMovieSearch();
      getTvShowSearch();
      getPeopleSearch();
    }
  }, [setState, word]);

  return setWord;
};

export default useSearchData;
