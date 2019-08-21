/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import Proptypes from "prop-types";
import "./ZapButton.css";

function ZapButton(props) {

const { color, textColor } = props;
const _styles = {
  background: color,
  color: textColor
}


  return (
    <div>
      <button style={_styles}>{props.children}</button>
    </div>
  );
}

// Button.propType = {
//   color: Proptypes.string
// };
export default ZapButton;
