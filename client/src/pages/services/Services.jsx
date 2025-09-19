import React from 'react'
import { NavbarUser } from '../../components/NavbarUser';
import { Col, Container, Row } from 'react-bootstrap';

const Services = () => {
  return (
    <>
    <NavbarUser/>
    <main>
    <Container>
      <h1 className='title'>Nuestros Servicios:</h1>
      <p className='text-center '>Elige el plan que mejor se adapta a tu salón: creación única o creación con mantenimiento incluido.
      </p>
      <Row className='mt-5'>
        <Col >
        <img width={70} src="../images/ordenador.png" alt="" />
        <h3>Web Básica</h3>
        <p>Presencia digital + galeria + contacto +enlace reservas</p>
        </Col>
        
        <Col>
         <img width={70} src="../images/rocket.png" alt="" />
        <h3>Web Pro</h3>
        <p>Todo lo anterior + SEO local optimizado</p>
        </Col>
        <Col>
         <img width={70} src="../images/start.png" alt="" />
        <h3>Web Premium</h3>
        <p>Diseño avanzado + blog + formación de uso</p>
        </Col>
      </Row>
      </Container>
      <section className='text-center'>
        <h3><img src="../images/lock.png" alt="" /> Mantenimiento mensual</h3>
        <p>Hosting, seguridad ,actualizaciones</p>
      </section>
      <section>
        <h3 className='text-center'>Servicios extras</h3>
        <Container>
          <Row>
           
              <Col md={6}>
              <img src="../images/photo.png" alt="" />
              <p>Fotografía profesional</p>
              </Col>
           
              
              <Col md={6}>
              <img src="../images/gps.png" alt="" />
              <p>Btanding y diseño gráfico</p>
              </Col>
            
              <Col md={6}>
              <img src="../images/pencil.png" alt="" />
              <p>Copywriting especializado</p>
              </Col>
         
              <Col md={6}>
              <img src="../images/reserva.png" alt="" />
              <p>Integración con redes sociales</p>
              </Col>
           
           </Row>
        </Container>
      </section>
      <h3 className='text-center'>Solicita tu presupuesto</h3>
      <div className='d-flex justify-content-center mt-3'>
        <button className='submitBtn '>Solicita tu presupuesto</button>
        </div>
    
    </main>
    </>
  )
}
export default Services;
