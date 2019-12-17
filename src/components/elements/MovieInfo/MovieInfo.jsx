import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../../config";
import "./MovieInfo.scss";
import defaultImg from "../../img/logo.png";
import FontAwesome from "react-fontawesome";

const MovieInfo = props => {
  return (
    <div
      className="movieinfo"
      style={{
        background: props.movie.backdrop_path
          ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.movie.backdrop_path}')`
          : "#000"
      }}
    >
      <div className="movieinfo-content">
        <div className="movieinfo-thumb">
          <div className="thumb">
            <img
              src={
                props.movie.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}`
                  : defaultImg
              }
              alt=""
            />
          </div>
        </div>
        <div className="movieinfo-text">
          <h1>{props.movie.original_title}</h1>
          <h3>PLOT</h3>
          <p>{props.movie.overview}</p>
          <h3>Ratings</h3>
          <div className="rating">
            <meter
              min="0"
              max="100"
              optimum="100"
              low="40"
              high="70"
              value={props.movie.vote_average * 10}
            ></meter>
            <p className="score">{props.movie.vote_average}</p>
          </div>
          {props.directors.length > 1 ? <h3>Directors</h3> : <h3>Director</h3>}

          {props.directors.map((dir, i) => {
            return (
              <p key={i} className="director">
                {dir.name}
              </p>
            );
          })}
        </div>
        <FontAwesome className="fa-film" name="film" size="5x" />
      </div>
    </div>
  );
};

export default MovieInfo;
