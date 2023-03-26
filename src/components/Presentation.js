import React from "react";
import {Figure}  from "react-bootstrap";
import imagen from "../assets/cara cv.jpg";

export default function Presentation() {
  return (
    <div className="presentation">
    <Figure className="figure">
      <Figure.Image width={171} height={180} src={imagen} className="image" />
      <Figure.Caption>
        <h1>Luis Antonio Rosiello</h1>
        <h3>Edad: 33 años</h3>
        <h3>Residencia: Tandil</h3>
      </Figure.Caption>
    </Figure>
    </div>
  );
}
