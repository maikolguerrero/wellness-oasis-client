import { createContext, useContext, useState, useEffect } from 'react';
import validateToken from '../auth/ValidateToken';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
      // Obtener valor del token del LocalStorage
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  useEffect(() => {
    const checkTokenValidity = async () => {
      if (!token || !(await validateToken(token))) return setIsLoggedIn(false);
      setIsLoggedIn(true);
    };
    //Verificar el validez del token
    if (token) checkTokenValidity();
  }, [token, isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);