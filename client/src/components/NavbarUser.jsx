import { Container, Nav , Navbar } from 'react-bootstrap';
export const NavbarUser = () => {
  return (
      <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="/">
          <img src="../images/logo.png" alt="" 
          width={100}
          />          
          </Navbar.Brand>
          <Nav className="m-2 ">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/about">Conocenos</Nav.Link>
            <Nav.Link href="/services">Servicios</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   </header>
  );
}

