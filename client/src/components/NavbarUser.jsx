import { Container, Nav , Navbar } from 'react-bootstrap';
export const NavbarUser = () => {
  return (
      <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="/">Bienvenidos</Navbar.Brand>
          <Nav className="m-2 ">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/about">Sobre mi</Nav.Link>
            <Nav.Link href="#pricing">Proyectos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   </header>
  );
}

