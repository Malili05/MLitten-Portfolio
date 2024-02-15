import React from "react";
import "../App.css";
import karma from "../assets/christmaskarma.png";
import parkFinder from "../assets/parkfinder.png";
import horiseon from "../assets/horiseon.png"
import noteTaker from "../assets/notetaker.png"
import workDay from "../assets/workdaysched.png"
import portfolio1 from "../assets/portfolioearlywork.png"
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
    {
        imgURL: noteTaker,
        cardTitle: "Note Taker",
        cardText:
          "a simple note taking app that saves notes created by the user",
        cardHref: "https://malili-note-taker-6d5d81fe4464.herokuapp.com/",
        gitHubHref: "https://github.com/Malili05/note-taker",
      },
    {
        imgURL: workDay,
        cardTitle: "Work Day Scheduler",
        cardText:
          "-offers color coded time slots relative to the current time of day -saves information in the text area of the time slots -gives current time of dat at the top of the page -has a save button for each time slot",
        cardHref: "https://malili05.github.io/Work-Day-Scheduler/",
        gitHubHref: "https://github.com/Malili05/Work-Day-Scheduler",
      },
    {
        imgURL: portfolio1,
        cardTitle: "GiftGenie",
        cardText:
          "a gift finder application that takes you to Amazon to purchase the item",
        cardHref: "https://giftgenie-vfsj.onrender.com",
        gitHubHref: "https://github.com/Malili05/GiftGenie",
      },
  ]
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