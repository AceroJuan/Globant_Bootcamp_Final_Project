import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'
import "./styles.css";

const PeopleGridItem = ({ id, name, profile_img, path }) => {
  return (
    <div className="div transition">
      <Link className="div__a" to={`/person/${id}`}>
        <img className="div__a__img" src={profile_img} alt={profile_img} />
        <p className="div__a__p">{name}</p>
      </Link>
    </div>
  );
};

// PeopleGridItem.propTypes = {

// }

export default PeopleGridItem;
