import API_ENDPOINT from '../../config/api_endpoint';

// Función para validar el token
const validateToken = async (token) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/admin/panel`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (response.status === 200) return true;// El token es válido
    return false; // El token no es válido
  } catch (error) {
    console.error('Error al validar el token:', error);
    return false; // Ocurrió un error al validar el token
  }
};

export default validateToken;