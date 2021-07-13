import { useState, useEffect } from "react";
import getRecommendationsData from "../helpers/getRecommendationsData";

const useRecommendationsData = (id, path) => {
  const [recommendation, setRecommendation] = useState([]);

  useEffect(() => {
    getRecommendationsData(id, path).then((recommendation) => {
      setRecommendation(recommendation);
    });
  }, [id, path]);

  return recommendation;
};

export default useRecommendationsData;
