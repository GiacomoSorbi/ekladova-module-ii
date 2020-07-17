import React, { useState } from "react";
import { Form, Input, Button } from "../../../components";
import "./contact.css";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    option: "",
    text: "",
  });

  const onInputChange = (event) => {
    setData({ ...data, [event.target.id]: event.target.value });
  };

  const onSubmitClick = (event) => {
    event.preventDefault();
    setData({ name: "", surname: "", option: "", text: "" });
  };

  return (
    <>
      <section className="contact-container">
        <div className="contact-text">
          <h1 className="h1-header">Contact Me</h1>
        </div>
        <Form onSubmit={onSubmitClick}>
          <div className="form-containers">
            <>
              <div className="left">
                <Input
                  type="name"
                  label={"Name"}
                  id="name"
                  className="contactForm-input"
                  value={data.name}
                  onChange={onInputChange}
                  required
                />
                <Input
                  type="surname"
                  label={"Surname"}
                  className="contactForm-input"
                  id="surname"
                  value={data.surname}
                  onChange={onInputChange}
                  required
                />
                <Input
                  type="name"
                  className="contactForm-input"
                  label={"Option"}
                  id="option"
                  value={data.option}
                  onChange={onInputChange}
                  required
                />
              </div>

              <div className="right">
                <label htmlFor="text">Description: </label>
                <textarea
                  cols="15"
                  rows="7"
                  type="textarea"
                  label={"Problem"}
                  id="text"
                  className="contactForm-textarea"
                  value={data.text}
                  onChange={onInputChange}
                />
              </div>
            </>
          </div>
          <Button
            type="submit"
            onSubmit={onSubmitClick}
            className="contactForm-button"
          >
            Submit
          </Button>
        </Form>
      </section>
    </>
  );
};

export default Contact;
