import React,{Component} from "react";
// import PropTypes from "prop-types";
import Proptypes from "prop-types";
import "./boxStyles.scss";


export default class Box extends Component {
  render() { 
    const boxPrimary = this.props.color;
    const boxPadding = `${this.props.p}em`
    const boxMargin  = `${this.props.m}em`
    
    return ( 
      <div 
        className={boxPrimary}
        style={{
          padding: `${boxPadding}`,
          margin: `${boxMargin}`
        }}
      >
          This is {this.props.color}
      </div>
     );   
  }
}

Box.propType = {
  color: Proptypes.string,
  p: Proptypes.number
};
 








// const Box = props => {
//   // const property = props.property;
//   // this color is {props.property}
//   return <div className={props.property}>"this is awesome"</div>;
// };

// export default Box;
