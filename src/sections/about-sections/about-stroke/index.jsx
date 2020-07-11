import React from "react";

import "./about-stroke.css";
import { Card, Image } from "../../../components";
import facebook from "../../../images/facebook.png";
import twitter from "../../../images/tweet.png";
import insta from "../../../images/INSTApng.png";

const AboutStroke = () => {
  return (
    <>
      <section className="about-timeline-container">
        <div className="about-contact-container">
          <Card className="timeline-card">
            <div className="icons">
              <Image className="icon" src={facebook}></Image>
              <Image className="icon" src={twitter}></Image>
              <Image className="icon insta-icon" src={insta}></Image>
            </div>
            <div className="about-contact-text">
              <p>Email: example@gmail.com</p>
              <p>Number: 082974628683</p>
            </div>
          </Card>
          <Card className="timeline-card"></Card>
        </div>
        <div>
          <div className="timeline-container"></div>
        </div>
      </section>
    </>
  );
};

export default AboutStroke;
