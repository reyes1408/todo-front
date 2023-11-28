import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../css/Registrar.css';
import ImgLogo from '../components/ImgLogo';

const Registro = () => {
    const [showModal, setShowModal] = useState(false);
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('');

    // const handleRegistroExitoso = () => {
    //     setShowModal(true);
    // };

    return (
        <div className="h-screen flex justify-center items-center font-sans bg-gradient-to-b from-blue-500 to-gray-300 bg-fixed">
            <div className="h-5/6 p-10 flex flex-col justify-center items-center bg-gray-100 rounded-lg shadow-2xl text-black border border-solid border-gray-300">
                {showModal && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <p className="text-green-500 font-semibold text-lg mb-4">
                                Usuario registrado exitosamente
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
                    Registro de Usuario
                </h1>

                <p className="mb-8 text-gray-400 text-xs">
                    Regístrate, te tomara menos de un minuto.
                </p>

                <form className="w-72 text-xs">
                    <div className="mb-4">
                        <input
                            type="text"
                            name="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="w-full px-3 py-2 rounded border border-gray-400 outline-none focus:border-blue-500"
                            placeholder="Nombre"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="apellidos"
                            value={apellidos}
                            onChange={(e) => setApellidos(e.target.value)}
                            className="w-full px-3 py-2 rounded border border-gray-400 outline-none focus:border-blue-500"
                            placeholder="Apellidos"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="correo"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            className="w-full px-3 py-2 rounded border border-gray-400 outline-none focus:border-blue-500"
                            placeholder="Correo"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="contraseña"
                            value={contraseña}
                            onChange={(e) => setContraseña(e.target.value)}
                            className="w-full px-3 py-2 rounded border border-gray-400 outline-none focus:border-blue-500"
                            placeholder="Contraseña"
                            required
                        />
                    </div>
                    <div className="mb-10 text-gray-400">
                        <select
                            name="tipousuario"
                            value={tipoUsuario}
                            onChange={(e) => setTipoUsuario(e.target.value)}
                            className="w-full px-3 py-2 rounded border border-gray-400 outline-none focus:border-blue-500"
                        >
                            <option value="" disabled>Tipo de Usuario</option>
                            <option value="administrador">Colaborador</option>
                            <option value="jefe">Jefe de proyectos</option>
                        </select>
                    </div>
                    <div className="mb-16">
                        <Link to="/" onClick={(e) => { setShowModal(true) }}>
                            <button className="bg-blue-700 text-white font-bold text-lg py-0 px-4 rounded w-72">
                                Registrarse
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registro;
