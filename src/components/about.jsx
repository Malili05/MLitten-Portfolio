import React from "react";

const About = () => {
  return (
    <section id="about" style={{
        textAlign: "center",
        background: "#878787",
    }}>
      <h2 class="page-text">About Me</h2>
      <img
        style={{
          width: "250px",
        }}
        src="..\src\assets\portrait.jpg"
      ></img>
      <p>My name is Malisa Litten. I am a full stack web development student preparing to apply to positions in the fall. I live in Utah with my family where we enjoy visiting parks, trying new restaurants and foods, and many, MANY DIY projects on our home. My experience comes from many hats I have worn in various jobs. I have been in leadership roles in IT, retail, food service, sales, and marketing. I am creative and resourceful, I enjoy finding practical solutions to problems I encounter. I also have a silly side to my personality, I like to have fun with my peers and believe that laughter makes any task more enjoyable. </p>
    </section>
  );
};

export default About;
