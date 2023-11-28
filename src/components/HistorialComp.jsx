import React from 'react';
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
    const data = [
        { name: 'Creacion de modulo login', imageUrl: colaboradoresJ, fecha: '18/11/2023' },
        { name: 'Creación de módulo Proyectos', imageUrl: colaboradoresG, fecha: '18/11/2023' },
        { name: 'Autenticación de login con cuenta Goolge', imageUrl: colaboradoresM, fecha: '19/11/2023' },
        { name: 'Componentes draggable en módulo proyectos', imageUrl: colaboradoresJ, fecha: '19/11/2023' },
        { name: 'Nombre del ticket', imageUrl: colaboradoresJ, fecha: '19/11/2023' },
        { name: 'Nombre del ticket', imageUrl: colaboradoresG, fecha: '20/11/2023' },
        { name: 'Nombre del ticket', imageUrl: colaboradoresM, fecha: '20/11/2023' },
        { name: 'Nombre del ticket', imageUrl: colaboradoresJ, fecha: '21/11/2023' },
        { name: 'Nombre del ticket', imageUrl: colaboradoresG, fecha: '21/11/2023' },
        { name: 'Nombre del ticket', imageUrl: colaboradoresM, fecha: '21/11/2023' },
        // Agrega más datos según sea necesario
    ];
    return (
        <div className='w-full'>
            <NavProyectos />

            <Card className="w-full bg-gray-100 rounded-xl p-4" style={{ height: "30rem" }}>
                <Typography variant="h6" color="blue-gray">
                    10 tarea(s) terminada(s)
                </Typography>
                <List className='overflow-y-auto'>
                    {
                        data.map((data) => (
                            <ListItem className='mb-1 p-2 bg-white'>
                                <ListItemPrefix className='pr-3'>
                                    <Avatar variant="circular" alt="user" src={data.imageUrl} className='h-8 w-8' />
                                </ListItemPrefix>
                                <div className='flex w-full'>
                                    <div className='w-1/2'>
                                        <Typography color="blue-gray" className='text-sm font-medium'>
                                            {data.name}
                                        </Typography>
                                    </div>
                                    <div className='w-1/2 text-right'>
                                        <Typography color="blue-gray" className='text-sm font-medium'>
                                            {data.fecha}
                                        </Typography>
                                    </div>
                                </div>
                            </ListItem>
                        ))
                    }
                </List>
            </Card>
        </div>
    );
};

export default HistorialComp;
