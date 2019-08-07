import React, { Component } from "react";
import PropTypes from "prop-types";

import "./TextField.css";
function TextField(props) {
const {children }= props;
    return (
      <div>
        <label> {props.children}</label>
        <input className="input" />
      </div>
    );
  
}
TextField.propTypes = {
  label: PropTypes.string
};

export default TextField;