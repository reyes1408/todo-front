import React, { useState, useEffect } from 'react';

import imgCopiar from '../assets/copia.png'

const Modal = ({ setIsOpen }) => {

    const [titulo, setTitulo] = useState('');
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
        //setCodigoProyecto(generarCodigoAleatorio);
    }, []);

    // function generarCodigoAleatorio() {
    //     const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     const longitudCodigo = 6;
    //     let codigoAleatorio = '';

    //     for (let i = 0; i < longitudCodigo; i++) {
    //         const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    //         codigoAleatorio += caracterAleatorio;
    //     }

    //     return codigoAleatorio;
    // }

    const closeModal = () => {
        setIsOpen(false);
    };

    const enviarDatos = async () => {
        try {

            const proyecto = {
                id_responsable : "654e943515d1df6f2634d77e",
                titulo : titulo,
                descripcion : descripcion,
                fecha_inicio : ""
            }

            alert(JSON.stringify(proyecto));

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(proyecto)
            }
            
            const data = await fetch('http://localhost:3000/api/project/register', options);

            alert(JSON.stringify(data.json()));
            if (data.ok) {
                alert('Se creo un nuevo proyecto')
            }

            closeModal();
        } catch (error) {
            alert('Error al crear el proyecto')
            console.log(error)
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
            <div className="bg-white rounded shadow-lg p-10 px-14 w-96 relative">
                <button
                    className="float-right text-gray-500 hover:text-blue-700 font-bold"
                    onClick={closeModal}
                >
                    X
                </button>
                <div className=' w-full mb-14 flex items-center justify-center'>
                    <h1 className="text-2xl">Nuevo Proyecto</h1>
                </div>

                <form onSubmit={enviarDatos}>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-2 text-sm outline-none mb-4"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        placeholder='Nombre de proyecto'
                        required
                    />
                    <textarea
                        className="w-full border border-gray-300 rounded p-2 text-sm outline-none mb-4"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        placeholder='Descripcion'
                    />
                    <input
                        type="date"
                        className="w-full border border-gray-300 rounded p-2 text-sm outline-none mb-4"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        required
                    />
                    {/* <div className='flex mb-14'>
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
                    </div> */}
                    <p className='text-xs font-semibold'>*El código de acceso se genera una vez creado el proyecto</p>
                    <button
                        className="bg-blue-800 hover:bg-blue-700 text-white py-1 rounded w-full mt-12"
                    >
                        Aceptar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Modal;
