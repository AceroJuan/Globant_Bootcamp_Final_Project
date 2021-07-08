import { useEffect, useState } from "react";
import getPersonData from "../helpers/getPersonData";
// import PropTypes from "prop-types";

const usePersonData = (id) => {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    getPersonData(id).then((person) => {
      setPerson(person);
    });
  }, [id]);
  return person;
};

// usePersonData.propTypes = {};

export default usePersonData;
