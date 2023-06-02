import React from "react";
import { Button } from "react-bootstrap";

export default function Curriculum(props) {
  let cv = null;

  if (props.language === "spanish") {
    cv = require("../Download/curriculum-rosiello-spa.pdf");
    console.log(cv);
  } else if (props.language === "english") {
    cv = require("../Download/curriculum-rosiello-eng.pdf");
  }

  return (
    <div className="descarga">
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          {props.language === "spanish" ? (
            <>
              <a
                href={cv}
                target="_blank"
                className="textoBoton"
                rel="noreferrer"
              >
                Abrir Curriculum Vitae
              </a>
            </>
          ) : props.language === "english" ? (
            <a
              href={cv}
              target="_blank"
              className="textoBoton"
              rel="noreferrer"
            >
              Open Curriculum Vitae
            </a>
          ) : (
            <></>
          )}
        </Button>
      </div>
    </div>
  );
}
