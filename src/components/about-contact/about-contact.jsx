import React from "react";
import "./about-contact.scss";
import egypt from "../../assets/animation/Untitled design (1).gif";
import Fade from "react-reveal/Fade";
import house from "../../assets/images/viktor-forgacs-fHYztTcPZvU-unsplash.jpg";
import { Link } from "react-router-dom";
function HomeContact() {
  return (
    <div className="homeContact">
      <div className="homeContact__container">
        <Fade left>
          <div className="homeContact__img-container">
            <img
              className="homeContact__img"
              src={house}
              alt="image of bricks"
            />
          </div>
        </Fade>

        <div className="homeContact__text">
          <div className="homeContact__text-text">
            <Fade top>
              <h3 className="homeContact__title">
                Click here to get in contact!
              </h3>
            </Fade>
            <Fade bottom>
              <Link to="/contact">
                <button className="homeContact__button">Contact</button>
              </Link>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContact;
