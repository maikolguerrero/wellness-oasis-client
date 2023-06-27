import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import API_ENDPOINT from '../../../config/api_endpoint';

export default function CardService({ service , bg_color, text_color}) {
  const { name, description, price, image, is_promotion, discount } = service;

  return (
    <Card className={`bg-${bg_color} text-${text_color}`} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${API_ENDPOINT}/images/${image}`} alt="imágen_servicio" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {is_promotion == 1 ? (
          <Card.Text className='text-danger'><span>Descuento: {discount}%</span></Card.Text>
        ) : (<></>)}
      </Card.Body>
      <Card.Footer>
        <div className="d-flex justify-content-between align-items-center">
          <div>Precio: {price}</div>
          <Button variant="primary">Reservar</Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

CardService.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    is_promotion: PropTypes.number.isRequired,
    discount: PropTypes.string.isRequired,
  }).isRequired,
  bg_color: PropTypes.string,
  text_color: PropTypes.string
};