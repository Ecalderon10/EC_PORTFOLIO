import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";





function NavBar ({key, handlePageChange}) {
  return(
  
  <Container>
  <Navbar bg="dark" variant="dark">
  <nav variant="pills" activeKey={key} onSelect={handlePageChange}>
    <Nav className="">
    <Navbar.Brand href="">Portfolio</Navbar.Brand>
      <Nav.Item><Nav.Link eventKey="AboutMe">About Me</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="Projects">Projects</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="ContactForm">Contact</Nav.Link></Nav.Item>
    </Nav>
  </nav>
  </Navbar>
  </Container>
  )
}
export default NavBar;