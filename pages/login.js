import React, { useState, useContext } from 'react';
import HandleSignIn from '../services/handleSingIn_service'; // Asegúrate de que esté escrito correctamente
import { useRouter } from 'next/router'; // Cambia useNavigate por useRouter
import { AuthContext } from '../Providers/auth_provider'; // Usa la importación correcta para el contexto

const Login = () => {
  const router = useRouter(); // Inicializa el router en Next.js
  const { setUserData, login } = useContext(AuthContext); // Asegúrate de que el contexto funcione correctamente

  const leftClick = () => {
    const container = document.getElementById('container');
    container.classList.remove('right-panel-active');
  };

  const rightClick = () => {
    const container = document.getElementById('container');
    container.classList.add('right-panel-active');
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInClick = () => {
    HandleSignIn(username, password)
      .then(signInResult => {
        if (signInResult.success) {
          login(signInResult.data.token, signInResult.data.userData); // Pasa token y datos del usuario
          setUserData(signInResult.data.userData);
          router.push('/'); // Redirige a la página principal
        } else {
          // Mostrar mensaje de error al usuario
          alert(signInResult.message);
        }
      })
      .catch(error => {
        console.error('Error al iniciar sesión:', error);
        // Mostrar mensaje de error al usuario
        alert('Error al iniciar sesión');
      });
  };

  return (
    <>
      
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form action="#">
          <h1 style={{ fontSize: '40px' }}>Ingresar</h1>
            <span>Escribe tu usuario y contraseña</span>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Usuario"
            />
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Contraseña"
            />
            <p>Olvidaste tu contraseña?</p>
            <button type="button" onClick={handleSignInClick}>Ingresar</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>¿Quieres ser parte?</h1>
              <p>Se parte de nuestro gran equipo en Footloose</p>
              <p>Envia un correo a: correo@gmail.com</p>
              <button className="ghost" onClick={leftClick}>Volver</button>
            </div>
            <div className="overlay-panel overlay-right">
            <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>Bienvenido</h1>
              <p>Escribe tu usuario y contraseña para poder ingresar al administrador de la galeria de footloose</p>
              <button className="ghost" onClick={rightClick}>Ser parte</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
