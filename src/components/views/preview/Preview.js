import React from "react";
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import usePreviewData from "../../../utils/hooks/usePreviewData";

const Preview = () => {
  let { id } = useParams();
  const { poster_img, title, release_date, overview } = usePreviewData(id);

  return (
    <>
      <section className="preview">
        <img
          className=""
          src={poster_img}
          alt={`poster of ${title}`}
          title={title}
        />
        <article className="preview__article">
          <h2 className="preview__h2">{`${title}`}</h2>
          <p className="preview__p">{`release date: ${release_date}`}</p>
          <h3 className="preview__h3">overview</h3>
          <p className="preview__p">{`${overview}`}</p>
        </article>
      </section>
    </>
  );
};

Preview.propTypes = {};

export default Preview;
