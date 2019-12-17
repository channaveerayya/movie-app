import React from "react";
import { Link } from "react-router-dom";
import "./MovieThumb.scss";
import Button from "../Buttons/Button/Button";

const MovieThumb = props => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <img
          src={props.image}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="card__side card__side--back card__side--back-1">
        <div className="card__cta">
          <div className="card__price--box">
            <p className="card__price--only">Ratings : {props.vote_average}</p>
            <p className="card__price--value">{props.movieName}</p>
          </div>
          {props.clicked ? (
            <Link
              to={{
                pathname: `/${props.movieId}`,
                movieName: `/${props.movieName}`
              }}
            >
              <Button btnText="Details" btnBgColor="btn--white" />
            </Link>
          ) : (
            <Button btnText="Details" btnBgColor="btn--white" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieThumb;
