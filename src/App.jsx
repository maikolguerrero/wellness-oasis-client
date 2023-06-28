import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarResponsive from './components/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './components/Home.jsx';
import NotFound from './components/NotFound.jsx';
import LoginForm from './components/forms/LoginForm.jsx'
import RegisterForm from './components/forms/RegisterForm.jsx';
import Panel from './components/admin/Panel.jsx';
import { AlertProvider } from './context/AlertContext.jsx';
import API_ENDPOINT from '../config/api_endpoint.js';
import { useNavigate } from 'react-router-dom';

// Función para validar el token
const validateToken = async (token) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/admin/panel`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.status === 200) return true; // El token es válido
    return false; // El token no es válido
  } catch (error) {
    console.error('Error al validar el token:', error);
    return false; // Ocurrió un error al validar el token
  }
};

// Enrutamiento protegido
const ProtectedRoute = ({ route: Route }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Obtener el token del Local Storage

  useEffect(() => {
    // Verificar si el token existe y es válido
    if (!token || !validateToken(token)) navigate('/admin/login');

  }, [token, navigate]);

  // Si el token es válido, mostrar el componente
  return <Route />;
};

export default function App() {
  return (
    <main>
      <AlertProvider>
        <BrowserRouter>
          <NavbarResponsive />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/blog" element={<>blog</>} />
            <Route path="/admin" element={<>admin</>} />
            <Route path="/admin/login" Component={LoginForm} />
            <Route path="/admin/registro" Component={RegisterForm} />
            <Route path="/admin/panel" element={<ProtectedRoute route={Panel} />} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </AlertProvider>
    </main>
  );
}