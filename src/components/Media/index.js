/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import Proptypes from "prop-types";
import "./Media.css";

function Media(props) {
  const { typeGet, image } = props;
  const content = props.children;
  return (
    <div>
      <Rendering typeGet={typeGet} content={content} image={image} />
    </div>
  );
}

function Rendering({ typeGet, content, image }) {
  if (typeGet === "linear") {
    return <Linear value={typeGet} content={content} image={image} />;
  }
  if (typeGet === "nested") {
    return <Nested value={typeGet} content={content} image={image} />;
  }
}

const Linear = ({ content, image }) => {
  return (
    <div className="mediaLinear">
      <div className="Media">
        <div>
          <img src={image} alt="Generic placeholder" />
        </div>
        <div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

const Nested = ({ props, image }) => {
  return (
    <div className="mediaNested">
      <div className="Media">
        <div>
          <img src={image} alt="Generic placeholder" />
        </div>
        <div>
          <p>{props.children}</p>
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
