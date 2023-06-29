import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

export default function NavbarResponsive() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image src='/assets/logo.png' alt="logo" as={Link} to="/" className="img-thumbnail p-1" style={{ width: '50px', height: 'auto' }} />
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/" className='text-black'>Wellness Oasis</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className='font-weight-bold text-black'>Inicio</Nav.Link>
              <Nav.Link as={Link} to="/blog" className='font-weight-bold text-black'>Blog</Nav.Link>
              <Nav.Link href="#contacto" className='font-weight-bold text-black'>Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}