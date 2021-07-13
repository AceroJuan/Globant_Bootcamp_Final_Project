import { useEffect, useState } from "react";
import getPersonData from "../helpers/getPersonData";

const usePersonData = (id) => {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    getPersonData(id).then((person) => {
      setPerson(person);
    });
  }, [id]);
  return person;
};

export default usePersonData;
