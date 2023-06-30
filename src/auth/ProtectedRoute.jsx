import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Panel from '../components/admin/Panel';

// Enrutamiento protegido
export default function ProtectedRoute({ route: Route }) {
  const { token, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si el token existe y es válido
      if (!token || !isLoggedIn) return navigate('/admin/login'); // Si no se ha iniciado sesión se redirige a la ruta del login
        navigate('/admin/panel'); // Si no se redirige al panel
  }, [token, isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (<Panel />) : (<Route />)}
    </>
  );
};