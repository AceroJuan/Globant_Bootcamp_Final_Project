import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'

const PeopleGridItem = ({ id, name, profile_img }) => {
  return (
    <>
      <div className="main__card transition">
        <Link className="main__a" to={`/person/${id}`}>
          <img className="main__img" src={profile_img} alt={profile_img} />
          <p className="main__p">{name}</p>
        </Link>
      </div>
    </>
  );
};

// PeopleGridItem.propTypes = {

// }

export default PeopleGridItem;
