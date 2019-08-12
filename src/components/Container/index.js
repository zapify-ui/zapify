/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import Proptypes from "prop-types";

import "./Container.css";

function Container(props) {
  const { maxWidth, typeName } = props;

  return (
    <div>
      {typeName === "fluid" ? (
        <div className={maxWidth} />
      ) : (
        <div style={{ backgroundColor: "#F9690E", height: "100vh" }} />
      )}
    </div>
  );
}

Container.propType = {
  typeName: Proptypes.string,
  maxWidth: Proptypes.string
};

export default Container;
