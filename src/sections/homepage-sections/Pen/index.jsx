import React from "react";
import { Image } from "../../../components";
import pen from "../../../images/pen.jpg";
import woman from "../../../images/woman.png";
import baby from "../../../images/baby.png";
import time from "../../../images/time.png";

import "./pen.css";

const Pen = () => {
  return (
    <>
      <section className="feature-container">
        <div className="pen-picture-container">
          <Image src={pen} className="pen" alt="pen" />
        </div>
        <div className="feature-image-container">
          <div className="feature-images">
            <Image src={woman} className="feature" alt="journal-time" />
            <Image src={baby} className="feature" alt="journal-baby" />
            <Image src={time} className="feature" alt="journal-time" />
          </div>
          <article>
            <p className="desc-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              facere aut tempore, magni aliquam quisquam ad? Recusandae dolorem
              provident cum porro minus neque numquam, accusantium sequi esse
              hic at magni?
            </p>
            <p className="desc-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              facere aut tempore, magni aliquam quisquam ad? Recusandae dolorem
              provident cum porro minus neque numquam, accusantium sequi esse
              hic at magni?
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Pen;
