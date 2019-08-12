/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import Proptypes from "prop-types";
import "./Button.css";
import "../../styles/ColorSchema";

function Button(props) {
  const styles = {
    position: "relative",
    display: "inline-block",
    verticalAlign: "middle",
    padding: "0 0.3em",
    height: "2.4em",
    borderRadius: "5px",
    lineHeight: "2.1",
    overflow: "hidden",
    fontSize: "1.1em",
    margin: "10px 10px 10px 10px",
    letterSpacing: "0.01em",
    maxWidth: "100%",
    textOverflow: "ellipsis",
    whiteSpace: "normal",
    userSelect: "none",
    cursor: "pointer",
    background:
      props.color === "primaryColor"
        ? "linear-gradient(60deg, #1badf8, #63da38)"
        : Button.defaultProps.color,
    textAlign: "center",
    textDecoration: "none"
  };
  return (
    <div>
      <button style={styles}>{props.children}</button>
    </div>
  );
}

Button.propType = {
  color: Proptypes.string
};

Button.defaultProps = {
  color: "#1badf8"
};

export default Button;
