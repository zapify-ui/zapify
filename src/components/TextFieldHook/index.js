/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from "react";
import "./TextFieldHook.css";

function TextFieldHook(props) {
  const [input, setInput] = useState("");
  const styles = { color: props.color };
  const handleChange = e => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const { placeholderText } = props;
  return (
    <div>
      <label style={styles}>{props.children}</label>
      <input
        className="input"
        type="text"
        name="text"
        onChange={handleChange}
        value={input}
        placeholder={placeholderText}
      />
    </div>
  );
}

export default TextFieldHook;
