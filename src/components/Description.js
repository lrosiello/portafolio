import React from "react";
import { Figure } from "react-bootstrap";
import imgJava from "../assets/image-java.svg";
import imgJS from "../assets/image-js.svg";
import imgPHP from "../assets/image-php.svg";
import imgPostgreSQL from "../assets/image-postgreSQL.svg";
import imgReact from "../assets/image-react.svg";
import imgMui from "../assets/image-mui.svg";
import imgNode from "../assets/image-node.svg";
import imgNext from "../assets/image-next.svg";


export default function Description() {
  const knowledges = [
    { name: "Javascript", img: imgJS , id:1},
    { name: "React", img: imgReact , id:2 },
    { name: "Java", img: imgJava , id:3},
    { name: "PHP", img: imgPHP , id:4},
    { name: "PostgreSQL", img: imgPostgreSQL,  id:5},
    { name: "MaterialUI", img: imgMui, id:6},
    { name: "Node.js", img: imgNode, id:7},
    { name: "Next.js", img: imgNext, id:8},
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
              <div className="custom-paper">
                <Figure.Image width={30} height={30}  src={element.img}  />
                <Figure.Caption>
                  <h6>{element.name}</h6>
                </Figure.Caption>
              </div>
              </Figure>
              </li>
            </React.Fragment>
            </ul>
            </div>
          ))}
  
     
    </div>
  );
}
