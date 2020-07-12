import React from "react";
import "./banner.css";
import { Image } from "../../../components";
import award from "../../../images/award.png";

const Banner = () => {
  return (
    <>
      <header className="wrapper">
        <div className="banner">
          <p className="hidden">Karen Smith</p>
          <p className="hidden thin">Writer | Author | Storyteller</p>
        </div>
        <div className="divider">
          <div className="award-container">
            <Image src={award} className="awardImage" alt="awards" />
            <p className="subhead">Awards and Nominations</p>
            <Image src={award} className="awardImage" alt="awards" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Banner;
