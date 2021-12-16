import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavbarComponent() {
  return (
    <Navbar>
      <Navbar.Brand href="#home">Eited NavBar</Navbar.Brand>
      <Nav classname="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav>
    </Navbar>
  );
}
