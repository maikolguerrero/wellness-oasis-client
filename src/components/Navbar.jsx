import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

export default function NavbarResponsive() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Image src='/assets/logo.png' alt="logo" className="img-thumbnail mx-2 p-1" style={{ width: '50px', height: 'auto'}} />
          <Navbar.Brand href="#inicio" className='text-black'>Wellness Oasis</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#inicio" className='font-weight-bold text-black'>Inicio</Nav.Link>
              <Nav.Link href="#servicios" className='font-weight-bold text-black'>Servicios</Nav.Link>
              <Nav.Link href="#blog" className='font-weight-bold text-black'>Blog</Nav.Link>
              <Nav.Link href="#contacto" className='font-weight-bold text-black'>Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}