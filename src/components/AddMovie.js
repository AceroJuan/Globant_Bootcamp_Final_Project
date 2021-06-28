import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSearch } from "../utils/context/useSearchContext";

const AddMovie = ({ setMovies }) => {
  const { setNewValue } = useSearch();

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length >= 2) {
      setNewValue(inputValue);
    } else {
      alert("write a movie name in the field 'find a movie'");
    }
  };

  return (
    <form className="main__form" onSubmit={handleSubmit}>
      <label className="form__label">find a movie: </label>
      <input
        className="form__input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

AddMovie.propTypes = {
  setMovies: PropTypes.func.isRequired,
};

export default AddMovie;
