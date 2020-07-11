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
          doloremque placeat perspiciatis id amet. Sunt quae praesentium,
        </Card>
        <Card className="about-card stroke-card">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          doloremque placeat perspiciatis id amet. Sunt quae praesentium,
        </Card>
        <Card className="about-card stroke-card">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          doloremque placeat perspiciatis id amet. Sunt quae praesentium,
        </Card>
      </div>
      <div className="right-about right">
        <Image src={woman} className="about-woman" alt="woman"></Image>
      </div>
    </section>
  );
};

export default AboutBanner;
