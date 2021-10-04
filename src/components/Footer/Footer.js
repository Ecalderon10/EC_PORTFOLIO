import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";

const Footer = () => {
   return(
   <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Links</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="https://www.linkedin.com/in/edgar-calderon-14876815b/" target="_blank">Linkedin</Nav.Link>
      <Nav.Link href="https://github.com/Ecalderon10" target="_blank">Github</Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/edgar-calderon-14876815b/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAACZgoMgBqkLMMASU4RU8J3usRGDF5pYXe3s,1635469435253)/" target="_blank">Resume</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </>
   )
}

export default Footer;