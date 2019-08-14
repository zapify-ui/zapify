/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import Proptypes from "prop-types";
import React from "react";
import "./Box.css";
import Typography from "../Typography";

function Box(props) {
  const { color, textColor } = props;
  const boxPadding = `${props.p}em`;
  const boxMargin = `${props.m}em`;

  const _styles = {
    padding: `${boxPadding}`,
    margin: `${boxMargin}`,
    color: `${textColor}`,
    textColor: { textColor }
  };

  return (
    <div className={color} style={_styles}>
      <Typography>
        This is: {color} with textColor: {textColor}
      </Typography>
    </div>
  );
}

Box.defaultProps = {
  color: "black",
  textColor: "white",
  p: "2em",
  m: "2.5em"
};

Box.propTypes = {
  color: Proptypes.string,
  textColor: Proptypes.string,
  p: Proptypes.number,
  m: Proptypes.number
};

export default Box;
