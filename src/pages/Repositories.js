import React from "react";
import {Accordion} from 'react-bootstrap';


export default function Repositories(props) {

    
  return (
    <>
    {props.language === "spanish" ? (
      <div className="repositories">
      <Accordion  >
      <Accordion.Item eventKey="1">
          <Accordion.Header ><div className="circulo"></div><p>Tienda Productos React y Material</p></Accordion.Header>
          <Accordion.Body >
          <a href="https://tienda-productos-talleres.netlify.app" target="_blank" rel="noreferrer">https://tienda-productos-talleres.netlify.app</a><br/>
          <p>Repositorio:  <a href="https://github.com/lrosiello/tienda-productos" target="_blank" rel="noreferrer">https://github.com/lrosiello/tienda-productos</a></p>    
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header ><div className="circulo"></div><p>Primera practica curso de React</p></Accordion.Header>
          <Accordion.Body >
          <a href="https://rick-morty-personajes.netlify.app" target="_blank" rel="noreferrer">https://rick-morty-personajes.netlify.app</a><br/>
          <p>Repositorio: <a href="https://github.com/lrosiello/rick-morty" target="_blank" rel="noreferrer">https://github.com/lrosiello/rick-morty</a></p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header><div className="circulo"></div><p>Proyecto final, concurso de bandas musicales (Java)</p></Accordion.Header>
          <Accordion.Body>
          <p>Repositorio: <a href="https://github.com/lrosiello/tpeProg2" target="_blank" rel="noreferrer">https://github.com/lrosiello/tpeProg2</a></p>
          </Accordion.Body>
        </Accordion.Item>
     
      <Accordion.Item eventKey="4">
          <Accordion.Header><div className="circulo"></div><p>Practica css y animaciones Javascript, Keyframes</p></Accordion.Header>
          <Accordion.Body>
          <p>Repositorio: <a href="https://github.com/lrosiello/proyectos"target="_blank" rel="noreferrer">https://github.com/lrosiello/proyectos</a></p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header><div className="circulo"></div><p>Practico, venta de juegos y juego jugable 4 en linea</p></Accordion.Header>
          <Accordion.Body>
          <p>Repositorio: <a href="https://github.com/lrosiello/game-page"target="_blank" rel="noreferrer">https://github.com/lrosiello/game-page (no-responsive)</a> </p>
          </Accordion.Body>
        </Accordion.Item>
  
        </Accordion>
      </div>
          ) : props.language === "english" ? (
            <div className="repositories">
    <Accordion  >

      <Accordion.Item eventKey="1">
        <Accordion.Header ><div className="circulo"></div><p>A shop page in React and Material</p></Accordion.Header>
        <Accordion.Body >
        <a href="https://tienda-productos-talleres.netlify.app" target="_blank" rel="noreferrer">https://tienda-productos-talleres.netlify.app</a><br/>
          <p>Repository:  <a href="https://github.com/lrosiello/tienda-productos" target="_blank" rel="noreferrer">https://github.com/lrosiello/tienda-productos</a></p>    
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header ><div className="circulo"></div><p>First practice using React</p></Accordion.Header>
        <Accordion.Body >
        <a href="https://rick-morty-personajes.netlify.app" target="_blank" rel="noreferrer">https://rick-morty-personajes.netlify.app</a><br/>
          <p>Repository: <a href="https://github.com/lrosiello/rick-morty" target="_blank" rel="noreferrer">https://github.com/lrosiello/rick-morty</a></p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><div className="circulo"></div><p>Final Project, a musical competition (Java)</p></Accordion.Header>
        <Accordion.Body>
        <p>Repository: <a href="https://github.com/lrosiello/tpeProg2" target="_blank" rel="noreferrer">https://github.com/lrosiello/tpeProg2</a></p>
        </Accordion.Body>
      </Accordion.Item>
   
    <Accordion.Item eventKey="4">
        <Accordion.Header><div className="circulo"></div><p>CSS practice, Javascript animations, keyframes</p></Accordion.Header>
        <Accordion.Body>
        <p>Repository: <a href="https://github.com/lrosiello/proyectos"target="_blank" rel="noreferrer">https://github.com/lrosiello/proyectos</a></p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><div className="circulo"></div><p>Practice: Game store and playable game 4inLine</p></Accordion.Header>
        <Accordion.Body>
        <p>Repository: <a href="https://github.com/lrosiello/game-page"target="_blank" rel="noreferrer">https://github.com/lrosiello/game-page (no-responsive)</a></p>
        </Accordion.Body>
      </Accordion.Item>

      </Accordion>
    </div>
          ) : (
            <></>
          )}
    </>
  );
}
