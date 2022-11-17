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
            <h2 className="bottom__title">Header</h2>
            <div className="bottom__img-cont">
              <img className="bottom__img" src={egypt} alt="" />
            </div>
            <p className="bottom__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              magni quasi odit optio, inventore atque, rerum soluta iure
              aspernatur quas veritatis vitae ipsum, iste et dignissimos sequi
              sed aperiam? Nesciunt.
            </p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="bottom__card">
            <h2 className="bottom__title">Header</h2>
            <div className="bottom__img-cont">
              <img className="bottom__img" src={egypt} alt="" />
            </div>
            <p className="bottom__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              magni quasi odit optio, inventore atque, rerum soluta iure
              aspernatur quas veritatis vitae ipsum, iste et dignissimos sequi
              sed aperiam? Nesciunt.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="bottom__card">
            <h2 className="bottom__title">Header</h2>
            <div className="bottom__img-cont">
              <img className="bottom__img" src={egypt} alt="" />
            </div>
            <p className="bottom__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              magni quasi odit optio, inventore atque, rerum soluta iure
              aspernatur quas veritatis vitae ipsum, iste et dignissimos sequi
              sed aperiam? Nesciunt.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Bottom;
