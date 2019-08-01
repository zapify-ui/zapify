import React, { Component } from "react";
import Proptypes from "prop-types";
import "./boxStyles.scss";

export default class Box extends Component {
  render() {
    const boxColor = this.props.color;
    const boxPadding = `${this.props.p}em`;
    const boxMargin = `${this.props.m}em`;

    return (
      <div
        className={boxColor}
        style={{
          padding: `${boxPadding}`,
          margin: `${boxMargin}`
        }}
      >
        This is {this.props.color}
      </div>
    );
  }
}

Box.propType = {
  color: Proptypes.string,
  p: Proptypes.number
};
