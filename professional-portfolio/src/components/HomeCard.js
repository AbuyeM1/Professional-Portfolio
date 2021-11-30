import React from "react";
import { motion } from "framer-motion";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-container">
        <div className="card-body">
          <h1>
            <em className="highlight">Abuye Mamuye</em>.
          </h1>
          <h5>
            <em className="highlight">I Am a Full Stack Wed Developer </em>
          </h5>
        </div>
      </div>
      <section>
        <ul className="icons h1">
          <li>
            <a href="https://github.com/AbuyeM1" className="fab fa-github">
              <br />
            </a>
            <p>github</p>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/abuye-mamuye-5a49921b0/"
              className="fab fa-linkedin"
            >
              <br />
            </a>
            <p>linkedin</p>
          </li>
          <li>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1jW1Q0hxQENzL2jQ4BploA2ac6frxrduz/view?usp=sharing"
            >
              <button className="btn btn-outline-danger">
                Download Resume{" "}
                <span>
                  <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                </span>
              </button>
            </a>
          </li>
        </ul>
      </section>
    </motion.div>
  );
}

export default HomeCard;
