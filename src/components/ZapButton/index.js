/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import Proptypes from "prop-types";
import "./ZapButton.css";

function ZapButton(props) {
const { variant } = props;

  return (
    <div>
      <button className={variant}>{props.children}</button>
    </div>
  );
}

ZapButton.propType = {
  variant: Proptypes.string
};
export default ZapButton;
