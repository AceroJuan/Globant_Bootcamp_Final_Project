import React from "react";
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import usePreviewData from "../../../utils/hooks/usePreviewData";

const Preview = () => {
  let { id, path } = useParams();
  const { poster_img, title, name, release_date, first_air_date, overview } =
    usePreviewData(id, path);

  return (
    <section className="preview animate__animated animate__fadeIn animate__delay-1s">
      <img
        className=""
        src={poster_img}
        alt={`poster of ${title}`}
        title={title}
      />
      <article className="preview__article">
        <h2>{`${title || name}`}</h2>
        <p className="preview__p">{`release date: ${
          release_date || first_air_date
        }`}</p>
        <h3 className="preview__h3">overview</h3>
        <p className="preview__p">{`${overview}`}</p>
      </article>
    </section>
  );
};

Preview.propTypes = {};

export default Preview;
