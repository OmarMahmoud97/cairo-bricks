import React from "react";
import building from "../../assets/images/building1.jpg";
import "./about.scss";
import Fade from "react-reveal/Fade";
import Bottom from "../about-bottom/about-bottom";
import HomeContact from "../about-contact/about-contact";
import Slide from "react-reveal/Slide";

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <Slide left>
          {" "}
          <img
            className="about__building"
            src={building}
            alt="image of a red bricked bulding"
          />
        </Slide>

        <div className="about__landing">
          <Fade right>
            <h1 className="about__title">Bricks for sale</h1>
          </Fade>
          <Fade right>
            <h3 className="about__sub">Best bricks in the world!</h3>
          </Fade>
          <Fade right>
            <p className="about__p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              quas voluptate veniam at totam consectetur veritatis aliquid
              similique harum atque sint exercitationem.
            </p>
          </Fade>
          <Fade right>
            <p className="about__p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              quas voluptate veniam at totam consectetur veritatis aliquid
              similique harum atque sint exercitationem.
            </p>
          </Fade>
        </div>
      </div>
      <Bottom />
      <HomeContact />
    </div>
  );
}

export default About;
