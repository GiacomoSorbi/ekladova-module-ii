import React, { useState } from "react";
import { Form, Input, Button } from "../../../components";
import "./contact.css";

const Contact = () => {
  const [data, setData] = useState({});

  const onInputChange = (event) => {
    setData({ ...data, [event.target.id]: event.target.value });
  };

  return (
    <>
      <section className="contact-container">
        <div className="contact-text">
          <h1>Contact Me</h1>
        </div>

        <Form>
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
        </Form>
      </section>
    </>
  );
};

export default Contact;
