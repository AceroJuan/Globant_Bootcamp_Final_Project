const getPeopleData = async () => {
  const url = `https://api.themoviedb.org/3/person/popular?api_key=34041f61c196b07d1af8c759950a0672&language=en-US&page=1`;
  const resp = await fetch(url);
  const { results } = await resp.json();

  const data = await results.map((people) => {
    return {
      id: people.id,
      known_for: people.known_for,
      known_for_department: people.known_for_department,
      name: people.name,
      popularity: people.popularity,
      profile_path: people.profile_path,
      profile_img: `https://image.tmdb.org/t/p/w300${people.profile_path}`,
    };
  });

  return data;
};

export default getPeopleData;

// const url = `https://api.themoviedb.org/3/person/{person_id}?api_key=34041f61c196b07d1af8c759950a0672&language=en-US`
// get person data
// use person data
