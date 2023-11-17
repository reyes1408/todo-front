import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import iconoGoogle from '../assets/iconoGoogle.png';
import ImgLogo from '../components/ImgLogo';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    if (formData.username === '' && formData.password === '') {
      setIsLoggedIn(true);
      console.log('Inicio de sesión exitoso');
    } else {
      console.log('Credenciales incorrectas');
    }
  };

  return (
    <div className="h-screen flex justify-center items-center font-sans bg-gradient-to-b from-blue-500 to-gray-300 bg-fixed">
      <div className="h-5/6 w-96 flex flex-col justify-center items-center bg-gray-100 rounded-lg shadow-2xl text-black border border-solido">  
        <ImgLogo />

        <h2 className="text-xl font-inter font-semibold mb-5">
          Inicia sesión
        </h2>

        <form onSubmit={handleLogin} className="w-72">

          <div className="mb-4">
            <input
              type="text"
              className="w-full text-sm px-3 py-1 rounded border border-gray-400 bg-gray-200 outline-none focus:border-blue-500"
              id="username"
              name="username"
              placeholder="Correo"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              className="w-full text-sm px-3 py-1 mt-2 rounded border border-gray-400 bg-gray-200 outline-none focus:border-blue-500"
              id="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-right">
            <Link to="/olvidar-contraseña">
              <p className="text-blue-500 text-sm font-semibold hover:underline mb-10">Olvidé mi Contraseña</p>
            </Link>
          </div>

        </form>

        <div className="mb-6">
          <Link to="/Menu">
            <button className="bg-blue-800 text-lg text-white font-semibold py-1 px-1 rounded w-72">
              Ingresar
            </button>
          </Link>
        </div>

          <div className="z-20 border-2 bg-white border-gray-300 rounded mb-2 mt-1 px-1 text-center text-gray-400 text-sm">
            <p>O inicia con:</p>
          </div>
          <hr className="z-10 relative bottom-5 left-0 w-72 border-t-2 border-gray-300"  />

        <div className="text-center mt-4">
          <button className="bg-gray-200 border border-gray-300 py-1 px-6 rounded inline w-72 whitespace-no-wrap">
            <img src={iconoGoogle} alt="Google Icon" className="h-5 w-5 inline" />
            <p className='inline text-gray-400 font-normal px-6'>Google</p>
          </button>
        </div>

        <div className="text-center text-sm mt-10 mb-4">
          <p className="inline font-semibold">No tienes una cuenta? </p>
          <p className="text-blue-500 inline font-bold hover:underline">
            <Link to="/registrar">Regístrate</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
