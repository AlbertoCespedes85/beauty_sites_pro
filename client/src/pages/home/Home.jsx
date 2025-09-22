import React from 'react';
import { NavbarUser } from '../../components/NavbarUser';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import "./home.css"
import { Footer } from '../../components/footer/Footer';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavbarUser />
      <main >
        <Container >
          <h1 className="title mb-4 mt-4">Webs que llenan tu agenda</h1>
          <h2 className='text-center'>Especialistas en peluquería , estetica y clinicas de belleza</h2>
          <Row>
            <Col>
              <img src="../images/webejm.png" alt="" />
            </Col>
            <Col>
              <p className='mt-4'>
                Haz que tu negocio brille en internet Creamos páginas web y
                tiendas online para peluquerías y centros de imagen que quieren
                atraer más clientes, mostrar sus servicios con estilo y crecer
                con soluciones digitales fáciles de usar.
              </p>
              <p>
                Diseñamos tu web y la enlazamos con tu tienda online o sistema de reservas Sabemos lo
                importante que es la primera impresión. Por eso, desarrollamos
                páginas que reflejan la esencia de tu negocio, con diseño
                moderno y funcionalidades que realmente necesitas:
              </p>
              <Row>
                <Col md={6}>
                    <div className='bordepink' onClick={()=>navigate("/portfolio")}>
                      <h5><img className='me-2' src="../images/ordenador.png" alt="" /> Webs atractivas y profesionales</h5>
                      <p>Diseños profesionales que reflejan la esencia de tu salón</p>
                    </div>
                 </Col>
                  <Col md={6}>
                    <div className='bordepink'>
                      <h5><img className='me-2' src="../images/llega.png" alt="" />SEO local optimizado</h5>
                      <p>Haz que te encuentren en Google y gana nuevas clientas</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className='bordepink'>
                      <h5><img className='me-2' src="../images/reserva.png" alt="" /> Reserva online conectadas a tu CRM</h5>
                      <p>Tu agendá siempre al dia, sin duplicados</p>
                    </div>
                  </Col>
                  <Col md={6} className='bordepink'>
                    <div >
                      <h5><img className='me-2' src="../images/security.png" alt="" /> Mantenimiento Seguridad  </h5>
                      <p>Actualizaciones , soporte y hosting incluido</p>
                    </div>
                  </Col>
              </Row>
                
              
              <div className="d-flex justify-content-end mt-3">
                <button onClick={()=>navigate("/contact")} className="submitBtn position-sticky ">
                  Quiero mi web ahora
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};
export default Home;
