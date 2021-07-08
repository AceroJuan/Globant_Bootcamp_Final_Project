import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";
// import PropTypes from "prop-types";

const menuItems = ["people", "movies", "tv_shows"];

const Navbar = () => {
  return (
    <>
      <nav className="nav" data-testid="navbar">
        <ul className="nav__ul">
          {menuItems.map((item) => (
            <li className="nav__ul__li" key={uuidv4()}>
              <Link className="nav__ul__li__a transition" to={`/${item}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
