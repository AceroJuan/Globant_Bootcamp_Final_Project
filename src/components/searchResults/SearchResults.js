import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import useSearchData from "../../utils/hooks/useSearchData";
import { useSearch } from "../../utils/context/useSearchContext";

const SearchResults = () => {
  const { state } = useSearch();
  const [dataList, setWord] = useSearchData();
  useEffect(() => {
    setWord(state);
  }, [state]);

  return (
    <>
      <ul>
        {dataList.map((item) => {
          return <li key={item.id}>{item.title || ""}</li>;
        })}
      </ul>
    </>
  );
};

SearchResults.propTypes = {};

export default SearchResults;
