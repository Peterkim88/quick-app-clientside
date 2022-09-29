import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CustomerHeader() {
  return (
    <header>
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand href="#home">QuickApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Products</Nav.Link>
              <Nav.Link href="#orders">Orders</Nav.Link>
              <Nav.Link href="#orders">Orders</Nav.Link>
              <Nav.Link href="#orders">Orders</Nav.Link>
              <Nav.Link href="#orders">Orders</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default CustomerHeader;

