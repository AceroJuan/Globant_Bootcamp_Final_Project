import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

const menuItems = ["movies", "tv_shows", "people"];

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

export default Navbar;
