import React from "react";

const About = () => {
  return (
    <section id="about" style={{
        textAlign: "center",
        background: "#ee85b5",
    }}>
      <h2 class="page-text">About Me</h2>
      <img
        style={{
          width: "250px",
        }}
        src="..\src\assets\portrait.jpg"
      ></img>
      <p>I am a person who does stuff on the interwebs</p>
    </section>
  );
};

export default About;
