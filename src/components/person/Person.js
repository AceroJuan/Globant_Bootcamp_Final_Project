import React from "react";
import usePeopleData from "../../utils/hooks/usePeopleData";
// import PropTypes from "prop-types";

const Person = () => {
  const peopleData = usePeopleData();

  return (
    <>
      {peopleData?.map(
        ({
          id,
          known_for,
          known_for_department,
          name,
          popularity,
          profile_img,
        }) => (
          <section className="preview animate__animated animate__fadeIn animate__delay-1s">
            <img
              className=""
              src={profile_img}
              alt={`poster of ${name}`}
              title={name}
            />
            <article className="preview__article">
              <h2>{name}</h2>
              <p>{id}</p>
              <p className="preview__p">{`known_for: ${known_for}`}</p>
              <h3 className="preview__h3">known_for_department</h3>
              <p className="preview__p">{known_for_department}</p>
              <h3 className="preview__h3">popularity</h3>
              <p className="preview__p">{popularity}</p>
            </article>
          </section>
        )
      )}
    </>
  );
};

// Person.propTypes = {};

export default Person;
