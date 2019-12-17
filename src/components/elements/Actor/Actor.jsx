import React from "react";
import { IMAGE_BASE_URL } from "../../../config";
import "./Actor.scss";
import defImg from "../../img/logo.png";
const Actor = props => {
  const POSTER_SIZE = "w154";
  return (
    <div className="actor">
      <img
        src={
          props.actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.actor.profile_path}`
            : defImg
        }
        alt="Actor"
      />
      <h3 className="heading-tertiary u-margin-bottom-small">
        {props.actor.name}
      </h3>
      <p className="actor__text">{props.actor.character}</p>
    </div>
  );
};

export default Actor;
