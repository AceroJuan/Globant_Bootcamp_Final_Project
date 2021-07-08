const getPersonData = async (id) => {
  const url = `https://api.themoviedb.org/3/person/${id}?api_key=34041f61c196b07d1af8c759950a0672&language=en-US`;
  const resp = await fetch(url);
  const person = await resp.json();

  const personData = {
    id: person.id,
    birthday: person.birthday,
    biography: person.biography,
    known_for_department: person.known_for_department,
    name: person.name,
    place_of_birth: person.place_of_birth,
    popularity: person.popularity,
    profile_path: person.profile_path,
    profile_img: `https://image.tmdb.org/t/p/w300${person.profile_path}`,
  };

  console.log(personData);
  return personData;
};

export default getPersonData;
