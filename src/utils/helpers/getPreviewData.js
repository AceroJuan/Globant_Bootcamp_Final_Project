/***
 * API call to the movie database' to get one movie or tvshow,
 * profile_img was created in that way because the API return a incomplete url
 * so we need to interpolate the url with de variable to get the image
 */

import defaultImg2 from "../../assets/defaultImg2.jpg";

const getPreviewData = async (id, path) => {
  const url = `https://api.themoviedb.org/3/${path}/${id}?api_key=34041f61c196b07d1af8c759950a0672&language=en-US`;
  const resp = await fetch(url);
  const data = await resp.json();

  const preview = {
    id: data.id,
    backdrop_path: data.backdrop_path,
    backdrop_img: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
    overview: data.overview,
    release_date: data.release_date,
    poster: data.poster_path,
    title: data.title,
    name: data.name,
    first_air_date: data.first_air_date,
    runtime: data.runtime,
    vote_average: data.vote_average,
    poster_img: data.poster_path
      ? `https://image.tmdb.org/t/p/w300/${data.poster_path}`
      : defaultImg2,
  };
  return preview;
};

export default getPreviewData;
