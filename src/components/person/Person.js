import React from "react";
import { useParams } from "react-router-dom";
import { useSearch } from "../../utils/context/useSearchContext";
// import PropTypes from "prop-types";

const Person = () => {
  let { id } = useParams();
  // const people = usePeopleData(id);
  const people = useSearch(id);
  console.log("la people", people);
  return (
    <>
      <p>hola</p>
    </>
  );
};

// Person.propTypes = {};

export default Person;
