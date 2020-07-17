import React from "react";
import "./form.css";

const Form = ({ children, className, onSubmit }) => {
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
