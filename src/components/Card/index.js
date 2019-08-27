/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import Proptypes from "prop-types";
import Typography from "../Typography";
import "./Card.css";

function Card(props) {
  const { children, buttonText, titleText } = props;
  return (
    <div className="container">
      <div className="card">
        <div className="text">
          {" "}
          <Typography color="black" className="text">
            {children}
          </Typography>
        </div>
      </div>
      <div className="title_rectangle">
        {" "}
        <div className="Title__text">{titleText}</div>
      </div>

      <div className="button">
        <div className="Button_text">{buttonText}</div>
      </div>
    </div>
  );
}
Card.defaultProps = {
  buttonText: "Done",
  titleText: "ZapCard",
  children: "Contents"
};

Card.propTypes = {
  buttonText: Proptypes.string,
  titleText: Proptypes.string,
  children: Proptypes.string
};
export default Card;
