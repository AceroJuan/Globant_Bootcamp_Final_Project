import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles.css";

const DataGridItem = ({ id, title = "title", poster_img, path }) => {
  return (
    <div className="div transition">
      <Link className="div__a" to={`${path}/preview/${id}`}>
        <img
          className="div__a__img"
          src={poster_img}
          alt={`poster of ${title}`}
          title={title}
        />

        <p className="div__a__p" data-testid="dataGridItem">
          {title}
        </p>
      </Link>
    </div>
  );
};

DataGridItem.propTypes = {};

export default DataGridItem;
