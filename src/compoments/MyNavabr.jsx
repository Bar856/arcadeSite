import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react'

export default function MyNavabr() {
  return (
    <Navbar bg="dark" expand="lg" className='navbarCont'>
      <Container >
        <Navbar.Brand className='white smallFont' href="#home">Arcade</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link className='white smallFont' href="#home">Home</Nav.Link>
            <Nav.Link className='white smallFont' href="#about">About</Nav.Link>
            <Nav.Link className='white smallFont' href="#djs">Djs</Nav.Link>
            <Nav.Link className='white smallFont' href="#contact">Contact</Nav.Link>
            <Nav.Link className='white smallFont' href="#sets">Our Music</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* <NavDropdown title="Djs" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          Separated link
        </NavDropdown.Item>
      </NavDropdown> */}
    </Navbar>
  )
}
