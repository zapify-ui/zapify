import React, { Component } from "react";
import Proptypes from "prop-types";
import Typography from "../../Data Display/Typography/Typography";
import "./buttonStyles.scss";

export default class Button extends Component {
  render() {
    return (
      <a href className={`${this.props.color} `}>
        <Typography> {this.props.children}</Typography>
      </a>
    );
  }
}
Button.propType = {
  color: Proptypes.string
};
