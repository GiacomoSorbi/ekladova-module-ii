import React from "react";
import "./stroke.css";
import stroke from "../../../images/stroke3.svg";
import { Card } from "../../../components";

const Textboxes = () => {
  return (
    <>
      <div
        style={{ backgroundImage: "url(" + stroke + ") " }}
        className="stroke-container"
      >
        <div className="card-container">
          <Card className="stroke-card">
            <p className="stroke-card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              tenetur ipsam quaerat natus, molestias
            </p>
          </Card>
          <Card className="stroke-card">
            <p className="stroke-card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              tenetur ipsam quaerat natus, molestias
            </p>
          </Card>
          <Card className="stroke-card">
            <p className="stroke-card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              tenetur ipsam quaerat natus, molestias
            </p>
          </Card>
          <Card className="stroke-card">
            <p className="stroke-card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              tenetur ipsam quaerat natus, molestias
            </p>
          </Card>
          <Card className="stroke-card">
            <p className="stroke-card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              tenetur ipsam quaerat natus, molestias
            </p>
          </Card>
          <Card className="stroke-card">
            <p className="stroke-card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              tenetur ipsam quaerat natus, molestias
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Textboxes;
