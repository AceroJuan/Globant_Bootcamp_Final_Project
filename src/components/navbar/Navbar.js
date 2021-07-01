import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// import PropTypes from "prop-types";

const menuItems = ["movies", "tv"];

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav__ul">
          {menuItems.map((item) => (
            <li className="nav__li" key={uuidv4()}>
              <Link className="nav__li__a transition" to={`/${item}`}>
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
