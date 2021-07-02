import { useEffect, useState } from "react";
import getPeopleData from "../helpers/getPeopleData";
// import PropTypes from "prop-types";

const usePeopleData = () => {
  const [peopleList, setPeopleList] = useState();

  useEffect(() => {
    getPeopleData().then((people) => {
      setPeopleList(people);
    });
  }, []);

  return peopleList;
};

// usePeopleData.propTypes = {};

export default usePeopleData;
