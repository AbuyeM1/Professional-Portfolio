import React from "react";
import PortfolioCard from "../PortfolioCard";
import project from "../../assets/project";

function crteatePortfolioCard(project) {
  return (
    <div>
      <PortfolioCard
        name={project.name}
        image={project.image}
        project={project.project}
        location={project.location}
      />
    </div>
  );
}

function Portfolio() {
  return (
    <div className=" portfolio-container rounded">
      <h1 className="title-h1">Projects List</h1>
      <p className="portfolio">{project.map(crteatePortfolioCard)}</p>
    </div>
  );
}

export default Portfolio;
