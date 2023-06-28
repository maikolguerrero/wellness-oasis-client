import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import API_ENDPOINT from '../../../config/api_endpoint';
import { useAlert } from '../../context/AlertContext';
import CustomAlert from '../alerts/CustomAlert';

export default function LoginForm() {
  const { showAlert, setShowAlert, messageAlert, setMessageAlert, redirectPath, setRedirectPath, handleDismiss } = useAlert();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateText = (text) => text.trim() !== '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRedirectPath('');

    const data = {
      username,
      password
    };

    const verifyUsername = validateText(username);
    const verifyPassword = validateText(password);

    // Si está mal llenado el campo, agregar mensaje para notificar al usuario
    setUsernameError(!verifyUsername ? 'Por favor, ingresa un nombre de usuario.' : '');
    setPasswordError(!verifyPassword ? 'Por favor, ingresa un contraseña.' : '');

    if (!verifyUsername || !verifyPassword) return;

    try {
      const response = await fetch(`${API_ENDPOINT}/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const json = await response.json();
        const token = json.token;

        // Guardar el token en el Local Storage
        localStorage.setItem('token', token);

        // Redireccionar a la ruta del panel después de iniciar sesión
        setRedirectPath('/admin/panel');
        setMessageAlert('Inicio de sesión exitoso');
        setShowAlert(true);
      } else {
        // Manejar error de inicio de sesión no exitoso
        const dataResponse = await response.json();
        setMessageAlert(dataResponse.message);
        setShowAlert(true);
      }
    } catch (error) {
      // Manejar error de solicitud
      setRedirectPath('');
      setMessageAlert('Hubo un problema al realizar la solicitud.');
      setShowAlert(true);
    }
  };

  return (
    <Container fluid className="py-5 bg-secondary d-flex justify-content-center" style={{ width: '100%' }}>
      <div className="py-5">
        <Card className="m-4 p-4 rounded bg-primary" style={{ width: '20rem' }}>
          <h4 className="mb-4">Inicio de sesión</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username" className="mb-3">
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                isInvalid={usernameError !== ''}
              />
              <Form.Control.Feedback type="invalid" className="error-message">
                {usernameError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={passwordError !== ''}
              />
              <Form.Control.Feedback type="invalid" className="error-message">
                {passwordError}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary mx-2" as={Link} to="/admin/registro">
              Crear cuenta
            </Button>
            <Button variant="success" type="submit" className="mx-3">
              Ingresar
            </Button>

          </Form>
        </Card>
        <CustomAlert
          message={messageAlert}
          show={showAlert}
          duration={5000}
          onDismiss={handleDismiss}
          redirectPath={redirectPath}
        />
      </div>
    </Container>
  );
}
