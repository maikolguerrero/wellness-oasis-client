import React, { useEffect, useState } from 'react';
import CardService from './ServiceCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import API_ENDPOINT from '../../../config/api_endpoint';

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch(`${API_ENDPOINT}/services`);
      const data = await response.json();
      setServices(data.data.services);
    } catch (error) {
      console.error('Error al obtener los servicios:', error);
    }
  };

  return (
    <>
      <Container fluid className="pt-5 bg-secondary text-light" id="pociones" style={{ width: "100%" }}>
        <h1 className="text-center mb-4 text-black">Servicios</h1>
        {services.filter((service) => service.is_promotion == 0).length == 0 ? (
          <p className="text-center text-black pb-5 mb-0 d-flex justify-content-center fs-2">No hay servicios disponibles</p>
        ) : (
          <Row xs={1} sm={1} md={2} lg={3} xl={3} className="justify-content-center">
            {services
              .filter((service) => service.is_promotion == 0)
              .map((service) => (
                <Col key={service.id} className="mb-5 d-flex justify-content-center">
                  <CardService service={service} />
                </Col>
              ))}
          </Row>
        )}
      </Container>

      <Container fluid className="pt-5 text-light" id="pociones" style={{ width: "100%" }}>
        <h1 className="text-center mb-4 text-black">Promociones Especiales</h1>
        {services.filter((service) => service.is_promotion == 1).length == 0 ? (
          <p className="text-center text-black pb-5 mb-0 d-flex justify-content-center fs-2">No hay promociones disponibles</p>
        ) : (
          <Row xs={1} sm={1} md={2} lg={3} xl={3} className="justify-content-center">
            {services
              .filter((service) => service.is_promotion == 1)
              .map((service) => (
                <Col key={service.id} className="mb-5 d-flex justify-content-center">
                  <CardService bg_color="secondary" text_color="dark" service={service} />
                </Col>
              ))}
          </Row>
        )}
      </Container>
    </>
  );
}
