import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="warning ">
                <Container className = "p-3">
                <Navbar.Brand href="#home">🎃 Halloween Gala</Navbar.Brand>
                <Nav className="me-0">
                <Nav.Link href="#addContestant">+</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
