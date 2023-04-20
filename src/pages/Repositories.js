import React from "react";
import {Accordion} from 'react-bootstrap';


export default function Repositories() {

    
  return (
    <div className="repositories">
    <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header><div className="circulo"></div><p>Primera practica curso de React</p></Accordion.Header>
        <Accordion.Body >
          <a href="https://github.com/lrosiello/rick-morty" target="_blank" rel="noreferrer">https://github.com/lrosiello/rick-morty</a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><div className="circulo"></div><p>Proyecto final, concurso de bandas musicales (Java)</p></Accordion.Header>
        <Accordion.Body>
        <a href="https://github.com/lrosiello/tpeProg2" target="_blank" rel="noreferrer">https://github.com/lrosiello/tpeProg2</a>
        </Accordion.Body>
      </Accordion.Item>
   
    <Accordion.Item eventKey="2">
        <Accordion.Header><div className="circulo"></div><p>Practica css y animaciones Javascript, Keyframes</p></Accordion.Header>
        <Accordion.Body>
        <a href="https://github.com/lrosiello/proyectos"target="_blank" rel="noreferrer">https://github.com/lrosiello/proyectos</a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><div className="circulo"></div><p>Practico, venta de juegos y juego jugable 4 en linea</p></Accordion.Header>
        <Accordion.Body>
        <a href="https://github.com/lrosiello/game-page"target="_blank" rel="noreferrer">https://github.com/lrosiello/game-page (no-responsive)</a>
        </Accordion.Body>
      </Accordion.Item>

      </Accordion>
    </div>
  );
}
