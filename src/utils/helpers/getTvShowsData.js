/***
 * API call to the movie database' to get a popular tvshows list ,
 * poster_img was created in that way because the API return a incomplete url
 * so we need to interpolate the url with de variable to get the image
 */
import defaultImg2 from "../../assets/defaultImg2.jpg";
const getTvShowsData = async () => {
  const url = `https://api.themoviedb.org/3/tv/popular?api_key=34041f61c196b07d1af8c759950a0672&language=en-US&page=1`;
  const resp = await fetch(url);
  const { results } = await resp.json();

  const data = results.map((tvShow) => {
    return {
      id: tvShow.id,
      title: tvShow.name,
      overview: tvShow.overview,
      vote_average: tvShow.vote_average,
      poster_img: tvShow.poster_path
        ? `https://image.tmdb.org/t/p/w300/${tvShow.poster_path}`
        : defaultImg2,
    };
  });

  return data;
};

export default getTvShowsData;
