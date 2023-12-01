import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import ImgLogo from '../components/ImgLogo';

const Registro = () => {
    const [showModal, setShowModal] = useState(false);
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    const [mensaje, setMensaje] = useState('');

    const handleRegistroExitoso = async (e) => {
        e.preventDefault();
        
        const b = {
            email: correo,
            nombre: nombre,
            contrasena: contrasena
        }
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(b)
            }
            const data = await fetch('http://127.0.0.1:3000/api/user/register', options);
            const datos = await data.json();

            if (data.ok) {
                //setMensaje(datos.mensaje);
                console.log(datos.mensaje);
                //setShowModal(true);
                // setTimeout(() => {
                    
                // }, 1000);
            }

        } catch (error) {
            console.error('Error al obtener las tareas:', error);
        }
    };

    return (
        <div className="h-screen flex justify-center items-center font-sans bg-gradient-to-b from-blue-500 to-gray-300 bg-fixed">
            <div className="h-5/6 p-10 flex flex-col justify-center items-center bg-gray-100 rounded-lg shadow-2xl text-black border border-solid border-gray-300">
                {showModal && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <p className="text-green-500 font-semibold text-lg mb-4">
                                {mensaje}
                            </p>
                            <button className="bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={() => setShowModal(false)}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                )}

                <div className='mt-10'>
                    <ImgLogo />
                </div>

                <h1 className="font-inter mb-4 text-xl font-bold">
                    Registrate
                </h1>

                <p className="mb-8 text-gray-400 text-xs">
                    Regístrate, te tomara menos de un minuto.
                </p>

                <form className="w-72 text-xs" onSubmit={handleRegistroExitoso}>
                        <input
                            type="text"
                            name="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="mb-4 w-full px-3 py-2 rounded border border-gray-400 outline-none focus:border-blue-500"
                            placeholder="Nombre"
                            required
                        />
                        <input
                            type="text"
                            name="apellidos"
                            value={apellidos}
                            onChange={(e) => setApellidos(e.target.value)}
                            className="mb-4 w-full px-3 py-2 rounded border border-gray-400 outline-none focus:border-blue-500"
                            placeholder="Apellidos"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            className="mb-4 w-full px-3 py-2 rounded border border-gray-400 outline-none focus:border-blue-500"
                            placeholder="Correo"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                            className="mb-4 w-full px-3 py-2 rounded border border-gray-400 outline-none focus:border-blue-500"
                            placeholder="Contraseña"
                            required
                        />
                        
                        {/* <Link to="/" > */}
                            <button className="mb-10 bg-blue-700 text-white font-bold text-lg py-1 px-4 rounded w-72"
                            >
                                Registrarse
                            </button>
                        {/* </Link> */}
                </form>
            </div>
        </div>
    );
};

export default Registro;
