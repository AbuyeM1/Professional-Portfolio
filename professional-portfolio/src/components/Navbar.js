import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function navbar() {
  return (
    <div className="container-fluid">
      <Navbar collapseOnSelect expand="lg" variant="dark" id="navbar">
        <Navbar.Brand href="#home" id="brand">
          A M
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Portfolio">Projects</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default navbar;
