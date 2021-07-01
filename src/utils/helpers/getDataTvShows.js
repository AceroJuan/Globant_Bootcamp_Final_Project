/***
 * llamada al API 'the movie database' para obtener listado de pelicuales tendencias,
 * poster_img se estructura de esa manera debido a que el API entrega el link de la imagen incompleta, es decir
 * se debe interpolar la variable a la url espeficicada en la documentacion de la API para formar el link de la imagen
 */

const getDataTvShows = async () => {
  const url = `https://api.themoviedb.org/3/tv/popular?api_key=34041f61c196b07d1af8c759950a0672&language=en-US&page=1`;
  const resp = await fetch(url);
  const { results } = await resp.json();

  const data = results.map((tvShow) => {
    return {
      id: tvShow.id,
      title: tvShow.name,
      overview: tvShow.overview,
      poster: tvShow.poster_path,
      vote_average: tvShow.vote_average,
      poster_img: `https://image.tmdb.org/t/p/w300${tvShow.poster_path}`,
    };
  });

  return data;
};

export default getDataTvShows;
