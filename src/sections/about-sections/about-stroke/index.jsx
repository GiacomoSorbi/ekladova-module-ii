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
              <p className="about-text">Email: example@gmail.com</p>
              <p className="about-text">Number: 082974628683</p>
            </div>
          </Card>
          <Card className="timeline-card">
            <div style={{ width: 100 + "%" }}>
              <iframe
                width="300"
                height="220"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=300&amp;height=220&amp;hl=en&amp;q=London+(Karen%20Smith)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </Card>
        </div>
        <div>
          <div className="timeline-container"></div>
        </div>
      </section>
    </>
  );
};

export default AboutStroke;
