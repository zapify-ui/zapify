import React from "react";
import PropTypes from "prop-types";
import "./Typography.css";

function Typography(props) {
  const { variant, children, color } = props;
  const _styles = { color };
  switch (variant) {
    case "h1":
      return (
        <h1 className="typography" style={_styles}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className="typography" style={_styles}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className="typography" style={_styles}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className="typography" style={_styles}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className="typography" style={_styles}>
          {children}
        </h5>
      );
    default:
      return (
        <p className="typography" style={_styles}>
          {children}
        </p>
      );
  }
}
Typography.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.string,
  color: PropTypes.string
};

Typography.defaultProps = {
  variant: "h5",
  children: "Zapify Ui Text",
  color: "#111"
};
export default Typography;
