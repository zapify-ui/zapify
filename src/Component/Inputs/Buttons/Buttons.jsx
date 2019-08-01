import React, { Component } from "react";
import Proptypes from "prop-types";
import "./styles.scss";

export default class Button extends Component {
  render() {
    return (
      <a href className={`${this.props.color} `}>
        {this.props.color}
      </a>
    );
  }
}
Button.propType = {
  color: Proptypes.string
};
