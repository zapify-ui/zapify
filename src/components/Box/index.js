/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
// import Proptypes from "prop-types";
import "./Box.css";

function Box(props) {
  const boxColor = props.color;
  const boxPadding = `${props.p}em`;
  const boxMargin = `${props.m}em`;
  const textColor = props.color === "disabled" ? "black" : "white";
  return (
    <div
      className={boxColor}
      style={{
        padding: `${boxPadding}`,
        margin: `${boxMargin}`,
        color: `${textColor}`
      }}
    >
      This is {props.color}
    </div>
  );
}

// Box.defaultProps = {
//   color: "black",
//   p: "2em",
//   m: "2.5em"
// };

// Box.propTypes = {
//   color: Proptypes.string,
//   p: Proptypes.number,
//   m: Proptypes.number
// };

export default Box;
