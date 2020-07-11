import React from "react";
import "./image.css";

const Image = ({ src, alt, className, ...props }) => {
  return (
    <img {...props} src={src} className={className} alt={alt || "picture"} />
  );
};

export default Image;
