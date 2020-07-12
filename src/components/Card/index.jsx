import React from "react";
import "./card.css";

const Card = ({ children, ...props }) => {
  return (
    <>
      <div {...props}>{children}</div>
    </>
  );
};

export default Card;
