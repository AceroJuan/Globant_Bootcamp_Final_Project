import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieGridItem = ({ id, title, poster_img }) => {
  return (
    <>
      <article className="main__card">
        <img
          className="main__img"
          src={poster_img}
          alt={`poster of ${title}`}
          title={title}
        />
        <p className="main__p">
          <Link className="main__a" to={`/preview/${id}`}>
            {title}
          </Link>
        </p>
      </article>
    </>
  );
};

MovieGridItem.propTypes = {};

export default MovieGridItem;
