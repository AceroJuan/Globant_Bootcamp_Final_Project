import React from "react";
import { useParams } from "react-router-dom";
import usePersonData from "../../utils/hooks/usePersonData";
import "./styles.css";
// import PropTypes from "prop-types";

// use params (id)
// helper y hook para llamar a una sola persona dependiendo del id
// https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US

const Person = () => {
  let { id } = useParams();
  const {
    birthday,
    biography,
    known_for_department,
    name = "name",
    place_of_birth,
    profile_img,
  } = usePersonData(id);

  return (
    <main className="person animate__animated animate__fadeIn animate__delay-1s">
      <picture className="person__picture">
        <img
          className="person__picture__img"
          src={profile_img}
          alt={`poster of ${name}`}
          title={name}
        />
      </picture>

      <div className="person__card">
        <h1 className="person__card__h1" data-testid="person">
          {name}
        </h1>
        <div className="person__card__bio">
          <h2 className="person__card__bio__h2 capitalize">biography</h2>
          <p className="person__card__bio__p capitalize">{biography}</p>
        </div>
        <div className="person__card__info">
          <p className="person__card__info__p capitalize">
            <b>birthday</b>
            {birthday}
          </p>
          <p className="person__card__info__p capitalize">
            <b>place of birth</b>
            {place_of_birth}
          </p>
          <p className="person__card__info__p capitalize">
            <b>known for</b> {known_for_department}
          </p>
        </div>
      </div>
    </main>
  );
};

// Person.propTypes = {};

export default Person;
