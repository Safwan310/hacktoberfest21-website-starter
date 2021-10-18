import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
      <Navbar bg="warning ">
        <Container className="p-3">
          <div>
          <Link to = "/deleteContestant" className="text-decoration-none">🎃</Link>
          <Link to = "/" className = "text-decoration-none"><Navbar.Brand>Halloween Gala</Navbar.Brand></Link>
          </div>
          
          <Nav className="me-0">
            <Link to = "/addContestant" className="text-decoration-none">Add Contestant</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
