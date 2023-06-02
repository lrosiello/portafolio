import React from "react";
import { Figure } from "react-bootstrap";
import imagen from "../assets/cara cv.jpg";

export default function Presentation(props) {
  return (
    <div className="presentation">
      <Figure className="figure">
        <Figure.Image width={220} height={180} src={imagen} className="image" />
        <Figure.Caption>
          {props.language === "spanish" ? (
            <>
              <h1>Luis Antonio Rosiello</h1>
              <h3>Edad: 33 años</h3>
              <h3>Residencia: Tandil, Argentina</h3>
            </>
          ) : props.language === "english" ? (
            <>
              <h1>Luis Antonio Rosiello</h1>
              <h3>Age: 33 years old</h3>
              <h3>Residence: Tandil, Argentina</h3>
            </>
          ) : (
            <></>
          )}
        </Figure.Caption>
      </Figure>
    </div>
  );
}
