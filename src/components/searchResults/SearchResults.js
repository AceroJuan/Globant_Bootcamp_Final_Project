import React from "react";
import { useParams } from "react-router-dom";
import { useSearch } from "../../utils/context/useSearchContext";
import SearchResultItem from "../views/searchResultItem/SearchResultItem";
import { v4 as uuidv4 } from "uuid";
// import PropTypes from "prop-types";

const SearchResults = () => {
  let { id, path } = useParams();
  const { state } = useSearch(id, path);

  return (
    <main>
      <ul className="search">
        {state.map((item) => (
          <SearchResultItem key={uuidv4()} item={item} path={"movie"} />
        ))}
      </ul>
      {/* <ul className="search">
        {state.map((item) => (
          <SearchResultItem item={item} path={"movie"} />
        ))}
      </ul> */}
    </main>
  );
};

SearchResults.propTypes = {};

export default SearchResults;
