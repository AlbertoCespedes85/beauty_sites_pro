import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { NavbarUser } from '../../components/NavbarUser';
import "./contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    salon: '',
    telefono: '',
    email: '',
    web: '',
    direccionWeb: '',
    redes: [],
    tipoWeb: '',
    mantenimiento: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const redes = checked
        ? [...prev.redes, value]
        : prev.redes.filter(r => r !== value);
      return { ...prev, redes };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) alert('Formulario enviado!');
      else alert('Error al enviar');
    } catch (err) {
      console.error(err);
      alert('Error al enviar');
    }
  };

  return (
    <>
      <NavbarUser />
      <main className='content'>
        <Container>
          <h1 className='title'>Crea la web que tu salón se merece</h1>
          <h2 className='text-center mb-5 mt-2'>Rellena este formulario y te asesoramos sin compromiso</h2>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6} className='formu'>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre y apellidos</Form.Label>
                  <Form.Control 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Nombre de tu salón/peluquería</Form.Label>
                  <Form.Control
                    name="salon"
                    value={formData.salon}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Teléfono de contacto</Form.Label>
                  <Form.Control
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>¿Ya tienes página web?</Form.Label>
                  <Form.Select
                    name="web"
                    value={formData.web}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona...</option>
                    <option value="si_mejorar">Sí, pero quiero mejorarla</option>
                    <option value="si_mantenimiento">Sí, pero necesito mantenimiento</option>
                    <option value="no">No, aún no tengo</option>
                  </Form.Select>
                </Form.Group>

                {formData.web && formData.web !== "no" && (
                  <Form.Group className="mb-3">
                    <Form.Label>Si tienes web, escribe aquí tu dirección</Form.Label>
                    <Form.Control
                      name="direccionWeb"
                      value={formData.direccionWeb}
                      onChange={handleChange}
                    />
                  </Form.Group>
                )}

                <Form.Group className="mb-3">
                  <Form.Label>¿Tienes perfil activo en redes sociales?</Form.Label>
                  <div>
                    {['Instagram','Facebook','TikTok','Treads','Youtube','No'].map(r => (
                      <Form.Check 
                        key={r}
                        type="checkbox"
                        label={r}
                        value={r}
                        checked={formData.redes.includes(r)}
                        onChange={handleCheckbox}
                      />
                    ))}
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>¿Qué tipo de web te interesa?</Form.Label>
                  <Form.Select
                    name="tipoWeb"
                    value={formData.tipoWeb}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona...</option>
                    <option value="basica">Web Básica → presencia digital + galería + contacto + enlace reservas</option>
                    <option value="pro">Web Pro → todo lo anterior + SEO local optimizado + soporte inicial</option>
                    <option value="premium">Web Premium → diseño avanzado + blog + formación de uso</option>
                    <option value="asesoria">Prefiero que me asesores antes de decidir</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>¿Quieres incluir mantenimiento mensual?</Form.Label>
                  <Form.Select
                    name="mantenimiento"
                    value={formData.mantenimiento}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona...</option>
                    <option value="si_hosting">Sí, con hosting y actualizaciones</option>
                    <option value="si_basico">Sí, solo soporte básico</option>
                    <option value="no">No, de momento no</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>¿Quieres contarnos algo más sobre tu negocio o tus objetivos?</Form.Label>
                  <textarea
                    className="form-control"
                    placeholder="Cuentanos"
                    style={{ height: "100px" }}
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                  ></textarea>
                </Form.Group>

                <div>
                  <button className='submitBtn mt-3' type="submit">Enviar</button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Contact;