import React from "react";
import {Route, Routes} from "react-router-dom";

/*IMPORT PAGES*/
import About from "../pages/About.js";
import Repositories from "../pages/Repositories";
import Contact from "../pages/Contact";

export default function Inner() {

    
  return (
    <Routes>
    <Route path="/" element={<root />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/repositories" element={<Repositories />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
  </Routes>

  );
}
