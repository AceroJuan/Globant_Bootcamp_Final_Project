import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { Link } from "react-router-dom";

const Cast = ({ character, credits_profile_path, name, id }) => {
  return (
    <div className="cast">
      <div className="cast__card">
        <Link className="cast__card__a" to={`/person/${id}`}>
          <img
            className="cast__card__img"
            src={credits_profile_path}
            alt={`poster of ${name}`}
          />
          <p className="cast__card_person" data-testid="cast">
            {name}
          </p>
          <p className="cast__card_character">{character}</p>
        </Link>
      </div>
    </div>
  );
};

Cast.defaultProps = {
  name: "name",
};

Cast.propTypes = {
  character: PropTypes.string.isRequired,
  credits_profile_path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Cast;
