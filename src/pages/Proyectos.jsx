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
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
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
        } finally{
            
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

    //obtenerProyectos();

    // const proyectos = [
    //     { id: 1, nombre: 'Gestión de Tareas' },
    //     { id: 2, nombre: 'Comercio Electrónico' },
    //     { id: 3, nombre: 'Notas y Recordatorios' },
    //     { id: 4, nombre: 'Plataforma de Aprendizaje en Línea' },
    //     { id: 5, nombre: 'Aplicación de Red Social' },
    // ];

    return (
        <>
            {
                isOpen && (<Modal setIsOpen={setIsOpen} />)
            }
            <NavBar />
            <div className='flex mt-8 pr-8'>
                <MenuList />
                <div className="grid grid-cols-4 gap-8 w-full overflow-y-auto" style={{ maxHeight: "84vh" }}>

                    <button
                        className='h-60 bg-slate-100 rounded-lg font-extrabold text-gray-500 text-7xl'
                        onClick={openModal}
                    >+</button>
                    {loading ? (
                        <p>Cargando...</p>
                    ) : (
                        proyectos && proyectos.length > 0 ? (
                            proyectos.map(({_id, titulo}, index) => (
                                <CardProject key={_id} nombre={titulo} />
                            ))
                        ) : (
                            <p>No hay proyectos disponibles.</p>
                        )
                    )}
                </div>
            </div>
        </>
    )
}

export default Proyectos