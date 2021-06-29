import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import useSearchData from "../../utils/hooks/useSearchData";
import { useSearch } from "../../utils/context/useSearchContext";
import SearchResultItem from "../views/searchResultItem/SearchResultItem";

const SearchResults = () => {
  const { state } = useSearch();
  const [dataList, setWord] = useSearchData();
  useEffect(() => {
    setWord(state);
  }, [state]);

  return (
    <>
      <ul className="search">
        {dataList.map((item) => (
          <SearchResultItem item={item} />
        ))}
      </ul>
    </>
  );
};

SearchResults.propTypes = {};

export default SearchResults;
