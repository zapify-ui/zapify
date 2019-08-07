import React from "react";
import PropTypes from "prop-types";
import "./Typography.css";

function Typography(props) {
  const { variant, children } = props;
  return variant === "h1" ? (
    <h1 className="typography">{children}</h1>
  ) : (
    <div className="typography">{children}</div>
  );
}
Typography.propTypes = {
  variant: PropTypes.string
};

export default Typography;
