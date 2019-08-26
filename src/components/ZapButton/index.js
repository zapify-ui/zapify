/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import Proptypes from "prop-types";
import "./ZapButton.css";

function ZapButton(props) {
  const { variant } = props;
  const _styles = {
    margin: "15px"
  };
  return (
    <div>
      <button className={variant} style={_styles}>
        {props.children}
      </button>
    </div>
  );
}

ZapButton.propType = {
  variant: Proptypes.string
};

ZapButton.defaultProps = {
  variant: "paperButton"
};
export default ZapButton;
