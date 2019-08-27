/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import Proptypes from "prop-types";
import { COLORS } from "../../styles/ColorSchema";
import "./Box.css";

function Box(props) {
  const { color } = props;
  let _style;
  if (color === "primary") {
    _style = { backgroundColor: COLORS.primary };
  } else {
    _style = { backgroundColor: COLORS.primary };
  }

  return <div className="box" style={_style} />;
}

Box.defaultProps = {
  color: COLORS.primary
};

Box.propTypes = {
  color: Proptypes.string
};

export default Box;
