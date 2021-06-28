import { useState } from "react";
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
  };

  return getPreviewData();
};

export default usePreviewData;
