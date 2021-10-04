import React from "react";
import { Navbar, Col, Nav } from "react-bootstrap";






function NavBar ({key, handlePageChange}) {
  return(
  
  <Col>
  <Navbar bg="dark" variant="dark">
  <Nav variant="pills" activeKey={key} onSelect={handlePageChange}>
    <Navbar.Brand>Portfolio</Navbar.Brand>
      <Nav.Item><Nav.Link eventKey="AboutMe">About Me</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="Projects">Projects</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="ContactForm">Contact</Nav.Link></Nav.Item>
    </Nav>
  </Navbar>
  </Col>
  )
}
export default NavBar;