import React from "react";
import { useParams } from "react-router-dom";
import { useSearch } from "../../utils/context/useSearchContext";
import SearchResultItem from "../searchResultItem/SearchResultItem";
import { v4 as uuidv4 } from "uuid";
// import PropTypes from "prop-types";

const SearchResults = () => {
  let { id, path } = useParams();
  const { state } = useSearch(id, path);

  return (
    <main>
      <section>
        <h3>movies</h3>
        <ul className="search">
          {state?.movies?.map((item) => (
            <SearchResultItem key={uuidv4()} item={item} path={"movie"} />
          ))}
        </ul>
      </section>
      <section>
        <h3>tv shows</h3>
        <ul className="search">
          {state?.tv?.map((item) => (
            <SearchResultItem key={uuidv4()} item={item} path={"tv"} />
          ))}
        </ul>
      </section>
      <section>
        <h3>tv shows</h3>
        <ul className="search">
          {state?.people?.map((item) => (
            <SearchResultItem key={uuidv4()} item={item} path={"people"} />
          ))}
        </ul>
      </section>
    </main>
  );
};

SearchResults.propTypes = {};

export default SearchResults;
