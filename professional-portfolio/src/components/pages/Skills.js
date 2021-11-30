import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import Html from "../../assets/html.png";
import Css from "../../assets/CSS.png";
import Js from "../../assets/js.png";
import Mongodb from "../../assets/mongodb.png";
import Node from "../../assets/node.png";
import ReactImg from "../../assets/react.png";
import BootstrapImg from "../../assets/bootstrap.png";
import ExpressImg from "../../assets/express.png";
import Git from "../../assets/git.png";
import Sql from "../../assets/sql.png";
import { motion } from "framer-motion";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-container">
        <div className="profile" id="profile">
          <div className="skill-title" data-aos="fade-up">
            <h3>Skills</h3>
          </div>
          <div className="skills">
            <Container>
              <Row>
                <Col s={6} md={8} data-aos="fade-up">
                  <Image className="skill-image" src={Html} rounded />
                  <div>HTML 5</div>
                </Col>

                <Col s={6} md={8} data-aos="fade-up">
                  <Image className="skill-image" src={Css} rounded />
                  <div>CSS 3</div>
                </Col>
                <Col s={6} md={8} data-aos="fade-up">
                  <Image className="skill-image" src={Js} rounded />
                  <div>Javascript</div>
                </Col>
                <Col s={6} md={8} data-aos="fade-up">
                  <Image className="skill-image" src={Mongodb} rounded />
                  <div>MongoDB</div>
                </Col>
                <Col s={6} md={8} data-aos="fade-up">
                  <Image className="skill-image" src={Git} rounded />
                  <div>Git</div>
                </Col>
              </Row>
            </Container>

            <Container>
              <Row>
                <Col s={6} md={5} data-aos="fade-up">
                  <Image className="skill-image" src={Node} rounded />
                  <div>NodeJs</div>
                </Col>
                <Col s={6} md={8} data-aos="fade-up">
                  <Image className="skill-image" src={ReactImg} rounded />
                  <div>React</div>
                </Col>
                <Col s={6} md={8} data-aos="fade-up">
                  <Image className="skill-image" src={BootstrapImg} rounded />
                  <div>Bootstrap</div>
                </Col>
                <Col s={6} md={8} data-aos="fade-up">
                  <Image className="skill-image" src={ExpressImg} rounded />
                  <div>Express</div>
                </Col>
                <Col s={6} md={8} data-aos="fade-up">
                  <Image className="skill-image" src={Sql} rounded />
                  <div>MySQL</div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
