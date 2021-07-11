import React from "react";
import { useParams } from "react-router-dom";
import { useSearch } from "../../utils/context/useSearchContext";
import SearchResultItem from "../SearchResultItem/SearchResultItem";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import FilterMenu from "../FilterMenu/FilterMenu";
// import PropTypes from "prop-types";

const SearchResults = () => {
  const { filter } = useParams();
  const { state } = useSearch();

  return (
    <main className="search__main">
      <FilterMenu />
      <section data-testid="searchResults">
        {filter === "movies" ? (
          <ul className="main__section__ul">
            {state?.movies?.map((item) => (
              <SearchResultItem key={uuidv4()} item={item} path={"movie"} />
            ))}
          </ul>
        ) : filter === "tv" ? (
          <ul className="main__section__ul">
            {state?.tv?.map((item) => (
              <SearchResultItem key={uuidv4()} item={item} path={"tv"} />
            ))}
          </ul>
        ) : filter === "people" ? (
          <ul className="main__section__ul">
            {state?.people?.map((item) => (
              <SearchResultItem key={uuidv4()} item={item} path={"people"} />
            ))}
          </ul>
        ) : null}
      </section>
    </main>
  );
};

SearchResults.propTypes = {};

export default SearchResults;
