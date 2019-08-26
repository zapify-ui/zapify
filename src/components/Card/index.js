/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import "./Card.css";
import Typography from "../Typography";

function Card1() {
  return (
    <div className="container">
      <div className="card">
        <div className="text">
          {" "}
          <Typography color="black" className="text">
            dsadsadjksabdjhasvdjhsaghjdgyjasgdhjasghdgashdgahsdkasjdlihasukdhskajhdkjsahkjdhsajkd
          </Typography>
        </div>
      </div>
      <div className="title_rectangle">
        {" "}
        <div className="Title__text">Hello</div>
      </div>

      <div className="button">
        <div className="Button_text">Yaha ayega</div>
      </div>
    </div>
  );
}

export default Card1;
