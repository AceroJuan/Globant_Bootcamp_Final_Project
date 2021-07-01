import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DataGridItem = ({ id, title, poster_img, path }) => {
  return (
    <div className="main__card transition">
      <Link className="main__a" to={`${path}/preview/${id}`}>
        <img
          className="main__img"
          src={poster_img}
          alt={`poster of ${title}`}
          title={title}
        />
        <p className="main__p">{title}</p>
      </Link>
    </div>
  );
};

DataGridItem.propTypes = {};

export default DataGridItem;
