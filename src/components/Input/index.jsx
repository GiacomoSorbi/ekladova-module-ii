import React from "react";
import "./input.css";

const Input = ({ type, id, onChange, className, label, ...props }) => {
  return (
    <>
      {label && (
        <label className="inputLabel" htmlFor={id}>
          {label}:
        </label>
      )}
      <input
        {...props}
        className={className}
        type={type}
        id={id}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
