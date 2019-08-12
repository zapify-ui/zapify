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
        const content = props.children;
        return (
          <div>
            {/* {
              (typeGet === "linear") ? 
              <Linear value={typeGet} content={content}/> :
              <Nested value={typeGet} content={content}/>
            } */}
            <ABD typeGet={typeGet} content={content}/>
          </div>
        )
      }
 
      function ABD({typeGet, content}) {
        if(typeGet === "linear"){
          return <Linear value={typeGet} content={content}/>
        } else if(typeGet === "nested") {
         return <Nested value={typeGet} content={content}/>
        } else {
          console.log("props error")
        }
      }
      

      const Linear = ({props, content}) => {
        return (
                <div className="Media">
                    <div>
                         <img
                             src="https://tinyurl.com/yylsuh97"
                             alt="Generic placeholder"
                          />
                    </div>
                    <div>
                         <h3>Media Heading</h3>
                         <p>{content}</p>
                    </div>
                  </div> 
              )
      }

      
      const Nested = ({props, content}) => {
        return (
                  <div>
                    <div className="Media">
                      <div>
                        <img
                          src="https://tinyurl.com/yylsuh97"
                          alt="Generic placeholder"
                        />
                      </div>
                      <div>
                        <h3>Heading 1</h3>
                        <p>{content}</p>
                      </div>
                    </div>
                    <div style={{ paddingLeft: "10vw" }}>
                      <div className="Media">
                        <div>
                          <img
                            src="https://tinyurl.com/yylsuh97"
                            alt="Generic placeholder"
                          />
                        </div>
                        <div>
                          <h3>Heading 2</h3>
                          <p>{content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
              );
      }

         
          


Media.propType = {
  typeGet: Proptypes.oneOf(["linear", "nested"])
};

export default Media;
