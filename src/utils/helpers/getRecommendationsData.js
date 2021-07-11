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
