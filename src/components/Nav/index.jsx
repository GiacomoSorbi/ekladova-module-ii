import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <>
      <nav className="nav-bar">
        <a href="/ekladova-module-ii/">
          <div className="nav-logo"></div>
        </a>
        <ul className="nav-list">
          <li key="homeLink" className="nav-list-li">
            <NavLink to="/" exact className="nav-list-element">
              Home
            </NavLink>
          </li>
          <li key="aboutLink" className="nav-list-li">
            <NavLink to="/about" className="nav-list-element">
              About
            </NavLink>
          </li>
          <li key="portLink" className="nav-list-li">
            <NavLink to="/portfolio" className="nav-list-element">
              Portfolio-Game
            </NavLink>
          </li>
          <li key="checkoutLink" className="nav-list-li">
            <NavLink to="/checkout" className="nav-list-element">
              Checkout
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
