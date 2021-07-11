import React from "react";
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <header className="header" data-testid="header">
      <h2 className="header__h2">
        <Link className="header__h2__a" to="/">
          hola movies!
        </Link>
      </h2>
      <Navbar />
      <Search />
    </header>
  );
};

export default Header;
