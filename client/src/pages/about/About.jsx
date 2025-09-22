import React from 'react'
import { NavbarUser } from '../../components/NavbarUser';
import { Col, Container, Row } from 'react-bootstrap';
import { Footer } from '../../components/footer/Footer';

const About = () => {
  return (
    <>
    <NavbarUser/>

    <main>
      <Container>
        <Row>
          <h1 className='title mt-4 mb-4'>Todo lo que tienes que saber sobre nosotros</h1>
          <Col>
          <img width={800} src="../images/owner.png" alt="" />
          </Col>
          <Col>
           <h3 className='title'>Quiénes somos</h3>
           <p>En Beauty Sites ayudamos a peluquerías, salones y clínicas de belleza a dar el salto digital. Somos una agencia creada desde dentro del sector, porque sabemos lo que significa llenar una agenda, fidelizar clientas y destacar frente a la competencia.
      </p>
           <h3 className='title'>Por qué lo hacemos</h3>
           <p>Detectamos que muchos salones tenían webs bonitas, pero poco útiles. Nuestra misión es crear páginas que no solo luzcan bien, sino que realmente atraigan citas y conecten con tu día a día.
      </p>
           <h3 className='title'>Nuestra visión</h3>
           <p>Queremos convertirnos en la agencia digital de referencia para el sector beauty en España, acompañando a cada salón en su crecimiento online con herramientas claras, soporte continuo y resultados reales.
      </p>
          </Col>
        </Row>
      </Container>
    </main>
    </>
    
  )
}
export default About;
