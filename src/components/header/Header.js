import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav>
          <ul className="nav__ul">
            <h1>hola movies</h1>
            <li className="nav__li">
              <Link to="/">home</Link>
            </li>
            <li className="nav__li">
              <Link to="/movies">movies</Link>
            </li>
            <li className="nav__li">
              <Link to="/tv">tv shows</Link>
            </li>
            <li className="nav__li">
              <Link to="/trending">trending</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

Header.propTypes = {};

export default Header;
