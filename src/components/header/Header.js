import React from "react";
import Search from "../search/Search";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import "./styles.css";
// import PropTypes from "prop-types";

const Header = () => {
  return (
    <header className="header">
      <h2>
        <Link className="header__h2__a" to="/">
          hola movies
        </Link>
      </h2>
      <Navbar />
      <Search />
    </header>
  );
};

Header.propTypes = {};

export default Header;
