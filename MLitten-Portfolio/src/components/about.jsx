import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img style={
        {
            width:"250px"
        }
      } src="..\src\assets\portrait.jpg"></img>
      <p>I am a person who does stuff on the interwebs</p>
    </section>
  );
};

export default About;