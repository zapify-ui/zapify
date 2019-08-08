/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import "./AppBar.css";

function AppBar(props) {
  const { title, numberOfLinks } = props;
  const links = [];
  for (let i = 0; i < numberOfLinks; i++) {
    links.push(
      <li className="link">
        <a>{i}</a>
      </li>
    );
  }

  return (
    <div id="navigation-bar">
      <nav>
        <ul>
          <li>
            <a href="#" id="logo">
              {title}
            </a>
          </li>
          {links}
        </ul>
      </nav>
    </div>
  );
}

AppBar.propTypes = {
  title: PropTypes.string,
  numberOfLinks: PropTypes.number
};

AppBar.defaultProps = {
  title: "Zapify UI",
  numberOfLinks: 3
};

export default AppBar;
