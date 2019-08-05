import React, { Component } from 'react';
import Proptypes from "prop-types";
import './stylesGridSpacing.scss';

export default class GridSpacing extends Component {
    constructor(props) {
        super(props);
        this.createTable = this.createTable.bind(this);
    }

    createTable = () => {
        let table = []
        const nBox = this.props.nBox;
        // Outer loop to create parent
        for (let i = 0; i < 1; i++) {
          let children = []
          //Inner loop to create children
          for (let j = 0; j < nBox; j++) {
            children.push(<td><div className="GridBox" style={{
                    margin: "30px"
                }}>{this.props.children}</div></td>)
          }
          //Create the parent and add the children
          table.push(<tbody><tr>{children}</tr></tbody>)
        }
        return table
      }
    render() { 
        return ( 
            <div className="GridSpacing">
             {this.createTable()}
            </div>
            );
    }
}
 

GridSpacing.propType = {
    nBox: Proptypes.number
  }

