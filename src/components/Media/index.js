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
  const { typeGet, image } = props;
  const content = props.children;
  return (
    <div>
      {/* {
              (typeGet === "linear") ? 
              <Linear value={typeGet} content={content}/> :
              <Nested value={typeGet} content={content}/>
            } */}
      <Rendering typeGet={typeGet} content={content} image={image} />
    </div>
  );
}

function Rendering({ typeGet, content, image }) {
  if (typeGet === "linear") {
    return <Linear value={typeGet} content={content} image={image} />;
  } else if (typeGet === "nested") {
    return <Nested value={typeGet} content={content} image={image} />;
  } else {
    console.log("props error");
  }
}

const Linear = ({ props, content, image }) => {
  return (
    <div className="mediaLinear">
      <div className="Media">
        <div>
          <img src={image} alt="Generic placeholder" />
        </div>
        <div>
          <h1>Media Heading</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

const Nested = ({ props, content, image }) => {
  return (
    <div className="mediaNested">
      <div className="Media">
        <div>
          <img src={image} alt="Generic placeholder" />
        </div>
        <div>
          <h1>Heading 1</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem
          </p>
        </div>
      </div>
      <div style={{ paddingLeft: "10vw" }}>
        <div className="Media">
          <div>
            <img src={image} alt="Generic placeholder" />
          </div>
          <div>
            <h1>Heading 2</h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              makin g it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Media.propType = {
  typeGet: Proptypes.oneOf(["linear", "nested"]),
  image: Proptypes.string
};

export default Media;
