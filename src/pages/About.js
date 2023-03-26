import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function About() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel slide={true} activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item>
        <div className="card-carousel">
          <Carousel.Caption className="text carousel-captio">
            <h3>Sobre mi..</h3>
            <p>Llevo mas de ocho años trabajando Carrefour y comence a estudiar programacion en 2020.</p>
            <p>He estado estudiando la carrera con grandes desafios, habiendo formado una familia,</p>
            <p>situacion que me ha enseñado a organizar mis tiempos y comprender que las dificultades</p>
            <p>se pueden superar, aumentando mi autoconfianza y alimentando mis anhelos para el futuro proximo.</p>
            <p>Mi hobby preferido es componer musica, y utilizar programas para producir pistas.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="card-carousel">
          <Carousel.Caption className="text carousel-captio">
            <h3>Habilidades blandas</h3>
            <p>Me considero persistente durante momentos de dificultades y desafios.</p>
            <p>Grandes motivaciones para el aprendizaje y desarrollo profesional,</p>
            <p>buena predisposicion para trabajar en conjunto, entendiendo que estar abierto</p>
            <p>a opiniones de terceros, ayuda a contribuir a soluciones mas eficientes.</p>
            <p>Me agrada promover el buen ambiente laboral y lograr objetivos.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="card-carousel">
          <Carousel.Caption className="text carousel-captio">
            <h3>Conocimientos</h3>
            <p>En la carrera he aprendido el paradigma de Programacion Orientada a Ojetos,</p>
            <p>utilizando lenguajes como Java, Javascript y PHP. Tambien nociones basicas de</p>
            <p>bases de datos como consultas SQL y algo de Backend con la arquitectura MVC con PHP. </p>
            <p>He experimentado CSS, sus estilos y animaciones. Recientemente estoy aprendiendo a usar la libreria React,</p>
            <p>sus hooks y aprendiendo sobre llamar APIs.  Mi nivel de ingles es nivel B1 y estudie un poco portugues.</p>  
          </Carousel.Caption>
        </div>
      </Carousel.Item>

    </Carousel>
  );
}
