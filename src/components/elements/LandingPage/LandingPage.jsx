import React from "react";
import "./LandingPage.scss";

import vid from "../../img/videos/Hero.mp4";
import spider from "../../img/spider.png";

import VideoCmp from "../VideoPage/VideoCmp";
import Button from "../Buttons/Button/Button";

const LandingPage = props => {
  return (
    <div className="LandingPage">
      <VideoCmp video={vid} position={"absolute"} />
      <div className="LandingPage__logo-box">
        <img src={spider} alt="logo" className="LandingPage__logo" />
      </div>
      <div className="LandingPage__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">well come </span>
          <span className="heading-primary--sub">
            best movie experience here{" "}
          </span>
        </h1>
        <a href="#fourCallGrid">
          <Button btnText="Discover More Films" btnBgColor="btn--maroon" />
        </a>
      </div>
    </div>
  );
};
export default LandingPage;
