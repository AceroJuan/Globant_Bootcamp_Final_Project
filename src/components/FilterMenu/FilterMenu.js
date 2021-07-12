import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import "./styles.css";

const menuItems = ["movies", "tv", "people"];

const FilterMenu = () => {
  return (
    <ul className="sidebar">
      <p className="sidebar__p" data-testid="filterMenu">
        search results
      </p>
      {menuItems.map((item) => (
        <li className="sidebar__p__li" key={uuidv4()}>
          <Link className="sidebar__P__li__a transition" to={`/search/${item}`}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FilterMenu;
