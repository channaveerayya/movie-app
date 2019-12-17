import React, { Component } from "react";
import BtnStyle from "./Button.module.scss";
class Button extends Component {
  render() {
    let classNames = [
      BtnStyle.btn,
      BtnStyle[this.props.btnBgColor],
      BtnStyle["btn--animated"]
    ].join(" ");
    return (
      <div className={classNames} onClick={this.props.onClick}>
        {this.props.btnText}
      </div>
    );
  }
}

export default Button;
