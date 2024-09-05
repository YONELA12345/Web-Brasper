import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto de autenticación
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Efecto para cargar los datos de localStorage solo en el cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem('authToken');
      const storedUserData = localStorage.getItem('userData');

      if (storedToken) {
        setAuthToken(storedToken);
        setIsLoggedIn(true);
      }

      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      }
    }
  }, []);

  // Función para iniciar sesión
  const login = (token, userData) => {
    setAuthToken(token);
    localStorage.setItem('authToken', token);
    setIsLoggedIn(true);
    setUserData(userData);
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  // Efecto para sincronizar los datos del usuario con localStorage cuando cambian
  useEffect(() => {
    if (typeof window !== "undefined" && userData) {
      localStorage.setItem('userData', JSON.stringify(userData));
    }
  }, [userData]);

  // Función para cerrar sesión
  const logout = () => {
    setAuthToken(null);
    setIsLoggedIn(false);
    setUserData(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
    }
  };

  // Función para actualizar los datos del usuario
  const updateUserData = (newUserData) => {
    setUserData(newUserData);
    if (typeof window !== "undefined") {
      localStorage.setItem('userData', JSON.stringify(newUserData));
    }
  };

  return (
    <AuthContext.Provider value={{ userData, setUserData, updateUserData, isLoggedIn, login, logout, authToken, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
