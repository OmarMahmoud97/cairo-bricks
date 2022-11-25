import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Cairo.svg";
import "./Nav.scss";
function Nav() {
  return (
    <div className="nav">
      <div className="nav__container">
        <Link to="/">
          <img
            className="nav__logo"
            src={logo}
            alt="company logo stating Cairo Bricks"
          />
        </Link>
        <ul className="nav__list">
          <Link to="/" className="nav__item">
            Home
          </Link>
          <Link to="/products" className="nav__item">
            Products
          </Link>
          <Link to="/contact" className="nav__item">
            Contact
          </Link>
          <Link to="/login" className="nav__item">
            Login
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
