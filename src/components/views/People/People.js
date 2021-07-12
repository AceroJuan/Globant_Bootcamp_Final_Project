import React from "react";
import usePeopleData from "../../../utils/hooks/usePeopleData";
import PeopleGridItem from "../../PeopleGridItem/PeopleGridItem";
import "./styles.css";

const People = () => {
  const peopleData = usePeopleData();
  return (
    <>
      <main className="cards">
        <h1
          className="cards__h1 capitalize px animate__animated animate__fadeIn"
          data-testid="people"
        >
          people
        </h1>
        <div className="cards__grid animate__animated animate__fadeIn animate__delay-1s">
          {peopleData.map((people) => (
            <PeopleGridItem key={people.id} {...people} />
          ))}
        </div>
      </main>
    </>
  );
};

export default People;
