import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { logout, useAuth, SendVerification } from "../firebase-configuration";
import image from "../../src/images/newlogo.png";
import { useNavigate } from "react-router-dom";

export default function NavbarPage() {
  const navigate = useNavigate();
  const currentUser = useAuth();
  const [show, setShow] = useState(false);
  const [midShow, setMidShow] = useState(false);
  const [pics, setPics]=useState()
  const [nam, setNam]=useState()

  const profilePicture = sessionStorage.getItem("photo")
  const usersName = sessionStorage.getItem("name")
  
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const showMidDropdown = (e) => {
    setMidShow(!midShow);
  };
  const hideMidDropdown = (e) => {
    setMidShow(false);
  };

  const HandleLogout = async () => {
    await logout();
    navigate("/");
    window.sessionStorage.clear();
  };

  const handleVerification = async () => {
    await SendVerification().then(
      alert("An Email have being sent to your email")
    );
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="black"
        variant="dark"
        fixed="top"
        sticky="top">
        <Container>
          <Navbar.Brand>
            <Link to="/home">
              <img src={image} width="150px" />
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
                  }}>
                  Features
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/livescore"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}>
                  Live Scores
                </Link>
              </Nav.Link>
              <NavDropdown
                show={midShow}
                onMouseEnter={showMidDropdown}
                onMouseLeave={hideMidDropdown}
                title="Games"
                id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link
                    to="/leagues"
                    style={{ textDecoration: "none", color: "#000" }}>
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
              <span style={{ color: "white" }}>{usersName}</span>
            </Navbar.Text>
            <Nav>
              <Nav.Link>
                <NavDropdown
                  id="collasible-nav-dropdown"
                  show={show}
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                  title={<img src={profilePicture} className="profilepix" />}
                  className="d-flex">
                  <NavDropdown.Item>
                    <span onClick={handleVerification}>Update Account</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
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
