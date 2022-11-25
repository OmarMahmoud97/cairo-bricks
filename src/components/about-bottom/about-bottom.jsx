import React from "react";
import "./about-bottom.scss";
import egypt from "../../assets/animation/Untitled design (1).gif";
import Fade from "react-reveal/Fade";
import vid from "../../assets/images/Untitled video (4).mp4";
import Slide from "react-reveal/Slide";

function Bottom() {
  return (
    <div className="bottom">
      <Slide right>
        <video className="bottom__video" src={vid} autoPlay loop muted />
      </Slide>
      <div className="bottom__container">
        <Fade left>
          <div className="bottom__card">
            <h2 className="bottom__title">Workers’ rights</h2>
            <div className="bottom__img-cont">
              <img className="bottom__img" src={egypt} alt="" />
            </div>
            <p className="bottom__text">
              All employees in the supply chain are given all work rights to be
              able to voice their opinions and optimize the workplace for
              everyone.
            </p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="bottom__card">
            <h2 className="bottom__title">Safe work environment</h2>
            <div className="bottom__img-cont">
              <img className="bottom__img" src={egypt} alt="" />
            </div>
            <p className="bottom__text">
              No-one should have to fear danger in the workplace, and we go to
              great miles to achieve a work place the brings comfort to all.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="bottom__card">
            <h2 className="bottom__title">Fair pay</h2>
            <div className="bottom__img-cont">
              <img className="bottom__img" src={egypt} alt="" />
            </div>
            <p className="bottom__text">
              All employees are paid fairly to ensure sustainable and secure
              lives for them
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Bottom;
