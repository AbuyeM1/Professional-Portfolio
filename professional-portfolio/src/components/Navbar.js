import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  faEnvelope,
  faFileAlt,
  faHome,
  faProjectDiagram,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function navbar() {
  return (
    <div className="container-fluid">
      <Navbar collapseOnSelect expand="lg" variant="dark" id="navbar">
        <Navbar.Brand href="#home" id="brand">
          <em className="highlight">
            <strong>Abuye.M</strong>
          </em>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">
              <span>
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
              </span>
              Home
            </Nav.Link>
            <Nav.Link href="/About">
              <span>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
              </span>
              About
            </Nav.Link>
            <Nav.Link href="/Portfolio">
              <span>
                <FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon>
              </span>
              Projects
            </Nav.Link>
            <Nav.Link href="/Skills">
              <span>
                <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>
              </span>{" "}
              Skills
            </Nav.Link>
            <Nav.Link href="/Contact">
              <span>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </span>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default navbar;
