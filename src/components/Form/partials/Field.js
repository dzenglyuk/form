import React from "react";

import "./Field.css";

const supportedTypes = ["text", "number", "password", "date"];

const checkType = (type) => {
  return supportedTypes.includes(type) ? type : supportedTypes[0];
};

const Field = ({ label, type, id, handleChange, value, valid }) => {
  const errorClass = valid === true ? "input_error_holder" : "input_error";
  return (
    <React.Fragment>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={checkType(type)}
        onChange={handleChange}
        value={value}
        autoComplete="off"
      />
      <p className={errorClass}>
        {valid === true ? null : valid.error}
      </p>
    </React.Fragment>
  );
};

export default Field;
