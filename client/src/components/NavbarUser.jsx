import { Container, Nav , Navbar } from 'react-bootstrap';
export const NavbarUser = () => {
  return (
      <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="/">
          <img src="../images/logo1.png" alt="" 
          width={80}
          className='border rounded-2'
          />          
          </Navbar.Brand>
          <Nav className="m-2 ">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/about">Conocenos</Nav.Link>
            <Nav.Link href="/services">Crea tu Web</Nav.Link>
            <Nav.Link href="/maintenance">Cuida tu Web</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   </header>
  );
}

