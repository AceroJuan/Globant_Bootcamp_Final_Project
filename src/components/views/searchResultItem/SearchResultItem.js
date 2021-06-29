import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'

const SearchResultItem = ({ item }) => {
  return (
    <>
      <li className="search__item">
        <img
          className="search__img"
          src={item.poster_img}
          alt={`poster of ${item.title}`}
          title={item.title}
        />
        <article className="search__article">
          <h3 className="search_h3 ">
            <Link className="search__a transition" to={`/preview/${item.id}`}>
              {item.title || ""}{" "}
            </Link>
          </h3>
          <p className="search__p">{`${item.release_date}`}</p>
          <p className="search__p">{`${item.overview}`}</p>
        </article>
      </li>
    </>
  );
};

SearchResultItem.propTypes = {};

export default SearchResultItem;
