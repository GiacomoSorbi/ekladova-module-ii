import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const [click, setClick] = useState(false);

  const onClick = () => {
    setClick(!click);
    click
      ? (document.getElementById("productCart").classList = "cart-notice")
      : (document.getElementById("productCart").classList = "hidden");
  };

  return (
    <>
      <nav className="nav-bar">
        <a href="/">
          <div className="nav-logo"></div>
        </a>
        <ul className="nav-list">
          <NavLink to="/" className="nav-list-element">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-list-element">
            About
          </NavLink>
          <NavLink to="/" className="nav-list-element">
            Shop
          </NavLink>
          <NavLink to="/" className="nav-list-element">
            Portfolio
          </NavLink>
          <span
            className="cart-icon"
            onClick={onClick}
            role="img"
            aria-label="cart"
          >
            🛒
          </span>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
