/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from "react";
import Proptypes from "prop-types";
import "./Media.css";
      function Media(props) {
        const {typeGet} = props;
        return <div>{<InnerFunc typeGet={typeGet} />}</div>;
      }

                  function InnerFunc(props) {
                    if (props.typeGet === "linear") {
                      return (
                            <div className="Media">
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
                                      <p>{props.children}</p>
                                  </div>
                            </div>
                      );
                    } else if (props.typeGet === "nested") {
                      return (
                          <div>
                            <div className="Media">
                              <div>
                                <img
                                  height={64}
                                  width={64}
                                  src="https://tinyurl.com/yylsuh97"
                                  alt="Generic placeholder"
                                />
                              </div>
                              <div>
                                <h3>Outer Paragraph</h3>
                                <p>happy coding</p>
                              </div>
                            </div>
                            <div style={{ paddingLeft: "10vw" }}>
                              <div className="Media">
                                <div>
                                  <img
                                    height={64}
                                    width={64}
                                    src="https://tinyurl.com/yylsuh97"
                                    alt="Generic placeholder"
                                  />
                                </div>
                                <div>
                                  <h3>Inner Paragraph</h3>
                                  <p>{props.children}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                      );
                    } else {
                      console.log("Error");
                    }
                    return;
                  }

Media.propType = {
  typeGet: Proptypes.oneOf(["linear", "nested"])
};

export default Media;
