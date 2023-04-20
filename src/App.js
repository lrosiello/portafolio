import "./App.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

/*IMPORT COMPONENTS*/
import Presentation from "./components/Presentation";
import NavBar from "./components/NavBar";
import Curriculum from "./components/Curriculum";
import Description from "./components/Description";
import Inner from "./components/Inner";


/*  portafolio-rosiello.netlify.app   es la URL*/
function App() {

  const [cv, setCV] = useState(true);
  
 
  const toggleCV = (value) => {
    setCV(value);
    console.log(value);
  };
 
  return (
    <Container fluid >
      {cv ? (
        <Row className="rows">
         
         <Col className="columns" sm={6}>
           <Presentation />
         </Col>
         <Col className="columns" sm={6}>
           <Description />
         </Col>
       </Row>
      )  : (<></>)
      
      }
      <Row className="rows">
        <Col className="columns" sm>
          <Router>
            <div className="main">
            <NavBar toggleCV={toggleCV} />
            <Inner />
            </div>
          </Router>
          {cv ? <Curriculum /> : <></>}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
