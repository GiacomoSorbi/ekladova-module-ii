import React from "react";
import "./card.css";

const Card = ({ children, className, ...props }) => {
  return (
    <>
      <div {...props} className={className}>
        {children}
      </div>
    </>
  );
};

export default Card;
