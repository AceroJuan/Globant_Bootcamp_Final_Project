import React from "react";
import AddMovie from "../addMovie/AddMovie";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <h1>hola movies</h1>
        </Link>
        <ul className="nav__ul">
          <li className="nav__li"></li>
          <li className="nav__li">
            <Link className="nav__a transition" to="/movies">
              movies
            </Link>
          </li>
          <li className="nav__li">
            <Link className="nav__a transition" to="/tv">
              tv shows
            </Link>
          </li>
          <li className="nav__li">
            <Link className="nav__a transition" to="/trending">
              trending
            </Link>
          </li>
          <li className="nav__li">
            <Link className="nav__a transition" to="/search">
              search
            </Link>
          </li>
        </ul>
        <AddMovie />
      </nav>
    </header>
  );
};

Header.propTypes = {};

export default Header;
