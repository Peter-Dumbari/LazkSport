import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { logout, useAuth, SendVerification } from "../firebase-configuration";
import image from "../../src/images/newlogo.png"
import { useHistory } from "react-router-dom";





export default function NavbarPage() {
  const history = useHistory();
  const currentUser = useAuth();
  
  const HandleLogout = async() =>{
      await logout()
      history.push('/welcome')
      localStorage.clear()

  }



  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="black"
        variant="dark"
        fixed="top"
        sticky="top"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={image} width="150px"/>
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
                    color: "white",
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
                    color: "white",
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
                <span style={{color:"white"}}>{localStorage.getItem("Name")}</span>
              </Navbar.Text>
            <Nav>
              <Nav.Link >
              <NavDropdown title={<img src={localStorage.getItem('Image') || "https://th.bing.com/th/id/R.038417aec86fa504245a5410d28f350d?rik=68XYvXieCku0Og&riu=http%3a%2f%2fwww.atlantissportsclubs.com%2fwp-content%2fuploads%2f2016%2f09%2fBoyPlaceholder-01.png&ehk=pXeHbc8%2b3olVkHE8agQbUvW3OH5hLY1u5JtOgkMCM%2bA%3d&risl=&pid=ImgRaw&r=0"} className="profilepix" alt="yes"/>}  id="collasible-nav-dropdown" className="d-flex">
                <NavDropdown.Item >
                <span onClick={SendVerification}>Update Account</span>                
                </NavDropdown.Item>
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
