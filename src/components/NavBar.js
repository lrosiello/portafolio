import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  /*fundamental en onClick = {()=>{}}*/
  return (
      <div className="nav">
        <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item className="navItem" >
            <Nav.Link>
              <Link to="/" 
              onClick={() => {props.toggleCV(true)}} onLoad={() => {props.toggleCV(true)}}>Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Nav.Link>
              <Link  to="/about" 
              onClick={() => {props.toggleCV(false)}}>About Me </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Nav.Link>
              <Link to="/repositories" 
              onClick={() => {props.toggleCV(false)}}>Repositories</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Nav.Link>
              <Link to="/contact" 
              onClick={() => {props.toggleCV(false)}}>Contact</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
  );
}
