/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */

import React from "react";
import Proptypes from "prop-types";
import "./Grid.css";

function GridSpacing(props){
    const nBox = props.nBox;
    const m = props.m;
    return (
      <div className="GridSpacing">
       {<CreateTable nBox={nBox} m={m}/>}
      </div>
    );
}

 function CreateTable(props) {
    let table = [];
    const nBox = props.nBox;
    const m = props.m;
    console.log(nBox);
    // Outer loop to create parent
    for (let i = 0; i < 1; i++) {
      let children = [];
      //Inner loop to create children
      for (let j = 0; j < nBox; j++) {
        children.push(
          <td>
            <div
              className="GridBox"
              style={{
                margin: `${m}rem`
              }}
            >
              {props.children}
            </div>
          </td>
        );
      }
      //Create the parent and add the children
      table.push(
        <tbody>
          <tr>{children}</tr>
        </tbody>
      );
    }
    return table;
  };

GridSpacing.propType = {
  nBox: Proptypes.number,
  m: Proptypes.number
};

export default GridSpacing;