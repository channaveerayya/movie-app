import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

const Navigation = props => {
  return (
    <div className="navigationBar">
      <div className="navigationBar-content">
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>{props.movie}</p>
      </div>
    </div>
  );
};

export default Navigation;
