import React from "react";

function PortfolioCard(props) {
  return (
    <div className="card port-card rounded">
      <div className="img-container rounded">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="about-container">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Project:</strong> {props.project}
          </li>

          <li>
            <strong>Demo: </strong>
            <a href={props.location}> Deploy Link</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PortfolioCard;
