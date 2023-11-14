import React from 'react'
import { Link } from 'react-router-dom'

const CardProject = ({ nombre }) => {
    return (
        <button className='h-60 bg-slate-100 rounded-lg'>
            <Link to='/proyectos'>
                <div className='text-white w-full h-1/5 rounded-t-lg bg-lime-500 text-base font-semibold items-center justify-center flex'>
                    <p>{nombre}</p>
                </div>
                <div className='h-3/5'></div>
                <div className='h-1/5 border-t-2 border-gray-300'></div>
            </Link>
        </button>
    )
}

export default CardProject