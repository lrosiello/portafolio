import React from "react";
import {Table,Figure} from 'react-bootstrap';
import imgPhone from "../assets/image-phone.svg";
import imgGmail from "../assets/image-gmail.svg";
import imgLinkedin from "../assets/image-linkedin.svg";

export default function Contact() {


    
  return (
    <Table bsPrefix="table" className="table" bordered>
  

    <tbody>
      <tr >
      <Figure className="itemLista itemContact" >
                <Figure.Image width={50} height={50} src={imgGmail}  /></Figure>
        <td><p>Correo electronico</p></td>
        <td><p>rosiello.paco@gmail.com</p></td>
      </tr>
      <tr>
      <Figure className="itemLista itemContact" >
                <Figure.Image width={50} height={50} src={imgPhone}  /></Figure>
        <td><p>Numero Celular</p></td>
        <td ><p>(54) 249-4012503</p></td>
      </tr>
      <tr>
      <Figure className="itemLista itemContact" >
                <Figure.Image width={50} height={50} src={imgLinkedin} /></Figure>
        <td><p>Enlace LinkedIn</p></td>
        <td><p><a href="https://www.linkedin.com/in/luis-antonio-rosiello-02b595237/" target="_blank" rel="noreferrer">
          https://www.linkedin.com/in/luis-antonio-rosiello-02b595237/</a></p></td>
      </tr>
    </tbody>
  </Table>
  );
}
