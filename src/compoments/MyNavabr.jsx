import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MyNavabr() {
  return (
    <Navbar sticky="top" id="navbar navbarCont sticky" bg="dark" expand="lg">
    <Container >
      <Navbar.Text className='white' href="#home">Arcade</Navbar.Text>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse  id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className=' smallFont white' href="#home">Home</Nav.Link>
          <Nav.Link className='white smallFont' href="#about">About</Nav.Link>
          <Nav.Link className=' white smallFont' href="#djs">Djs</Nav.Link>
          <Nav.Link className=' white smallFont' href="#contact">Contact</Nav.Link>
          <Nav.Link className=' white smallFont' href="#sets">Our Music</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}




