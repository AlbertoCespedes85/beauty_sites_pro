import React from 'react'
import { NavbarUser } from '../../components/NavbarUser';
import { Col, Container, Row } from 'react-bootstrap';
import "./maintenance.css"
import { Footer } from '../../components/footer/Footer';
const Maintenance = () => {
  return (
     <>
    <NavbarUser/>
    <main>
    <Container>
      <h1 className='title mt-4'>🔒 Mantenimiento Mensual</h1>
      <p className='text-center '>Elige el mejor plan de mantenimiento .
      </p>
      <Row className='mt-5'>
        <Col className='Mant'>
         <img width={70} src="../images/rocket.png" alt="" />
       <h3>Mantenimiento Básico - 39 €/mes</h3>
       <br />

  <h4 className='blut'>👉 Para tener tu web siempre segura y funcionando al 100%. Incluye:</h4>

<br />
<ul>
  <li>🌐 Hosting rápido y seguro (tu web siempre online)</li>
  <br />
  <li>🔑 Certificado SSL (candado de seguridad en el navegador)</li>
  <br />
  <li>🛡 Copias de seguridad automáticas diarias</li>
  <br />
  <li>🔄 Actualizaciones de seguridad y plugins cada mes</li>
  <br />
  <li>🆘 Soporte técnico básico (respuesta en 72h)</li>
</ul>
        </Col>
        <Col className='Mant'>
         <img width={70} src="../images/start.png" alt="" />
        <h3>Mantenimiento Pro - 69 €/mes</h3>
        <br />
        <h4 className='blut'>👉 Para olvidarte por completo y mantener tu web siempre al día. Incluye todo lo del plan Básico más: </h4>
        <br />
<ul>
  <li>✍ Cambios de contenido mensual(texto, fotos, horarios, ofertas, menús de servicios)</li>
  <br />
  <li>🎯 SEO local básico: optimización mensual de títulos y descripciones para mejorar en Google Maps</li>
  <br />
  <li>📰 Actualización de promociones: subimos por ti las campañas (rebajas, Black Friday o Navidad.)</li>
  <br />
  <li>📱 Integración con redes sociales: añadimos banners o botones de Instagram/Facebook cuando lo necesites</li>
  <br />
  <li>🚀 Revisión de velocidad y rendimiento cada 2 meses</li>
  <br />
  <li>🛠 Soporte prioritario 24-48h (frente a 72h del plan básico)</li>
</ul>


        </Col>
      </Row>
      </Container>
      <div className='d-flex justify-content-center mt-3'>
        <button className='submitBtn '>Solicita tu presupuesto</button>
        </div>
    
    </main>
    </>
  )
}
export default Maintenance;
