import React from "react";
import "./about-contact.scss";
import egypt from "../../assets/animation/Untitled design (1).gif";
import Fade from "react-reveal/Fade";
import house from "../../assets/images/viktor-forgacs-fHYztTcPZvU-unsplash.jpg";
function HomeContact() {
  return (
    <div className="homeContact">
      <div className="homeContact__container">
        <div className="homeContact__img-container">
          <img className="homeContact__img" src={house} alt="image of bricks" />
        </div>
        <div className="homeContact__text">
          <div className="homeContact__text-text">
            <h3>Click here to get in contact!</h3>
            <button>Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContact;
