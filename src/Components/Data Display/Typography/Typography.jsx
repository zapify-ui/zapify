import React, { Component } from "react";
import PropTypes from "prop-types";

import "./typography.scss";

export default class Typography extends Component {
  render() {
    return this.props.variant === "h1" ? (
      <h1 className="typography">{this.props.children}</h1>
    ) : (
      <div className="typography">{this.props.children}</div>
    );
  }
}
Typography.propTypes = {
  variant: PropTypes.string
};
