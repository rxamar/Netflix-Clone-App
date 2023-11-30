import React from "react";
import "./input.css";
const Input = ({ label, value, type, onchange }) => {
  return (
    <>
      {label && <label>{label}</label>}
      <input type={type} value={value} onChange={onchange} />
    </>
  );
};

export default Input;
