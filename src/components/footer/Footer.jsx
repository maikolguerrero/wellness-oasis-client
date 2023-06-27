import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DatosContacto from './DatosContacto';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-primary text-dark">
      <Container className="pb-1">
        <Row className="flex-column flex-md-row justify-content-center pt-2">
          <DatosContacto />
        </Row>
        <hr/>
        <p className="text-center">© 2023 Wellness Oasis. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
}