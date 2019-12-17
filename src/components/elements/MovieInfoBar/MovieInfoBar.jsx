import React from "react";
import { calcTime, convertMoney } from "../../../helpers.js";
import "./MovieInfoBar.scss";
import FontAwesome from "react-fontawesome";

const MovieInfoBar = props => {
  return (
    <div className="movieinfobar">
      <div className="movieinfobar-content">
        <div className="movieinfobar-content-col">
          <FontAwesome className="fa-time" name="clock-o" size="2x" />
          <span className="movieinfobar-info">
            Running Time : {calcTime(props.time)}
          </span>
        </div>
        <div className="movieinfobar-content-col">
          <FontAwesome className="fa-budget" name="money" size="2x" />
          <span className="movieinfobar-info">
            Budget : {convertMoney(props.budget)}
          </span>
        </div>
        <div className="movieinfobar-content-col">
          <FontAwesome className="fa-revenue" name="tiket" size="2x" />
          <span className="movieinfobar-info">
            Revenue : {convertMoney(props.revenue)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoBar;
