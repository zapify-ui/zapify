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
        const m = (this.props.m);
        // Outer loop to create parent
        for (let i = 0; i < 1; i++) {
          let children = []
          //Inner loop to create children
          for (let j = 0; j < nBox; j++) {
            children.push(<td><div className="GridBox" style={{
                    margin: `${m}rem`
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
             <table>{this.createTable()}</table>
            </div>
            );
    }
}

function tweetLength(props, nBox, GridSpacing) {
    GridSpacing = GridSpacing || 'ANONYMOUS';
  
    if (props[nBox]) {
      let value = props[nBox];
      if (typeof value === 'number') {
          return (value>2 && value<7) ? null : new Error(" is longer than 140 characters");
      }
    }
  
    // assume all ok
    return null;
  }

GridSpacing.propType = {
    nBox: tweetLength
  };

