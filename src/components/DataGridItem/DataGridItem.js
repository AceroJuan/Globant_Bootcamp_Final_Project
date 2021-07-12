import React from "react";
import defaultImg from "../../assets/defaultImg.jpg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles.css";

const DataGridItem = ({ id, title, poster_img, path }) => {
  return (
    <div className="card transition">
      <Link className="card__a" to={`${path}/preview/${id}`}>
        <img
          data-testid="dataGridItemImg"
          className="card__a__img"
          src={poster_img ? poster_img : defaultImg}
          alt={`poster of ${title}`}
          title={title}
        />
        <p className="card__a__p" data-testid="dataGridItem">
          {title}
        </p>
      </Link>
    </div>
  );
};

DataGridItem.defaultProps = {
  title: "title",
};

DataGridItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_img: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default DataGridItem;
