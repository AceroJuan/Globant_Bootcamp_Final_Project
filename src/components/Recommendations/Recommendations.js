import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { Link } from "react-router-dom";

const Recommendations = ({
  recommendation_backdrop_path,
  title,
  name,
  release_date,
  id,
  path,
}) => {
  return (
    <>
      <div className="recommendation">
        <div className="recommendation__card">
          <Link className="recommendation__card__a" to={`${id}`}>
            <img
              className="recommendation__card__img"
              src={recommendation_backdrop_path}
              alt={`poster of ${name}`}
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

Recommendations.propTypes = {};

export default Recommendations;
