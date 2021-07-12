import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.css";

const SearchResultItem = ({ item, path }) => {
  return (
    <div className="li animate__animated animate__fadeIn animate__delay-1s">
      <img
        data-testid="searchResultItemImg"
        className="li__img"
        src={item.poster_img}
        alt={`poster of ${item.title || item.name}`}
        title={item.title}
      />
      <div className="li__article">
        <h2 className="li__article__h2" data-testid="searchResultItemh3">
          <Link
            className="li__article__h2__a transition"
            to={`/${path}/preview/${item.id}`}
            data-testid="searchResultItemA"
          >
            {item.title || item.name}
          </Link>
        </h2>
        <p className="li__article__p" data-testid="searchResultItemP">{`${
          item.release_date || item.first_air_date
        }`}</p>
        <p className="li__article__p">{`${item.overview}`}</p>
      </div>
    </div>
  );
};

SearchResultItem.propTypes = {
  item: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
};

export default SearchResultItem;
