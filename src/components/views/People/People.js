import React from "react";
// import PropTypes from "prop-types";
import usePeopleData from "../../../utils/hooks/usePeopleData";
import PeopleGridItem from "../../PeopleGridItem/PeopleGridItem";
import "./styles.css";

const People = () => {
  const peopleData = usePeopleData();
  return (
    <>
      <main>
        <h2
          className="capitalize center px animate__animated animate__fadeIn"
          data-testid="people"
        >
          people
        </h2>
        <div className="main__div animate__animated animate__fadeIn animate__delay-1s">
          {peopleData.map((people) => (
            <PeopleGridItem key={people.id} {...people} />
          ))}
        </div>
      </main>
    </>
  );
};

// People.propTypes = {};

export default People;
