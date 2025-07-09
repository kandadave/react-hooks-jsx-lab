import React from "react";
import { image } from "../data/data";

function About() {
  return(
    <div id="about">
      <h2>About Me</h2>
      <p>Just a humble software developer from Nairobi Kenya. One of my biggest passions is creating AI workflows and agents.</p>
      <img src={ image } alt="I made this" />
    </div>
  ) 
}

export default About;
