import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'
import "./styles.css";

const PeopleGridItem = ({ id, name = "name", profile_img, path }) => {
  return (
    <div className="card transition">
      <Link className="card__a" to={`/person/${id}`}>
        <img
          className="card__a__img"
          src={profile_img}
          alt={`person: ${name}`}
        />
        <p className="card__a__p" data-testid="peopleGridItem">
          {name}
        </p>
      </Link>
    </div>
  );
};

// PeopleGridItem.propTypes = {

// }

export default PeopleGridItem;
