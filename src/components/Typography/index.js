import React from "react";
import PropTypes from "prop-types";
import "./Typography.css";

function Typography(props) {
  const { variant, children } = props;
  switch (variant) {
    case "h1":
      return <h1 className="typography">{children}</h1>;
    case "h2":
      return <h2 className="typography">{children}</h2>;
    case "h3":
      return <h3 className="typography">{children}</h3>;
    case "h4":
      return <h4 className="typography">{children}</h4>;
    case "h5":
      return <h5 className="typography">{children}</h5>;
    default:
      return <p className="typography">{children}</p>;
  }
}
Typography.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.string
};

Typography.defaultProps = {
  variant: "h5",
  children: "Zapify Ui Text"
};
export default Typography;
