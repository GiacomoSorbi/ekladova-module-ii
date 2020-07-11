import React, { useState } from "react";
import { Input, Button } from "..";
import "./form.css";

const Form = () => {
  const [data, setData] = useState({});

  const onInputChange = (event) => {
    setData({ ...data, [event.target.id]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <section className="form-container">
        <form className="form" onSubmit={onSubmit}>
          <div className="form-containers">
            <div className="left">
              <Input
                type="name"
                label={"Name"}
                id="name"
                className="contactForm-input"
                value={data.name}
                onChange={onInputChange}
              />
              <Input
                type="surname"
                label={"Surname"}
                className="contactForm-input"
                id="surname"
                value={data.surname}
                onChange={onInputChange}
              />
              <Input
                type="name"
                className="contactForm-input"
                label={"Option"}
                id="option"
                value={data.option}
                onChange={onInputChange}
              />
            </div>

            <div className="right">
              <label>Description: </label>
              <textarea
                cols="15"
                rows="7"
                type="textarea"
                label={"Problem"}
                id="problem"
                className="contactForm-textarea"
                value={data.problem}
                onChange={onInputChange}
              />
            </div>
          </div>
          <Button className="contactForm-button">Submit</Button>
        </form>
      </section>
    </>
  );
};

export default Form;
