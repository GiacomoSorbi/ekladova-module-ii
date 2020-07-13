import React, { useState } from "react";
import { Card, Image, Input, Button, Form } from "../../../components";
import "./choices.css";
import { cardChoices } from "../../../utilities";

const Choices = () => {
  const [choices, setChoices] = useState({});
  const [text, setText] = useState(
    "Pick a genre and words for your silly story"
  );

  const [genre, setGenre] = useState("");
  const [click, setClick] = useState(false);
  const [again, setAgain] = useState(false);

  const onChangeInput = (event) => {
    setChoices({ ...choices, [event.target.id]: event.target.value });
  };

  const onCardClick = (event) => {
    if (again) setAgain(!again);

    setClick(!click);
    const nodeArray = event.currentTarget.parentNode.childNodes;
    console.log(nodeArray);

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

  const onClearClick = () => {
    setClick(false);
    setChoices({});

    const nodeList = document.getElementsByClassName(
      "p-choice-card timeline-card"
    );
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].className = "p-choice-card timeline-card";
    }
    setGenre("");
  };

  const onGenerateClick = () => {
    if (
      choices.noun1 &&
      choices.noun2 &&
      choices.adj &&
      choices.verb &&
      choices.exc
    ) {
      setAgain(!again);
      switch (genre) {
        case "detective":
          setText(
            <p className="generated-text">
              It was a rainy night. My <strong>{choices.noun1}</strong> was
              soaking wet. "<em>{choices.exc}</em>" - I thought to myself as I
              walked towards the crime scene. The{" "}
              <span className="redText">
                {choices.adj} {choices.noun2}
              </span>{" "}
              is at large again, no doubt about it. I wanted to{" "}
              <span className="angryText">{choices.verb}</span> but restrained
              myself. Yes, no one wants to see that.
              <br /> I thought of the times I used to{" "}
              <span className="calmText">~{choices.verb2}~</span> with my wife.
              That{" "}
              <span className="redText">
                {choices.adj} {choices.noun2}
              </span>{" "}
              is going to answer for his crimes.
            </p>
          );
          break;
        case "child":
          setText(
            <p className="generated-text">
              "<em>{choices.exc}</em>", said the little bunny, "
              <em>{choices.exc}</em>. Do you know what that means?". <br />
              He was talking to a tiny {choices.noun1} sitting on the table. It
              didn't answer. <br />"<em>{choices.exc}</em>", he continued,
              "means that you are very {choices.adj}. Naturally, it does make
              sense.".
              <br />
              "Sometimes you are so {choices.adj} it makes you want to{" "}
              {choices.verb}!".
              <br />
              The little bunny looked around. The {choices.noun1} was starting
              to bore him with its silence. <br />
              The little bunny hated when that happened so he looked at the{" "}
              {choices.noun2} just outside his window. <br />
              "Sigh...", said the little bunny quietly, "At moments like these I
              wish you could {choices.verb2}..."
            </p>
          );
          break;
        case "horror":
          setText(`Lorem ipsum dolor sit ${choices.noun1}, consectetur ${choices.noun2}
            elit. Rem ${choices.adj} excepturi ${choices.verb} voluptatibus architecto illum
            alias odit molestias, aliquid ${choices.verb2} tempore maxime in a ${choices.exc} earum consequuntur minus atque tenetur.`);
          break;
        case "fantasy":
          setText(`Lorem ipsum dolor sit ${choices.noun1}, consectetur ${choices.noun2}
            elit. Rem ${choices.adj} excepturi ${choices.verb} voluptatibus architecto illum
            alias odit molestias, aliquid ${choices.verb2} tempore maxime in a ${choices.exc} earum consequuntur minus atque tenetur.`);
          break;
        default:
          setText("Genre not chosen");
          break;
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
                  label="Verb 2"
                  id="verb2"
                  onChange={onChangeInput}
                  value={choices.verb2}
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
        <div className="buttonContainer">
          <Button
            onClick={onGenerateClick}
            className="contactForm-button p-button "
          >
            {again ? "Pick a genre" : "Generate"}
          </Button>
          <Button
            onClick={onClearClick}
            className="contactForm-button p-button"
          >
            Clear All
          </Button>
        </div>

        <Card className="p-game-container">{text}</Card>
      </section>
    </>
  );
};

export default Choices;
