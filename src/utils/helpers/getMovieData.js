/***
 * llamada al API 'the movie database' para obtener listado de pelicuales tendencias,
 * poster_img se estructura de esa manera debido a que el API entrega el link de la imagen incompleta, es decir
 * se debe interpolar la variable a la url espeficicada en la documentacion de la API para formar el link de la imagen
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
