import React from 'react'
import { Link } from 'react-router-dom'
import terminado from '../assets/cheque.png'
import copiar from '../assets/copia.png';

const CardProject = ({ titulo, descripcion, clave, totalTickets, ticketsDone }) => {

    const copiarPortapapeles = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(clave)
            .then(() => {
                console.log('texto copiado.');
            }).catch(err => {
                console.error('Error al copiar: ', err);
            })
    }

    return (
        <button className='h-60 bg-slate-100 rounded-lg hover:shadow-md'>
            <Link to='/proyectos/listaProyectos'>
                <div className='text-white w-full h-1/6 rounded-t-lg bg-lime-500 text-base font-semibold items-center justify-center flex'>
                    <p>{titulo}</p>
                </div>
                <div className='h-4/6'>
                    {/* Aqui debe de ir las actividades hechas. */}
                    {descripcion}
                </div>
                <div className='h-1/6 border-t-2 border-gray-200 text-sm flex items-center px-3'>
                    <div className='w-2/3 flex'>
                        <img className='h-5 mr-1' src={terminado} alt="" />
                        <p className='font-medium'>{ticketsDone + "/" + totalTickets}</p>
                    </div>
                    <button
                        className='font-medium w-1/3 justify-center flex items-center text-xs hover:text-blue-700 hover:bg-gray-300 hover: rounded-2xl py-1'
                        onClick={copiarPortapapeles}
                    >
                        <img className='h-4 mr-1' src="https://cdn-icons-png.flaticon.com/512/1059/1059106.png" alt="" />
                        {clave}
                    </button>
                </div>
            </Link>
        </button>
    )
}

export default CardProject