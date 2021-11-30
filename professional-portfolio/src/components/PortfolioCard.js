import React from "react";
import { motion } from "framer-motion";

function PortfolioCard(props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card port-card rounded">
        <div className="img-container rounded">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="about-container">
          <ul>
            <li>
              <strong>Project Name:</strong> {props.name}
            </li>
            <li>
              <strong>Github:</strong> {props.project}
              <a href={props.Github}> Repo</a>
            </li>

            <li>
              <strong>Demo: </strong>
              <a href={props.location}> Deploy Link</a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default PortfolioCard;
