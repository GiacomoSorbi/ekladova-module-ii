import React, { useState } from "react";
import { Input, Button } from "..";
import "./form.css";

const Form = ({ children, className }) => {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <section className={className || "form-container"}>
        <form className="form" onSubmit={onSubmit}>
          {children}
        </form>
      </section>
    </>
  );
};

export default Form;
