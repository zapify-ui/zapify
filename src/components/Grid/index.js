import Proptypes from "prop-types";
import React from "react";
import "./Grid.css";
// eslint-disable-next-line import/imports-first
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */

function Grid(props) {
  return (
    <div>
      <div className={props.type}>{props.children}</div>
    </div>
  );
}

Grid.propType = {
  type: Proptypes.string
};
export default Grid;
