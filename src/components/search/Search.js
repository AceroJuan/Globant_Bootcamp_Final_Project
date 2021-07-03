import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSearch } from "../../utils/context/useSearchContext";
// import PropTypes from "prop-types";
import useSearchData from "../../utils/hooks/useSearchData";
import "./styles.css";

const Search = () => {
  let history = useHistory();
  const { setState } = useSearch();

  const setWord = useSearchData();

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length >= 2) {
      setState([]);
      setWord(inputValue);
      history.push("/search");
    } else {
      alert("write a movie name in the field 'find a movie'");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label" for="search_field">
        search
      </label>
      <input
        className="form__input"
        id="search_field"
        name="search_field"
        onChange={handleInputChange}
        type="text"
        value={inputValue}
      />
    </form>
  );
};

// AddMovie.propTypes = {};

export default Search;
