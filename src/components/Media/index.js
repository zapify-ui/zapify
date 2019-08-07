import React, { Component } from "react";
import Proptypes from "prop-types";

export default class Media extends Component {
  render() {
    if (this.props.typeGet === "linear") {
      return (
        <div style={{ display: "flex" }}>
          <div>
            <img
              height={64}
              width={64}
              src="https://tinyurl.com/yylsuh97"
              alt="Generic placeholder"
            />
          </div>
          <div>
            <h3>Media Heading</h3>
            <p>{this.props.children}</p>
          </div>
        </div>
      );
    } else if (this.props.typeGet === "nested") {
      return (
        <div>
          <img
            height={64}
            width={64}
            src="https://tinyurl.com/yylsuh97"
            alt="Generic placeholder"
          />
          <div>
            <h3>Hello</h3>
            <p>{this.props.children}</p>

            <div style={{ paddingLeft: "10vw" }}>
              <img
                height={64}
                width={64}
                src="https://tinyurl.com/yylsuh97"
                alt="Generic placeholder"
              />
              <div>
                <h3>Nested Hola</h3>
                <p>{this.props.children}</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      console.log("Error");
    }
  }
}
Media.propType = {
  typeGet: Proptypes.oneOf(["linear", "nested"])
};
