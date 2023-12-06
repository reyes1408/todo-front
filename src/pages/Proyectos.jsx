import React, { useState, useEffect } from 'react';

import NavBar from '../components/NavBar';
import MenuList from '../components/MenuList';
import CardProject from '../components/CardProject';
import Modal from '../components/Modal-CrearProyecto';

const Proyectos = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [clave, setClave] = useState('');

    const openModal = () => {
        setIsOpen(true);
    };

    const [proyectos, setProyectos] = useState([]);

    const obtenerProyectos = async () => {
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        id: "655e928bdaa3b43941adfa54" // 
                    }
                )
            }

            const data = await fetch('http://localhost:3000/api/project/all', options);
            
            if (data.ok) {
                const datos = await data.json();
                setProyectos(datos);
            }

        } catch (error) {
            console.error('Error al obtener las tareas:', error);
        } finally {

            setLoading(false);
        }
    };

    const agregarNvoColab = async (event) => {

        event.preventDefault();
        try {
            const options = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({

                    id: "655e928bdaa3b43941adfa54", //GABO A PROY. UP
                    clave: clave
                })
            }

            const data = await fetch('http://localhost:3000/api/project/add/colab', options);
            
            if (data.ok) {
                const datos = await data.json();
                console.log(datos);
                alert(datos.mensaje);
                //console.log('se agrego');
                setClave('');
            }

        } catch (error) {
            console.error('Error al obtener las tareas:', error);
        } finally {

            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                await obtenerProyectos();
            } catch (error) {
                console.error('Error en useEffect:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {
                isOpen && (<Modal setIsOpen={setIsOpen} />)
            }
            <NavBar />
            <div className='flex mt-8 pr-8'>
                <MenuList />
                <div className="grid lg:grid-cols-4 lg:gap-8 sm:grid-cols-1 w-full overflow-y-auto" style={{ maxHeight: "84vh" }}>

                    <div className='h-60 bg-gray-100 rounded-lg font-semibold text-gray-500 p-5'>
                        <button
                            className='h-4/5 w-full bg-white mb-3 rounded-lg font-bold text-7xl'
                            onClick={openModal}
                        >
                            +
                        </button>
                        <div className='h-1/5 flex items-center justify-center gap-2 text-sm'>
                            
                            <form onSubmit={agregarNvoColab}>
                                <input type="text" className='w-36 h-6 outline-none border rounded font-normal mr-1 focus:border-blue-500' 
                                value={clave}
                                onChange={(e) => setClave(e.target.value)}
                                placeholder='Código proyecto'
                                required/>
                                <button className='hover:bg-gray-300 hover:rounded-2xl px-2 py-1 hover:text-cyan-950 '>Unirse</button>
                            </form>
                        </div>
                    </div>
                    {loading ? (
                        <p className='font-semibold text-lg'>Cargando...</p>
                    ) : (
                        proyectos && proyectos.length > 0 ? (
                            proyectos.map(({ _id, titulo, clave, totalTickets, ticketsDone, ticketsCheck }) => (
                                <CardProject key={_id} titulo={titulo} ticketsCheck={ticketsCheck} clave={clave} totalTickets={totalTickets} ticketsDone={ticketsDone} />
                            ))
                        ) : (
                            <p className='font-semibold text-lg'>No hay proyectos disponibles.</p>
                        )
                    )}
                </div>
            </div>
        </>
    )
}

export default Proyectos
