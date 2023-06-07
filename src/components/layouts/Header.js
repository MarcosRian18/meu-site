import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar className="navbar" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="menu" href="/">
            <img src="Group 1.png" alt="imagem da logo" width={"75px"} height={"75px"}/>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/projetos">Projetos</Nav.Link>
            <Nav.Link href="/curriculo">Currículo</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
