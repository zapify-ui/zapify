// import React, { Component } from "react";
// import Proptypes from "prop-types";
// import "./Grid.css";

// export default class GridSpacing extends Component {
//   constructor(props) {
//     super(props);

//     this.createTable = this.createTable.bind(this);
//   }

//   createTable = props => {
//     let table = [];
//     const nBox = this.props.nBox;
//     const m = this.props.m;
//     // Outer loop to create parent
//     for (let i = 0; i < 1; i++) {
//       let children = [];
//       //Inner loop to create children
//       for (let j = 0; j < nBox; j++) {
//         children.push(
//           <td>
//             <div
//               className="GridBox"
//               style={{
//                 margin: `${m}rem`
//               }}
//             >
//               {this.props.children}
//             </div>
//           </td>
//         );
//       }
//       //Create the parent and add the children
//       table.push(
//         <tbody>
//           <tr>{children}</tr>
//         </tbody>
//       );
//     }
//     return table;
//   };
//   render() {
//     return (
//       <div className="GridSpacing">
//         <table>{this.createTable}</table>
//       </div>
//     );
//   }
// }

// GridSpacing.propType = {
//   nBox: Proptypes.number,
//   m: Proptypes.number
// };
