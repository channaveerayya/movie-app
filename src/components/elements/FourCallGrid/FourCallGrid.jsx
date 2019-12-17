import React from "react";
import "./FourCallGrid.scss";
const FourCallGrid = props => {
  return (
    <div className="FourCallGrid">
      <div className="u-center-text u-margin-bottom-big">
        <div className=" heading-primary"></div>
        {props.header && !props.loading ? (
          <h2 className="heading-primary--main">{props.header}</h2>
        ) : null}
      </div>
      <div className="grid">
        <div className="grid-content">
          {props.children.map((element, i) => {
            return (
              <div className="grid-element" key={i}>
                {element}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FourCallGrid;
