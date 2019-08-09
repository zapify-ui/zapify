/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import "./AppBar.css";

function AppBar(props) {
  const {
    title,
    links,
    logoImage,
    color,
    linkColor,
    logoColor,
    logoSize
  } = props;
  const _linkList = [];
  const appBarBackground = {
    backgroundColor: color
  };

  const _styles = {
    height: "3em",
    margin: logoSize
  };

  const _logoColor = {
    color: logoColor
  };

  for (let i = 0; i < links.length; i++) {
    _linkList.push(
      <li
        style={{ float: "right ", padding: ".29em .5em .5em .5em" }}
        className="link"
      >
        <a style={{ color: linkColor }}>{links[i]}</a>
      </li>
    );
  }

  return (
    <div id="navigation-bar">
      <nav style={appBarBackground}>
        <ul>
          <li>
            {" "}
            <img src={logoImage} style={_styles} alt="logoImage" />
            <a href="#" id="logo" style={_logoColor}>
              {title}
            </a>
          </li>
          {_linkList.reverse()}
        </ul>
      </nav>
    </div>
  );
}

AppBar.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string,
  linkColor: PropTypes.string,
  logoColor: PropTypes.string,
  logoImage: PropTypes.string,
  logoSize: PropTypes.string
};

AppBar.defaultProps = {
  title: "Zapify UI",
  links: ["Rebooting", "UI ", "with", "Hooks"],
  color: "#222",
  linkColor: "grey",
  logoColor: "grey",
  logoImage:
    "https://camo.githubusercontent.com/56702c11ebd0c8817ee8d95b1e45022b97083b8a/68747470733a2f2f692e6962622e636f2f5832334e4877362f612e706e67",
  logoSize: "-2em 0em -0.8em 0.2em"
};

export default AppBar;
