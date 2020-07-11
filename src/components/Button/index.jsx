import React from "react";
import "./button.css";

const Button = ({ className, children, ...props }) => {
  return (
    <>
      <button {...props} className={className} type="submit">
        {children}
      </button>
    </>
  );
};

export default Button;
