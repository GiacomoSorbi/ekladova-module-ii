import React from "react";
import "./button.css";

const Button = ({ className, children }) => {
  return (
    <>
      <button className={className} type="submit">
        {children}
      </button>
    </>
  );
};

export default Button;
