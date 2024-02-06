import React from "react";
import "../app.css";
import karma from "../assets/christmasKarma.png";
import parkFinder from "../assets/parkfinder.png";
import horiseon from "../assets/horiseon.png"
import "../styles/portfolioStyles.css"

const Portfolio = () => {
  const portfolio = [
    {
      imgURL: karma,
      cardTitle: "Christmas Karma",
      cardText:
        "An interactive app that where users can add or remove their child's name from Santa's naughty and nice list.",
      cardHref: "https://christmas-karma-260d886a8d3e.herokuapp.com/",
      gitHubHref: "https://github.com/Malili05/Christmas-Karma",
    },
    {
      imgURL: parkFinder,
      cardTitle: "Park Search",
      cardText:
        "A search of National Parks by state and a save list for the ones you might like to visit.",
      cardHref: "https://malili05.github.io/Campground-finder/",
      gitHubHref: "https://github.com/Malili05/Campground-finder",
    },
    {
      imgURL: horiseon,
      cardTitle: "Horiseon Refactor",
      cardText:
        "An early HTML refactor project that taught accessibility practices and SEO formatting",
      cardHref: "https://malili05.github.io/02-Challenge-Horiseon/",
      gitHubHref: "https://github.com/Malili05/02-Challenge-Horiseon",
    },
  ];
  return (

      <section id="portfolio" className="page-section">
        <h2 className="page-text">Portfolio</h2>
        {portfolio.map((project, index) => (
          <div className="card">
            <div
              style={{
                height: "200px",
                width: "100%",
                backgroundImage: `url(${project.imgURL})`,
                backgroundSize: "cover",
                backgroundPosition: "right",
              }}
            ></div>
            <div className="card-body">
              <h5 className="card-title">{project.cardTitle}</h5>
              <p className="card-text" style={{height: "100px"}}>{project.cardText}</p>
              <a href={project.cardHref} className="btn button-colors">
                See it here
              </a>
              <a href={project.gitHubHref} className="btn button-colors">
                Github Repo
              </a>
            </div>
          </div>
        ))}
      </section>
  ) }
export default Portfolio;