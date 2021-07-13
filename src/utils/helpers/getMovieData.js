/***
 * API call to the movie database' to get terending movies,
 * Poster_img was created in that way because the API return a incomplete url
 * so we need to interpolate the url with de variable to get the image
 */
import defaultImg from "../../assets/defaultImg.jpg";

const getMovieData = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=34041f61c196b07d1af8c759950a0672`;
  const resp = await fetch(url);
  const { results } = await resp.json();
  const data = results.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      poster: movie.poster_path,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      poster_img: movie.poster_path
        ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
        : defaultImg,
    };
  });

  return data;
};

export default getMovieData;
