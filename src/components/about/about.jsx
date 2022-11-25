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
              Cairo Bricks is based in the UK, with our factory back in Egypt.
              Bricks are our core focus. Quality over quantity. We produce a
              particular brick from the finest materials to produce a brick that
              is both finely made yet also great value.
            </p>
          </Fade>
          <Fade right>
            <p className="about__p">
              Cairo Bricks supports all employees with fair trade. Our employees
              also receive safe working conditions, fair pay and workers’
              rights. This in our belief, is the bare minimum. To be transparent
              about our ethical beliefs is our main priority. We ensure all
              parties involved adhere to internationally recognised standards in
              all endeavours.
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
