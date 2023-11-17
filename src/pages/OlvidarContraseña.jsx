import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImgLogo from '../components/ImgLogo';

const OlvidarContraseña = () => {
  const [email, setEmail] = useState('');
  const [setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email.username === '') {
      setIsLoggedIn(true);
      console.log('Correo Electronico correcto');
    } else {
      console.log('Correo Electronico incorrecto');
    }
  };


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResetPassword = () => {
    // Aquí puedes implementar la lógica para enviar el enlace de restablecimiento
    // utilizando el correo electrónico ingresado (el valor de 'email').
  };

  return (
    <div className="h-screen flex justify-center items-center font-sans bg-gradient-to-b from-blue-500 to-gray-300 bg-fixed">
      <div className="h-5/6 px-10 flex flex-col justify-center items-center bg-gray-100 rounded-lg shadow-2xl text-black border border-solid border-gray-300">
        <ImgLogo />
        <h1 className="text-xl font-inter font-semibold mb-4">
          ¿Te olvidaste de tu contraseña?
        </h1>

        <div className='text-center text-xs font-semibold mb-14'>
          <p>Ingresa el correo con el que se registró.</p>
          <p>Recibirá un enlace temporal para restablecer su</p>
          <p>contraseña</p>
        </div>

        <form onSubmit={handleLogin} className="w-72 mb-4">
            <input
              type="email"
              className="w-full text-sm px-3 py-1 rounded border border-gray-400 bg-gray-200"
              id="username"
              name="username"
              placeholder="Correo"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <Link to="/">
              <button className="bg-blue-700 text-white font-bold py-1 px-4 rounded w-72 mt-7" onClick={handleResetPassword}>
                Aceptar
              </button>
            </Link>
        </form>
      </div>
    </div>
  );
};

export default OlvidarContraseña;
