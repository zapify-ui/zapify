// /* eslint-disable react/destructuring-assignment */
// /* eslint-disable react/button-has-type */
// /* eslint-disable react/prefer-stateless-function */

// import React from "react";
// import Proptypes from "prop-types";
// import "./Grid.css";

// export default function GridSpacing(){
  

//   const createTable = props => {
//     let table = [];
//     const nBox = props.nBox;
//     const m = props.m;
//     console.log(nBox);
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
//               {props.children}
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
//     return (
//       <div className="GridSpacing">
//         <table>{this.createTable}</table>
//       </div>
//     );

// }

// GridSpacing.propType = {
//   nBox: Proptypes.number,
//   m: Proptypes.number
// };
