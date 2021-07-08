import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FilterMenu = () => {
  return (
    <ul>
      <li data-testid="filter">
        <Link to="/search/movies">movies</Link>
      </li>
      <li>
        <Link to="/search/tv">tv shows</Link>
      </li>
      <li>
        <Link to="/search/people">people</Link>
      </li>
    </ul>
  );
};

FilterMenu.propTypes = {};

export default FilterMenu;
