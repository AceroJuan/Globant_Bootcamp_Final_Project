import { useEffect, useState } from "react";
import getPeopleData from "../helpers/getPeopleData";

const usePeopleData = (id, path) => {
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    getPeopleData(id, path).then((people) => {
      setPeopleList(people);
    });
  }, [id, path]);
  return peopleList;
};

export default usePeopleData;
