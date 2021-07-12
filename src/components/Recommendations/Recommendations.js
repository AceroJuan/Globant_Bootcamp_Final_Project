import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { Link } from "react-router-dom";

const Recommendations = ({ recommendation_backdrop_path, title, name, id }) => {
  return (
    <>
      <div className="recommendation">
        <div className="recommendation__card">
          <Link className="recommendation__card__a" to={`${id}`}>
            <img
              className="recommendation__card__img"
              src={recommendation_backdrop_path}
              alt={`poster of ${title ? title : name}`}
            />
            <p
              className="recommendation__card_person"
              data-testid="recommendations"
            >
              {title ? title : name}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

Recommendations.propTypes = {
  recommendation_backdrop_path: PropTypes.string.isRequired,
  title: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
};

export default Recommendations;
