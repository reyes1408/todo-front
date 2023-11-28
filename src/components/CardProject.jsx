import React from 'react'
import { Link } from 'react-router-dom'
import terminado from '../assets/cheque.png'
import copiar from '../assets/copia.png';

const CardProject = ({ titulo, clave, totalTickets, ticketsDone, ticketsCheck, }) => {

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
                <div className='text-white w-full h-1/6 rounded-t-lg bg-lime-500 text-base font-semibold '>
                    <p className='flex items-center justify-center '>{titulo}</p>
                </div>
                <div className='h-4/6'>
                    {/* Aqui debe de ir las actividades hechas. */}
                    {ticketsCheck && ticketsCheck.length > 0 ? (
                        <>
                            <p className='font-semibold'>En revision</p>
                            <ul className=' flex-row items-start ml-2 overflow-y-auto h-32'>
                                {ticketsCheck.map(({ _id, titulo, descripcion }) => (
                                    <>
                                        <li key={_id} className='text-xs'><p className='font-semibold flex items-start'>{titulo}</p>֎⸰{descripcion}</li>
                                    </>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <p className='font-semibold'>Sin tickets</p>
                    )}

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