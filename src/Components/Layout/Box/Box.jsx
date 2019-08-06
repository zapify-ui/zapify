import React, { Component } from "react";
import Proptypes from "prop-types";
import "./boxStyles.scss";

export default class Box extends Component {
  render() {
    const boxColor = this.props.color;
    const boxPadding = `${this.props.p}em`;
    const boxMargin = `${this.props.m}em`;
    const textColor = this.props.color === "disabled" ? ("black") : ("white");
    return (
      <div
        className={boxColor}
        style={{
          padding: `${boxPadding}`,
          margin: `${boxMargin}`,
          color: `${textColor}`
        }}
      >
        This is {this.props.color}
      </div>
    );
  }
}

Box.propTypes = {
  color: Proptypes.string,
  p: Proptypes.number,
  m: Proptypes.number
};
