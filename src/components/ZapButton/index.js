/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import Proptypes from "prop-types";
 import "./ZapButton.css";

function ZapButton(props) {
  return (
    <div>
      {/* <button className={props.color}>{props.children}</button> */}
      <button className="primary">hello kns</button>
    </div>
  );
}

// Button.propType = {
//   color: Proptypes.string
// };
export default ZapButton;
