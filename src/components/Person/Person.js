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
    popularity,
    profile_img,
  } = usePersonData(id);

  return (
    <>
      <section className="preview animate__animated animate__fadeIn animate__delay-1s">
        <img
          className=""
          src={profile_img}
          alt={`poster of ${name}`}
          title={name}
        />
        <article className="preview__article">
          <h2 data-testid="person">{name}</h2>
          <p className="preview__p">
            {`birthday: ${birthday}`} {`place of birth: ${place_of_birth}`}
          </p>

          <p className="preview__p">{`biography: ${biography}`}</p>
          <h3 className="preview__h3">known_for_department</h3>
          <p className="preview__p">{known_for_department}</p>
          <h3 className="preview__h3">popularity</h3>
          <p className="preview__p">{popularity}</p>
        </article>
      </section>
    </>
  );
};

// Person.propTypes = {};

export default Person;
