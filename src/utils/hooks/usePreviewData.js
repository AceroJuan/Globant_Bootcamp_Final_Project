import { useEffect, useState } from "react";
import getPreviewData from "../helpers/getPreviewData";
/***
 * fetch
 * resp
 * save in state
 * export state
 */

const usePreviewData = (id, path) => {
  const [preview, setPreview] = useState({});

  useEffect(() => {
    getPreviewData(id, path).then((preview) => {
      setPreview(preview);
    });
  }, [id, path]);

  return preview;
};

export default usePreviewData;
