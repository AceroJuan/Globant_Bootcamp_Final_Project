import { useState, useEffect } from "react";
import getCreditsData from "../helpers/getCreditsData";

const useCreditsData = (id, path) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getCreditsData(id, path).then((credits) => {
      setCredits(credits);
    });
  }, [id, path]);

  return credits;
};

export default useCreditsData;
