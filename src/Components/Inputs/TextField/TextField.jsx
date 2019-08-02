import React, { Component } from "react";
import PropTypes from "prop-types";

import "./inputStyles.scss";
export default class TextField extends Component {
  render() {
    return (
      <div>
        <label> {this.props.children}</label>
        <input className="input" />
      </div>
    );
  }
}
TextField.propTypes = {
  label: PropTypes.string
};
