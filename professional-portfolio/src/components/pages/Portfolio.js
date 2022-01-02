import React from "react";
import PortfolioCard from "../PortfolioCard";
import project from "../../assets/project";

function crteatePortfolioCard(project) {
  return (
    <div>
      <PortfolioCard
        name={project.name}
        image={project.image}
        Github={project.Github}
        location={project.location}
      />
    </div>
  );
}

function Portfolio() {
  return (
    <div className=" portfolio-container rounded">
      <h3>Projects List</h3>
      <hr />
      <p>{project.map(crteatePortfolioCard)}</p>
    </div>
  );
}

export default Portfolio;
