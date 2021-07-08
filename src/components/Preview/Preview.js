import React from "react";
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import usePreviewData from "../../utils/hooks/usePreviewData";
import "./styles.css";

const Preview = () => {
  let { id, path } = useParams();
  const {
    poster_img,
    title = "name",
    name = "name",
    release_date,
    first_air_date,
    overview,
  } = usePreviewData(id, path);

  return (
    <div className="preview animate__animated animate__fadeIn animate__delay-1s">
      <img src={poster_img} alt={`poster of ${title}`} title={title} />
      <article className="preview__article">
        <h2 data-testid="preview">{`${title || name}`}</h2>
        <p className="preview__article__p">{`release date: ${
          release_date || first_air_date
        }`}</p>
        <h3 className="preview__article__h3">overview</h3>
        <p className="preview__article__p">{`${overview}`}</p>
      </article>
    </div>
  );
};

Preview.propTypes = {};

export default Preview;
