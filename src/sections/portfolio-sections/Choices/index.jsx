import React, { useState } from "react";
import { Card, Image, Input, Button, Form } from "../../../components";
import "./choices.css";
import { cardChoices } from "../../../utilities";

const Choices = () => {
  const [choices, setChoices] = useState({});
  const [text, setText] = useState("");
  const [genre, setGenre] = useState("");
  const [click, setClick] = useState(false);

  const onChangeInput = (event) => {
    setChoices({ ...choices, [event.target.id]: event.target.value });
  };

  const onCardClick = (event) => {
    setClick(!click);
    const nodeArray = event.currentTarget.parentNode.childNodes;

    if (!click) {
      nodeArray.forEach(
        (el) => (el.className = "p-choice-card timeline-card opacity0")
      );
      event.currentTarget.className = "p-choice-card timeline-card";
      setGenre(event.currentTarget.id);
    } else {
      nodeArray.forEach((el) => (el.className = "p-choice-card timeline-card"));
      setGenre("");
    }
  };

  const onGenerateClick = () => {
    if (
      choices.noun1 &&
      choices.noun2 &&
      choices.adj &&
      choices.verb &&
      choices.ptVerb &&
      choices.exc
    ) {
      if (genre === "detective") {
        setText(`Lorem ipsum dolor sit ${choices.noun1}, consectetur ${choices.noun2}
      elit. Rem ${choices.adj} excepturi ${choices.verb} voluptatibus architecto illum
      alias odit molestias, aliquid ${choices.ptVerb} tempore maxime in a ${choices.exc} earum consequuntur minus atque tenetur.`);
      } else if (genre === "child") {
        setText(`Lorem ipsum dolor sit ${choices.noun1}, consectetur ${choices.noun2}
      elit. Rem ${choices.adj} excepturi ${choices.verb} voluptatibus architecto illum
      alias odit molestias, aliquid ${choices.ptVerb} tempore maxime in a ${choices.exc} earum consequuntur minus atque tenetur.`);
      } else if (genre === "horror") {
        setText(`Lorem ipsum dolor sit ${choices.noun1}, consectetur ${choices.noun2}
      elit. Rem ${choices.adj} excepturi ${choices.verb} voluptatibus architecto illum
      alias odit molestias, aliquid ${choices.ptVerb} tempore maxime in a ${choices.exc} earum consequuntur minus atque tenetur.`);
      } else if (genre === "fantasy") {
        setText(`Lorem ipsum dolor sit ${choices.noun1}, consectetur ${choices.noun2}
      elit. Rem ${choices.adj} excepturi ${choices.verb} voluptatibus architecto illum
      alias odit molestias, aliquid ${choices.ptVerb} tempore maxime in a ${choices.exc} earum consequuntur minus atque tenetur.`);
      } else {
        setText("Genre not chosen");
      }
    } else {
      setText("Words not chosen");
    }
  };

  return (
    <>
      <section className="p-game">
        <div className="p-choices-container">
          <div className="left">
            {cardChoices.map((el) => {
              return (
                <Card
                  onClick={onCardClick}
                  className="p-choice-card timeline-card"
                  id={el.id}
                >
                  <Image className="p-choice-image" src={el.img} alt={el.id} />
                  <p className="p-choice-text">{el.name}</p>
                </Card>
              );
            })}
          </div>

          <div className="right">
            <Form className="p-form">
              <div className="p-input-wrapper">
                <Input
                  type="text"
                  label="Noun"
                  id="noun1"
                  onChange={onChangeInput}
                  value={choices.noun1}
                  className="contactForm-input p-choice-input"
                />
              </div>
              <div className="p-input-wrapper">
                <Input
                  type="text"
                  label="Noun 2"
                  id="noun2"
                  onChange={onChangeInput}
                  value={choices.noun2}
                  className="contactForm-input p-choice-input"
                />
              </div>
              <div className="p-input-wrapper">
                <Input
                  type="text"
                  label="Adjective"
                  id="adj"
                  onChange={onChangeInput}
                  value={choices.adj}
                  className="contactForm-input p-choice-input"
                />
              </div>
              <div className="p-input-wrapper">
                <Input
                  type="text"
                  label="Verb"
                  id="verb"
                  onChange={onChangeInput}
                  value={choices.verb}
                  className="contactForm-input p-choice-input"
                />
              </div>
              <div className="p-input-wrapper">
                <Input
                  type="text"
                  label="Past tense verb"
                  id="ptVerb"
                  onChange={onChangeInput}
                  value={choices.ptVerb}
                  className="contactForm-input p-choice-input"
                />
              </div>
              <div className="p-input-wrapper">
                <Input
                  type="text"
                  label="Exclamation"
                  id="exc"
                  onChange={onChangeInput}
                  value={choices.exc}
                  className="contactForm-input p-choice-input"
                />
              </div>
            </Form>
          </div>
        </div>
        <Button
          onClick={onGenerateClick}
          className="contactForm-button p-button"
        >
          Generate
        </Button>

        <Card className="p-game-container">
          <p>{text}</p>
        </Card>
      </section>
    </>
  );
};

export default Choices;
