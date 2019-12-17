import React, { Component } from "react";
import "./VideoCmp.scss";
class VideoCmp extends Component {
  render() {
    let bgVideo = {
      position: this.props.position,
      top: 0,
      left: 0,
      height: " 100%",
      width: " 100%",
      zIndex: -1,
      overflow: "hidden"
    };
    return (
      <div className="VideoCmp" style={bgVideo}>
        <video className="VideoCmp__content" autoPlay muted loop>
          <source src={this.props.video} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default VideoCmp;
