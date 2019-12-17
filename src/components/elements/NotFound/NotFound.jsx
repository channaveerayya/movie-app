import React from "react";
import VideoCmp from "../VideoPage/VideoCmp";
import vid from "../../img/videos/404.mp4";
const NotFound = props => {
  return (
    <div className="LandingPage">
      <VideoCmp video={vid} position={"absolute"} />
      <h1 className="heading-primary">
        <span
          className="heading-primary--main"
          style={{ color: "red", width: "100%", margin: "auto 15%" }}
        >
          {props.error}{" "}
        </span>
      </h1>
    </div>
  );
};

export default NotFound;
