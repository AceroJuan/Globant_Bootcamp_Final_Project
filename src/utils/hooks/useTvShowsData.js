import { useState, useEffect } from "react";
import getTvShowsData from "../helpers/getTvShowsData";

const useTvShowsData = () => {
  const [tvShow, setTvShow] = useState([]);

  useEffect(() => {
    getTvShowsData().then((tvShow) => {
      setTvShow(tvShow);
    });
  }, []);

  return tvShow;
};

export default useTvShowsData;
