import { useEffect, useState } from "react";
import getPeopleData from "../helpers/getPeopleData";
// import PropTypes from "prop-types";

const usePeopleData = (id, path) => {
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    getPeopleData(id, path).then((people) => {
      setPeopleList(people);
    });
  }, [id, path]);
  return peopleList;
};

// usePeopleData.propTypes = {};

export default usePeopleData;
