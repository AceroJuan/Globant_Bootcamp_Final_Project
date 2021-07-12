import defaultImg from "../../assets/defaultImg.jpg";
const getCreditsData = async (id, path) => {
  const url = `https://api.themoviedb.org/3/${path}/${id}/credits?api_key=34041f61c196b07d1af8c759950a0672&language=en-US`;
  const resp = await fetch(url);
  const { cast } = await resp.json();
  const credits = await cast?.map((data) => {
    return {
      ...data,
      credits_profile_path: data.profile_path
        ? `https://image.tmdb.org/t/p/w300${data.profile_path}`
        : defaultImg,
    };
  });
  return credits;
};

export default getCreditsData;
