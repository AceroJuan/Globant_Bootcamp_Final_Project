/***
 * API call to the movie database' to get recommendations based on a movie or tvshow,
 * recommendation_backdrop_path was created in that way because the API return a incomplete url
 * so we need to interpolate the url with de variable to get the image
 */

const getRecommendationsData = async (id, path) => {
  const url = `https://api.themoviedb.org/3/${path}/${id}/recommendations?api_key=34041f61c196b07d1af8c759950a0672&language=en-US&page=1`;
  const resp = await fetch(url);
  const { results } = await resp.json();
  const recommendations = await results.map((data) => {
    return {
      ...data,
      recommendation_backdrop_path: `https://image.tmdb.org/t/p/w300${data.backdrop_path}`,
    };
  });
  return recommendations;
};

export default getRecommendationsData;
