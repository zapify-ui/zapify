import React, { Component } from "react";
import Proptypes from "prop-types";
import "../../../Styles/styles.scss";
export default class Button extends Component {
  render() {
    return (
      <div>
        <button className={this.props.color}>{this.props.color}</button>
      </div>
    );
  }
}
Button.propType = {
  color: Proptypes.string
};
