import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';

export default function DatosContacto() {
  return (
    <Stack direction="horizontal" gap={5} className="flex-column flex-md-row justify-content-center my-4">
      <Col xs={12} md={6} lg={4} className="d-flex flex-column align-items-center">
        <p><strong>Contacto</strong></p>
        <p><strong>Email:</strong> wellness_oasis@gmail.com</p>
        <p><strong>Télefono:</strong> 0123-1234567</p>
      </Col>
      <Col xs={12} md={6} lg={4} className="d-flex flex-column align-items-center justify-center">
        <p><strong>Horario</strong></p>
        <p><strong>Lunes a Viernes:</strong> de 8:00 a.m. a 6:00 p.m.</p>
        <p><strong>Sábados y Domingos:</strong> de 8:00 a.m. a 3:00 p.m.</p>
      </Col>
    </Stack>
  );
}