/***
 * API call to the movie database' to get one person,
 * profile_img was created in that way because the API return a incomplete url
 * so we need to interpolate the url with de variable to get the image
 */

import defaultImg from "../../assets/defaultImg.jpg";
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
    profile_img: person.profile_path
      ? `https://image.tmdb.org/t/p/w300${person.profile_path}`
      : defaultImg,
  };

  return personData;
};

export default getPersonData;
