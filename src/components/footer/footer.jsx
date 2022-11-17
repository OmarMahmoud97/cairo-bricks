import React from "react";
import "./footer.scss";
import logo from "../../assets/images/Cairo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <Link>
        <img className="footer__logo" src={logo} alt="" />
      </Link>
      <div className="footer__input">
        <label className="footer__label" htmlFor="footer_input">
          Sign Up Here For Monthly Offers And News!
        </label>
        <input
          className="footer__input-box"
          type="text"
          placeholder="Email"
          name="footer_input"
        />
      </div>
      <div className="footer__nav">
        <ul className="footer__list">
          <Link to="/" className="footer__item">
            Home
          </Link>
          <Link to="/products" className="footer__item">
            Products
          </Link>
          <Link to="/contact" className="footer__item">
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
