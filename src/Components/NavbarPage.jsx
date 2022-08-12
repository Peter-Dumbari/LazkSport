import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { logout, useAuth } from "../firebase-configuration";





export default function NavbarPage() {
  const currentUser = useAuth();
  const HandleLogout = async() =>{
      await logout()
      localStorage.clear()
  }



  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
        sticky="top"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/home" style={{ textDecoration: "none", color: "#fff" }}>
              <h3>LazkSport</h3>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  to="/features"
                  style={{
                    textDecoration: "none",
                    color: "rgba(255,255,255,.55)",
                  }}
                >
                  Features
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/livescores"
                  style={{
                    textDecoration: "none",
                    color: "rgba(255,255,255,.55)",
                  }}
                >
                  Live Scores
                </Link>
              </Nav.Link>
              <NavDropdown title="Games" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link
                    to="/leagues"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    Soccer Leagues
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Long Tennis
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Volley Ball
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Cricket Game
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Navbar.Text>
                <span>{localStorage.getItem("Name")}</span>
              </Navbar.Text>
            <Nav>
              <Nav.Link >
              <NavDropdown title={<img src={localStorage.getItem('Image')} className="profilepix" alt="yes"/>}  id="collasible-nav-dropdown" className="d-flex">
                <NavDropdown.Item >
                  <span onClick={HandleLogout}>Logout</span>                
                </NavDropdown.Item>
              </NavDropdown>
              </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
