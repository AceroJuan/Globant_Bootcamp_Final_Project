import React from "react";
// import PropTypes from "prop-types";
import usePeopleData from "../../../utils/hooks/usePeopleData";
import PeopleGridItem from "../../PeopleGridItem";

const People = () => {
  const dataPeople = usePeopleData();

  return (
    <>
      <main>
        <h2 className="capitalize center px animate__animated animate__fadeIn">
          people
        </h2>
        <div className="card__grid animate__animated animate__fadeIn animate__delay-1s">
          {dataPeople?.map((people) => (
            <PeopleGridItem key={people.id} path={"people"} {...people} />
          ))}
        </div>
      </main>
    </>
  );
};

// People.propTypes = {};

export default People;
