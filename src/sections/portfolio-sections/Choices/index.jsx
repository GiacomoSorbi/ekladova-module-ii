import React, { useState } from "react";
import { Card, Image, Input, Button, Form } from "../../../components";
import "./choices.css";
import { cardChoices } from "../../../utilities";

const Choices = () => {
  const [choices, setChoices] = useState({
    noun1: "",
    noun2: "",
    adj: "",
    verb: "",
    verb2: "",
    exc: "",
  });

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
  console.log(choices);

  const onClearClick = (event) => {
    event.preventDefault();
    setAgain(false);
    setChoices({
      ...choices,
      noun1: "",
      noun2: "",
      adj: "",
      verb: "",
      verb2: "",
      exc: "",
    });

    setClick(false);
    setText("Pick a genre and words for your silly story");

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
      choices.verb2 &&
      choices.exc
    ) {
      setAgain(true);

      switch (genre) {
        case "detective":
          setText(
            <p className="generated-text">
              It was a rainy night. My coat was soaking wet. "
              <em>{choices.exc}</em>" - I thought to myself as I walked towards
              the crime scene. The{" "}
              <span className="redText">
                {choices.adj} {choices.noun2}
              </span>{" "}
              is at large again, no doubt about it. I wanted to{" "}
              <span className="angryText">{choices.verb}</span> but restrained
              myself. Yes, no one wants to see that.
              <br /> I thought of the times I used to{" "}
              <span className="calmText">~{choices.verb2}~</span> with my{" "}
              <span className="calmText">{choices.noun1}</span>. He took it away
              from me. That{" "}
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
              He was talking to a tiny{" "}
              <span className="calmText">{choices.noun1}</span> sitting on the
              table. It didn't answer. <br />"<em>{choices.exc}</em>", he
              continued, "means that you are very{" "}
              <span className="angryText">{choices.adj}</span>. Naturally, it
              does make sense.".
              <br />
              "Sometimes you are so{" "}
              <span className="angryText">{choices.adj}</span> it makes you want
              to <strong>{choices.verb}</strong>!".
              <br />
              The little bunny looked around. The{" "}
              <span className="calmText">{choices.noun1}</span> was starting to
              bore him with its silence. <br />
              The little bunny hated when that happened so he looked at the{" "}
              <span className="calmText">~~{choices.noun2}~~</span> just outside
              his window. <br />
              "Sigh...", said the little bunny quietly, "At moments like these I
              wish you could <strong>{choices.verb2}</strong>..."
            </p>
          );
          break;
        case "horror":
          setText(
            <p className="generated-text">
              I can still remember it like it was yesterday. The way the
              moonlight was shining through the cracks in the boarded-shut
              window. The way she was clutching to the{" "}
              <span className="redText">{choices.noun1}</span>, like her life
              depended on it. <br /> I can still hear it ringing in my ears.{" "}
              <br />"{choices.exc.toUpperCase()}", she shouted, "
              <span className="angryText">
                <em>{choices.verb}</em>
              </span>
              !" <br />
              <br />
              <br />
              And then I turned around. <br />
              <br />I looked at it. Straight in that thing's{" "}
              <span className="redText">{choices.adj}</span> eyes. And it looked
              at me like it wanted to{" "}
              <span className="angryText">{choices.verb2}</span>. <br />
              To this day, the thought of what might have been if only I have
              listened still haunts my mind. <br />
              <br />
              I shoud have done the right thing. <br />I should have never found
              that damn <em>{choices.noun2}</em> that started it all.
            </p>
          );
          break;
        case "fantasy":
          setText(
            <p className="generated-text">
              Things you need to kill a dragon: <br />
              <ol>
                <li key="1">
                  A <strong>{choices.adj}</strong> sword{" "}
                </li>
                <li key="2">
                  A <span className="calmText">~{choices.noun1}~</span> to keep
                  your crew entertained
                </li>
                <li key="3">
                  Highly choreographed yell of excitement.{" "}
                  <span className="angryText">
                    <em>{choices.exc.toUpperCase()} </em>
                  </span>{" "}
                  will do.{" "}
                </li>
                <li key="4">
                  Plan of action in case the dragon refuses to get killed. You
                  might want to <span className="calmText">{choices.verb}</span>
                  , you never know.
                </li>
                <li key="5">
                  Use the dragon's greatest weakness. Maybe the{" "}
                  <strong>{choices.noun2}</strong>?
                </li>
                <li key="6">
                  Lastly, in case everything else fails, try to{" "}
                  <span className="redText"> {choices.verb2}</span> him to
                  death!
                </li>
              </ol>
              Or become friends with him, that's an option too. Might be a cool
              dragon.
            </p>
          );
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
                  key={el.id}
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
            disabled={again ? true : false}
          >
            Generate
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
