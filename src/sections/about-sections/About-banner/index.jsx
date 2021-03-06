import React from "react";

import "./aboutBanner.css";
import { Image, Card } from "../../../components";
import woman from "../../../images/woman.jpg";

const AboutBanner = () => {
  return (
    <section className="banner-container">
      <div className="left-about left">
        <Card className="about-card stroke-card">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          doloremque placeat
        </Card>
        <Card className="about-card stroke-card">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          doloremque placeat
        </Card>
        <Card className="about-card stroke-card">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          doloremque placeat
        </Card>
      </div>
      <aside className="right-about right">
        <Image src={woman} className="about-woman" alt="woman"></Image>
      </aside>
    </section>
  );
};

export default AboutBanner;
