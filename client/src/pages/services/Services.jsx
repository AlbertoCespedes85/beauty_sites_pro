import React from 'react'
import { NavbarUser } from '../../components/NavbarUser';
import { Col, Container, Row } from 'react-bootstrap';
import "./services.css"
import { Footer } from '../../components/footer/Footer';
const Services = () => {
  return (
    <>
    <NavbarUser/>
    <main>
    <Container>
      <div className="banner">
  🎉 25% de descuento por lanzamiento 🎉
</div>
      <h1 className='title mt-4'>Nuestros Servicios:</h1>
      <p className='text-center '>Elige el plan que mejor se adapta a tu salón: creación única o creación con mantenimiento incluido.
      </p>
      <Row className='mt-5'>
        <Col className='ofertas'>
        <img width={70} src="../images/ordenador.png" alt="" />
        <h3>Web Básica</h3>
        <p>✂ Web Básica - Para empezar a estar online

Incluye:
</p>
<ul>
  <li>Diseño de página web moderna y visual (1-3 secciones: inicio, galería, contacto).</li>
  <br />
  <li>Enlace directo a tu sistema de reservas online (Koibox, Phorest, Timify u otro CRM)</li>
  <br />
  <li>Información básica de tu salón (servicios principales, dirección, teléfono, WhatsApp)</li>
  <br />
  <li>Galería de fotos para mostrar tu trabajo</li>
  <br />
  <li>Integración con redes sociales (iconos enlazados)</li>
  <br />
  <li>Diseño adaptado a móvil y tablet</li>
  <br />
  <li>Certificado SSL de seguridad</li>
</ul>
<div className='falsebtn'>
  <p className='mt-4 text-light' >Precio de lanzamiento :</p>
  <p className='prize'>350 €</p>
</div>
        </Col>
        
        <Col className='ofertas'>
         <img width={70} src="../images/rocket.png" alt="" />
        <h3>Web Pro</h3>
        <p>🚀 Web Pro - Para atraer más clientas y aparecer en Google

Incluye todo lo anterior más: </p>
<ul>
  <li>SEO Local optimizado (para que tu salón aparezca en Google Maps y búsquedas cercanas)</li>
  <br />
  <li>Textos persuasivos y optimizados para atraer clientas</li>
  <br />
  <li>Hasta 5 secciones (ejemplo: inicio, servicios, galería, contacto, sobre nosotros)</li>
  <br />
  <li>	Botones de WhatsApp y llamada directa</li>
  <br />
  <li>Configuración de Google My Business / ficha de negocio</li>
  <br />
  <li>Soporte inicial para cambios y dudas</li>
  <br />
  <li>Integración con reseñas de Google o testimonios de clientas</li>

</ul>
<div className='falsebtn'>
  <p className='mt-4 text-light' >Precio de lanzamiento :</p>
  <p className='prize'>490 €</p>
</div>
        </Col>
        <Col className='ofertas'>
         <img width={70} src="../images/start.png" alt="" />
        <h3>Web Premium</h3>
        <p>👑 Web Premium – Para convertir tu web en tu mejor comercial

Incluye todo lo anterior más: </p>
<ul>
  <li>Diseño avanzado y totalmente personalizado a la imagen de tu salón</li>
  <br />
  <li>Blog integrado para publicar novedades, tendencias y consejos de belleza</li>
  <br />
  <li>Formación para que tú o tu equipo sepáis usar la web y actualizarla fácilmente</li>
  <br />
  <li>Hasta 8 secciones (ejemplo: inicio, servicios, precios, galería, blog, contacto, quiénes somos, ofertas)</li>
  <br />
  <li>Estrategia inicial de contenidos y palabras clave para posicionar en Google</li>
  <br />
  <li>Integración avanzada con redes sociales (feed de Instagram en la web, enlaces a TikTok o YouTube)</li>
  <br />
  <li>Integración con newsletter o WhatsApp Marketing</li>
  <br />
  <li>1 mes de mantenimiento incluido (seguridad, copias de respaldo, actualizaciones)</li>
</ul>
<div className='falsebtn'>
  <p className='mt-4 text-light' >Precio de lanzamiento :</p>
  <p className='prize'>950 €</p>
</div>

        </Col>
      </Row>
      </Container>
      <section className='text-center'>
        <h3><img src="../images/lock.png" alt="" /> Promoción especial</h3>
        <p>Llévate tu web con total tranquilidad: contratando 1 año de mantenimiento, te regalamos los 3 primeros meses</p>
      </section>
      <div className='d-flex justify-content-center mt-5'>
        <button className='submitBtn '>Solicita tu presupuesto</button>
        </div>
    
    </main>
    
    </>
  )
}
export default Services;
