import React from "react";
import { Figure } from "react-bootstrap";
import imgJava from "../assets/image-java.svg";
import imgJS from "../assets/image-js.svg";
import imgPHP from "../assets/image-php.svg";
import imgPostgreSQL from "../assets/image-postgreSQL.svg";
import imgReact from "../assets/image-react.svg";


export default function Description() {
  const knowledges = [
    { name: "Javascript", img: imgJS , id:1},
    { name: "React", img: imgReact , id:2 },
    { name: "Java", img: imgJava , id:3},
    { name: "PHP", img: imgPHP , id:4},
    { name: "PostgreSQL", img: imgPostgreSQL,  id:5},
  ];


  return (
    <div>
      <div className="title">
      <h1>Software Developer</h1>
      </div>
      <h2 className="knowledges-container">Knowledges: </h2>
          {knowledges.map((element) => (
            <div key={element.id}>
              <ul>
            <React.Fragment>
              <li className="lista1"   >
              <Figure className="itemLista" >
                <Figure.Image width={30} height={30} src={element.img}  />
                <Figure.Caption>
                  <h4>{element.name}</h4>
                </Figure.Caption>
              </Figure>
              </li>
            </React.Fragment>
            </ul>
            </div>
          ))}
  
     
    </div>
  );
}
