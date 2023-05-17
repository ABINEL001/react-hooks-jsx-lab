import React from "react";
import { image } from "../data/data";

function About() {
  const sourceImage ={
    alt:"I made this"
    };
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>I like the new Joefes' jam</p>
    <img  src={image} alt={sourceImage.alt}/>
  </div>);
}

export default About;
