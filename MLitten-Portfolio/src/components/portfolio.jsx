import React from "react";

const Portfolio = () => {
  return (
    <section id="projects">
      <h2>Portfolio</h2>
      <div class="card" style={
        {
            width:"18rem"
        }
      }>
        <img
          src="..\src\assets\christmaskarma.png"
          class="card-img-top"
          alt="..."
        ></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> 
    </section>
  );
};

export default Portfolio;
