import React from 'react'
import Container from 'react-bootstrap/Container';

export default function NotFound() {
  return (
    <Container fluid className="py-5 bg-secondary text-center" style={{ width: "100%" }}>
      <div className="py-5">
        <div className="py-5">
          <div className="py-5">
            <h1 className='text-danger py-1'>404 - Página no encontrada</h1>
            <h2 className='text-warning'>La página que estás buscando no existe.</h2>
          </div>
        </div>
      </div>
    </Container>
  )
}
