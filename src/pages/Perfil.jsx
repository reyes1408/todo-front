import React from 'react';
import NavBar from '../components/NavBar';
import MenuList from '../components/MenuList';
import FotoPerfil from '../assets/FotoPerfil.png';

const Perfil = () => {
return (
    <div>
        <div>
            <NavBar />
        </div>
        
        <div className="flex mt-8 pr-2">
                <MenuList />

            <div className="flex flex-col p-9 lg:flex-row lg:justify-center lg:mt-6">
                <div className="text-center lg:ml-52">
                    <h1 className="text-2xl font-bold">Perfil</h1>
                    <img className="mt-6 rounded-full lg:mt-12" src={FotoPerfil} alt="Perfil" />
                    <p className="text-blue-500 underline mt-6 cursor-pointer">Cambiar foto</p>
                </div>

                <div className="mt-5 lg:ml-52 lg:mt-24">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="border border-gray-300 p-2 rounded w-full lg:w-80"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Email"
                            className="border border-gray-300 p-2 rounded w-full lg:w-80"
                        />
                    </div>
                    <div className="mb-4 text-gray-400">
                    <select
                        type="text"
                        name="tipousuario"
                        value=""
                        onChange=""
                        className="w-full lg:w-80 px-3 py-2 rounded border border-gray-400">
                        <option value="" disabled selected>Tipo de Usuario</option>
                        <option value="administrador">Colaborador</option>
                        <option value="jefe">Jefe de proyectos</option>
                    </select>
                    </div>
                    <div className="mb-6">
                    <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded w-full lg:w-80">
                        Aceptar
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Perfil;