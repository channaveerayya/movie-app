import React, { Component } from "react";
import "./HeroImage.scss";

import Button from "../Buttons/Button/Button";
class HeroImage extends Component {
  render() {
    return (
      <div className="HeroImage">
        <div className="hero">
          <div className="row hero__mar-top">
            <div className="col-1-of-2">
              <img className="imgs" src={this.props.image} alt="" />
            </div>
            <div className="col-1-of-2">
              <h1 className="heading-primary">
                <span className="heading-primary--main">
                  {this.props.title}
                </span>
                <span>{this.props.text}</span>
              </h1>

              <Button btnText="Book" btnBgColor="btn--white" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroImage;
