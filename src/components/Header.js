import React from 'react';
import { Container, Navbar, Nav, Row } from 'react-bootstrap';

function CustomerHeader() {
  return (
    <header>
      <Navbar bg="primary" variant='dark' expand="lg" collapseOnSelect >
        <Container>
          <Navbar.Brand href="/">Quick</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" class="navbar-nav ml-auto">
            <Nav className="ml-auto">
              <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
              <Nav.Link href="/login"><i className='fas fa-user'></i> Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default CustomerHeader;

