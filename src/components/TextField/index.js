/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import PropTypes from "prop-types";
import "./TextField.css";

function TextField(props) {
  return (
    <div>
      <label>{props.children}</label>
      <input className="input" />
    </div>
  );
}
TextField.propTypes = {
  label: PropTypes.string
};

export default TextField;
