
import React, { useState, useEffect } from 'react';
import NavProyectos from './NavProyectos';
import colaboradoresJ from '../assets/colaboradoresJ.png';
import colaboradoresG from '../assets/colaboradoresG.png';
import colaboradoresM from '../assets/colaboradoresM.png';

import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
  } from "@material-tailwind/react";

const HistorialComp = () => {
    const [data, setData] = useState([]);

    const obtenerTicketsFinalizados = async () => {
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        id: "6565b24744550649e952be8c" //id del proyecto
                    }
                )
            }

            const datos = await fetch('http://localhost:3000/api/historial/ticket/', options);

            if (datos.ok) {
                const datoss = await datos.json();
                console.log(datoss);
                setData(datoss);
            }

        } catch (error) {
            console.error('Error al obtener las tareas:', error);
        }
    };

    useEffect(() => {
        //fetch para rellenar los contenedores con los tickets de la base de datos.
        const fetchData = async () => {
            try {
                await obtenerTicketsFinalizados();
            } catch (error) {
                console.error('Error en useEffect:', error);
            }
        };

        fetchData();
    }, [])

    return (
        <div className='w-full'>
            <NavProyectos />
            <Card className="w-full bg-gray-100 rounded-xl p-4" style={{ height: "30rem" }}>
                <Typography variant="h6" color="blue-gray">
                    10 tarea(s) terminada(s)
                </Typography>
                <List className='overflow-y-auto'>
                    {data.map((data) => (
                        <ListItem key={data._id} className='mb-1 p-2 bg-white'>
                            <ListItemPrefix className='pr-3'>
                                <div className='p-4 bg-pink-300 rounded-full'>
                                    {data.id_responsable.nombre}    
                                </div>
                            </ListItemPrefix>
                            <div className='flex w-full'>
                                <div className='w-1/2'>
                                    <Typography variant="h6" color="blue-gray" className='text-sm font-medium'>
                                        {data.titulo}
                                    </Typography>
                                    <Typography variant="small" color="gray" className="font-normal">
                                        {data.descripcion}
                                    </Typography>
                                </div>
                                <div className='w-1/2 text-right'>
                                    <Typography color="blue-gray" className='text-sm font-medium'>
                                        fecha
                                    </Typography>
                                </div>
                            </div>
                        </ListItem>
                    ))}
                </List>
            </Card>
        </div>
    );
};

export default HistorialComp;
