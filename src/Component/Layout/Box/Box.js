import React,{useState} from 'react';
import './Box.css';

const Box = (props) => {
    // const property = props.property;
    // this color is {props.property}
    return(
        <div className={props.property}>
           "this is awesome"
        </div>
    )
}

export default Box;