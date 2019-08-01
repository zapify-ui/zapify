import React, { Component } from 'react';
import './containerStyles.scss';
import Proptypes from "prop-types";

export default class Container extends Component {
    render() {
      let typeName=this.props.type;
      let maxWidth=this.props.maxWidth;
      
      return (
        <div>
         {typeName ===  "fluid"       
            ? <div className={maxWidth}/>
            : <div style={{backgroundColor: '#F9690E',
                            height: '100vh'}}/>
          }

        </div>  
      );
    }
  }

Container.propType = {
    typeName: Proptypes.string,
    maxWidth: Proptypes.string
  };
  

