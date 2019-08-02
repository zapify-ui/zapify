import React, { Component } from "react";
import "./typography.scss";

export default class Typography extends Component {
  render() {
    return <div className="typography">{this.props.children}</div>;
  }
}
