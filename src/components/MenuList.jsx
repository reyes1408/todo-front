import home from '../assets/home.png'
import calendar from '../assets/calendario.png'
import cerrar_sesion from '../assets/cerrar-sesion.png'
import project from '../assets/project-management.png'
import historial from '../assets/lista-de-verificacion.png'
import { Link } from 'react-router-dom'


const MenuList = () => {

    const styleBotton = 'flex justify-center items-center mb-4';

    return (
        <div className='w-1/6 h-full'>
            <div className='relative w-10/12 border border-gray-400 pl-6 bg-gray-100 pt-10 pb-10 rounded-tr-lg rounded-br-lg'>
                <Link to="/Menu">
                    <button className={styleBotton}>
                        <img className='w-5 mr-2' src={home} alt="" />
                        <p className='font-semibold'>Inicio</p>
                    </button>
                </Link>
                <Link to="/proyectos">
                    <button className={styleBotton}>
                        <img className='w-5 mr-2' src={project} alt="" />
                        <p className='font-semibold'>Proyectos</p>
                    </button>
                </Link>
                <Link to="/historial">
                    <button className={styleBotton}>
                        <img className='w-5 mr-2' src={historial} alt="" />
                        <p className='font-semibold'>Historial</p>
                    </button>
                </Link>
                <Link to="/calendario">
                    <button className={styleBotton}>
                        <img className='w-5 mr-2' src={calendar} alt="" />
                        <p className='font-semibold'>Calendario</p>
                    </button>
                </Link>
                <Link to="/">
                    <button className={'flex justify-center items-center mt-72 m'}>
                        <img className='w-5 mr-2' src={cerrar_sesion} alt="" />
                        <p className='font-semibold'>Cerrar sesión</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default MenuList