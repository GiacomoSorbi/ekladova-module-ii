import React from "react";
import "./input.css";

const Input = ({ type, id, onChange, className, label }) => {
  return (
    <>
      {label && (
        <label className="inputLabel" htmlFor={id}>
          {label}:
        </label>
      )}
      <input
        className={className}
        type={type}
        id={id}
        onChange={onChange}
      ></input>
    </>
  );
};

export default Input;
