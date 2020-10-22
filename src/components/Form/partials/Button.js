import React from "react";

import "./Button.css";

const validColors = ["blue", "green", "red"];

const checkColor = (color) => {
  return validColors.includes(color) ? color : validColors[0];
};

const Button = ({ text, color, handleClick }) => {
  return (
    <button onClick={handleClick} className={`form__btn ${checkColor(color)}`}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Click",
  color: "blue",
  handleClick: () => {
    console.log("Clicked");
  }
};

export default Button;
