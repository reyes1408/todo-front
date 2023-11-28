import React, { useState, useEffect } from 'react';

import NavBar from '../components/NavBar';
import MenuList from '../components/MenuList';
import CardProject from '../components/CardProject';
import Modal from '../components/Modal-CrearProyecto';

const Proyectos = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);

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
                        id: "654e943515d1df6f2634d77e"
                    }
                )
            }
            const data = await fetch('http://localhost:3000/api/project/all', options);
            const datos = await data.json();
            //console.log(JSON.stringify(data));
            if (data.ok) {
                //const datos = await data.json(); // Extraer los datos del cuerpo de la respuesta
                setProyectos(datos);
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
                        >+</button>
                        <div className='h-1/5 flex items-center justify-center gap-2 text-sm'>
                            <input type="text" className='h-7 outline-none border rounded font-normal pl-1 focus:border-blue-500' placeholder='Código de proyecto'/>
                            <button>Unirse</button>
                        </div>
                    </div>
                    {loading ? (
                        <p className='font-semibold text-lg'>Cargando...</p>
                    ) : (
                        proyectos && proyectos.length > 0 ? (
                            proyectos.map(({ _id, titulo, descripcion, clave, totalTickets, ticketsDone }) => (
                                <CardProject key={_id} titulo={titulo} descripcion={descripcion} clave={clave} totalTickets={totalTickets} ticketsDone={ticketsDone} />
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
