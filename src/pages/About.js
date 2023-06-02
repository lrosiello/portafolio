import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function About(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {props.language === "spanish" ? (
        <Carousel
          interval={null}
          bsPrefix="carousel"
          slide={false}
          activeIndex={index}
          onSelect={handleSelect}
        >
          <Carousel.Item>
            <div className="card-carousel">
              <Carousel.Caption className="text carousel-captio">
                <h3>Sobre mi..</h3>
                <p>
                  Llevo mas de ocho años trabajando en Carrefour y comence a
                  estudiar programacion en 2020.
                </p>
                <p>
                  He estado estudiando la carrera con grandes desafios, habiendo
                  formado una familia,
                </p>
                <p>
                  situacion que me ha enseñado a organizar mis tiempos y
                  comprender que las dificultades
                </p>
                <p>
                  se pueden superar, aumentando mi autoconfianza y alimentando
                  mis anhelos para el futuro proximo.
                </p>
                <p>
                  Mi hobby preferido es componer musica, y utilizar programas
                  para producir pistas.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="card-carousel">
              <Carousel.Caption className="text carousel-captio">
                <h3>Habilidades blandas:</h3>
                <p>
                  Me considero persistente durante momentos de dificultades y
                  desafios.
                </p>
                <p>
                  Grandes motivaciones para el aprendizaje y desarrollo
                  profesional,
                </p>
                <p>
                  buena predisposicion para trabajar en conjunto, entendiendo
                  que estar abierto
                </p>
                <p>
                  a opiniones de terceros, ayuda a contribuir a soluciones mas
                  eficientes.
                </p>
                <p>
                  Me agrada promover el buen ambiente laboral y lograr
                  objetivos.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="card-carousel">
              <Carousel.Caption className="text carousel-captio">
                <h3>Conocimientos:</h3>
                <p>
                  En la carrera he aprendido el paradigma de Programacion
                  Orientada a Ojetos,
                </p>
                <p>
                  utilizando lenguajes como Java, Javascript y PHP. Tambien
                  nociones basicas de
                </p>
                <p>
                  bases de datos como consultas SQL y algo de Backend con la
                  arquitectura MVC con PHP.
                </p>
                <p>
                  He experimentado CSS, sus estilos y animaciones. Recientemente
                  estoy aprendiendo a usar la libreria React,
                </p>
                <p>
                  sus hooks y aprendiendo sobre llamar APIs. Mi nivel de ingles
                  es nivel B1 y estudie un poco portugues.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      ) : props.language === "english" ? (
        <>
          <Carousel
            interval={null}
            bsPrefix="carousel"
            slide={false}
            activeIndex={index}
            onSelect={handleSelect}
          >
            <Carousel.Item>
              <div className="card-carousel">
                <Carousel.Caption className="text carousel-captio">
                  <h3>About me..</h3>
                  <p>
                    I've been working at Carrefour for over eight years and
                    started studying programming in 2020.
                  </p>
                  <p>
                    I have been studying the career with great challenges,
                    having formed a family,
                  </p>
                  <p>
                    a situation that has taught me to organize my time and
                    understand that difficulties
                  </p>
                  <p>
                    can be overcome, increasing my self-confidence and fueling
                    my aspirations for the near future.
                  </p>
                  <p>
                    My favorite hobby is composing music and using programs to
                    produce tracks.
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="card-carousel">
                <Carousel.Caption className="text carousel-captio">
                  <h3>Soft Skills:</h3>
                  <p>
                    I consider myself persistent during moments of difficulty
                    and challenge.
                  </p>
                  <p>
                    Great motivation for learning and professional development,
                    good predisposition to work together, understanding that
                    being open to third-party opinions helps contribute to more
                    efficient solutions.
                  </p>
                  <p>
                    I like to promote a good work environment and achieve
                    objectives.
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="card-carousel">
                <Carousel.Caption className="text carousel-captio">
                  <h3>Knowledge:</h3>
                  <p>
                    During my studies, I learned the Object-Oriented Programming
                    paradigm using languages such as Java, Javascript, and PHP.
                    Additionally, I acquired basic knowledge of databases,
                    including SQL queries, and some experience with PHP's MVC
                    architecture for backend development.
                  </p>
                  <p>
                    I have also experimented with CSS, its styles and
                    animations, and more recently, I have been learning to use
                    the React library, its hooks, and how to make API calls. I
                    have an intermediate level of English B1 and have studied
                    a bit of Portuguese.
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          </Carousel>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
