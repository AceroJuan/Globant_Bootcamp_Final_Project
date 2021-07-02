import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'

const SearchResultItem = ({ item, path }) => {
  return (
    <li className="search__item animate__animated animate__fadeIn animate__delay-1s">
      <img
        className="search__img"
        src={item.poster_img}
        alt={`poster of ${item.title}`}
        title={item.title}
      />
      <article className="search__article">
        <h3 className="search_h3 ">
          <Link
            className="search__a transition"
            to={`${path}/preview/${item.id}`}
          >
            {item.title || item.name}
          </Link>
        </h3>
        <p className="search__p">{`${
          item.release_date || item.first_air_date
        }`}</p>
        <p className="search__p">{`${item.overview}`}</p>
      </article>
    </li>
  );
};

SearchResultItem.propTypes = {};

export default SearchResultItem;
