import React from "react";
import { Button } from "react-bootstrap";
import cv from "../Download/curriculum-Rosiello.pdf";

export default function Curriculum() {

    
  return (
    <div className="descarga">
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          <a href={cv}  target="_blank" className="textoBoton" rel="noreferrer">
             Abrir Curriculum Vitae
          </a>
        </Button>
      </div>
    </div>
  );
}
