import "regenerator-runtime/runtime";
import React from "react";
//import "./assets/global.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "../Cart/Cart";

const NavBarWidget = () =>{
    return (
    <Navbar collapseOnSelect expand="lg" bg="green" >
    <Container>
      <Navbar.Brand href="#home">VideoClub</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#peliculas">Peliculas</Nav.Link>
          <Nav.Link href="#videojuegos">VideoJuegos</Nav.Link>
           <CartWidget/>
        </Nav>
        <Nav>
          {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
          <Nav.Link eventKey={2} href="#memes">
           Iniciar Sesion
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export  default NavBarWidget