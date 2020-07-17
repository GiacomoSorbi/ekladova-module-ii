import React from "react";

import "./about-timeline.css";
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/"
              >
                <Image className="icon" src={facebook} alt="facebook icon" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.twitter.com/"
              >
                <Image className="icon" src={twitter} alr="twitter icon" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/"
              >
                <Image
                  className="icon insta-icon"
                  src={insta}
                  alt="instagram icon"
                />
              </a>
            </div>

            <div className="about-contact-text">
              <p className="about-text">Email: example@gmail.com</p>
              <p className="about-text">Number: 082974628683</p>
            </div>
          </Card>
          <Card className="timeline-card">
            <div style={{ width: 100 + "%" }}>
              <iframe
                title="map"
                className="map-frame"
                scrolling="no"
                frameBorder="0"
                src="https://maps.google.com/maps?width=300&amp;height=220&amp;hl=en&amp;q=London+(Karen%20Smith)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              />
            </div>
          </Card>
        </div>
        <aside className="about-time-container">
          <div className="timeline-container"></div>
          <article className="timeline-text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque modi dolores deleniti nobis? Voluptates sed sequi
              animi, eligendi ullam a labore, atque consectetur at sapiente sint
              architecto quod. Error, consequatur!
            </p>
          </article>
        </aside>
      </section>
    </>
  );
};

export default AboutStroke;
