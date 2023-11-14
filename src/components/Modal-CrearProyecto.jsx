import React, { useState, useEffect } from 'react';

import imgCopiar from '../assets/copia.png'

const Modal = ({ setIsOpen }) => {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    //const [fechaInicio, setFechaInicio] = useState('');
    const [fecha, setFecha] = useState('');
    const [codigoProyecto, setCodigoProyecto] = useState();

    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = `${today.getMonth() + 1}`.padStart(2, '0'); // Agrega un 0 al mes si es necesario
        const day = `${today.getDate()}`.padStart(2, '0'); // Agrega un 0 al día si es necesario
        const fechaActual = `${year}-${month}-${day}`;
        setFecha(fechaActual);
        setCodigoProyecto(generarCodigoAleatorio);
    }, []);

    function generarCodigoAleatorio() {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const longitudCodigo = 6;
        let codigoAleatorio = '';

        for (let i = 0; i < longitudCodigo; i++) {
            const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            codigoAleatorio += caracterAleatorio;
        }

        return codigoAleatorio;
    }

    const copiarPortapapeles = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(codigoProyecto)
            .then(() => {
                console.log('texto copiado.');
            }).catch(err => {
                console.error('Error al copiar: ', err);
            })
    }

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleSubmit = (e) => {

        alert("Se enviaron los datos.");
        //Aqui enviaremos los datos a la base de datos.

        closeModal();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
            <div className="bg-white rounded shadow-lg p-10 px-14 w-96 relative">
                <button
                    className="float-right text-gray-500 hover:text-gray-700"
                    onClick={closeModal}
                >
                    X
                </button>
                <div className=' w-full mb-14 flex items-center justify-center'>
                    <h1 className="text-2xl">Nuevo Proyecto</h1>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded p-2 text-sm outline-none"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder='Nombre de proyecto'
                        />
                    </div>

                    <div className="mb-4">
                        <textarea
                            className="w-full border border-gray-300 rounded p-2 text-sm outline-none"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            placeholder='Descripcion'
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="date"
                            className="w-full border border-gray-300 rounded p-2 text-sm outline-none"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                        />
                    </div>
                    <div className='flex mb-14'>
                        <p className='text-sm mr-1'>Codigo de proyecto: </p>
                        <p className='text-sm text-blue-800'>{codigoProyecto}</p>
                        <button
                            className='ml-20 rounded text-sm'
                            onClick={
                                copiarPortapapeles
                            }
                        >
                            <img className='w-4' src={imgCopiar} alt="" />
                        </button>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button
                            type="submit"
                            className="bg-blue-800 hover:bg-blue-700 text-white py-1 rounded w-full"
                        >
                            Aceptar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal;
