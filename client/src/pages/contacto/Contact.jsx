import React from 'react'
import { Col, Container, Form,  Row } from 'react-bootstrap'
import { NavbarUser } from '../../components/NavbarUser'

const Contact = () => {
  return (
    <>
    <NavbarUser/>
    <main>
      <Container fluid>
        <Row>
          <Col xxl={6}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre y apellidos</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Elige</Form.Label>
              <Form.Select >
                <option>Elige</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Can't check this" disabled />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </main>
    </>
  )
}
export default Contact
