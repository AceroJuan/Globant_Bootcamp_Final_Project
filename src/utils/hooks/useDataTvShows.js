import { useState, useEffect } from "react";
import getDataTvShows from "../helpers/getDataTvShows";

const useDataTvShows = () => {
  const [tvShow, setTvShow] = useState([]); // data movie tv Shows

  useEffect(() => {
    getDataTvShows().then((tvShow) => {
      setTvShow(tvShow);
    });
  }, []);

  return tvShow;
};

export default useDataTvShows;
