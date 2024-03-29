import React from "react";
import "./Spinner.scss";
const Spinner = props => {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
