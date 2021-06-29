import { useEffect, useState } from "react";
/***
 * fetch
 * resp
 * save in state
 * export state
 */

const usePreviewData = (id) => {
  const [preview, setPreview] = useState({});

  const getPreviewData = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=34041f61c196b07d1af8c759950a0672&language=en-US`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    const preview = {
      id: data.id,
      backdrop_path: data.backdrop_path,
      backdrop_img: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
      overview: data.overview,
      release_date: data.release_date,
      poster: data.poster_path,
      poster_img: `https://image.tmdb.org/t/p/w300${data.poster_path}`,
      title: data.title,
      runtime: data.runtime,
      vote_average: data.vote_average,
    };

    setPreview(preview);
  };

  useEffect(() => {
    getPreviewData();
  }, []);

  return preview;
};

export default usePreviewData;
