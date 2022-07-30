import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


export default function NavbarPage() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" sticky="top">
      <Container>
        <Navbar.Brand><Link to="/" style={{textDecoration: "none", color: "#fff"}}>LazkSports</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/features" style={{textDecoration: 'none', color: 'rgba(255,255,255,.55)'}}>Features</Link></Nav.Link>
            <Nav.Link><Link to="/livescores" style={{textDecoration: "none", color: 'rgba(255,255,255,.55)'}}>Live Scores</Link></Nav.Link>
            <NavDropdown title="Games" id="collasible-nav-dropdown">
              <NavDropdown.Item><Link to="/leagues" style={{textDecoration: "none", color: "#000"}}>Soccer Leagues</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Long Tennis
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Volley Ball</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Cricket Game
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
            <button type="button" class="btn btn-outline-danger">Get Started</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

