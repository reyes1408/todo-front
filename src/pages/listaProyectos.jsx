
import NavBar from '../components/NavBar';
import MenuList from '../components/MenuList';

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import dialog from '../assets/charla.png'
import clip from '../assets/clip-de-papel.png'

const initialData = {
    containers: {
        'container-1': {
            title: 'Por hacer',
            items: ['Ticket #3', 'Ticket #4', 'Ticket #5', 'Ticket #7', 'Ticket #8', 'Ticket #10',],
        },
        'container-2': {
            title: 'Haciendo',
            items: ['Ticket #9',],
        },
        'container-3': {
            title: 'En revisión',
            items: ['Ticket #6'],
        },
        'container-4': {
            title: 'Hecho',
            items: ['Ticket #1', 'Ticket #2'],
        },
    },
    items: {
        'Ticket #1': { id: 'Ticket #1', titulo: 'Creación de módulo Login', descripción: "Descripción de proyecto" },
        'Ticket #2': { id: 'Ticket #2', titulo: 'Creación de módulo Menú', descripción: "Descripción de proyecto" },
        'Ticket #3': { id: 'Ticket #3', titulo: 'Creación de módulo Proyectos', descripción: "Descripción de proyecto" },
        'Ticket #4': { id: 'Ticket #4', titulo: 'Creación de módulo Ticket', descripción: "Descripción de proyecto" },
        'Ticket #5': { id: 'Ticket #5', titulo: 'Creación de módulo Chat de tickets', descripción: "Descripción de proyecto" },
        'Ticket #6': { id: 'Ticket #6', titulo: 'Creación de módulo Calendario', descripción: "Descripción de proyecto" },
        'Ticket #7': { id: 'Ticket #7', titulo: 'Creación de módulo Historial', descripción: "Descripción de proyecto" },
        'Ticket #8': { id: 'Ticket #8', titulo: 'Creación de módulo Usuario', descripción: "Descripción de proyecto" },
        'Ticket #9': { id: 'Ticket #9', titulo: 'Creación de APIs', descripción: "Descripción de proyecto" },
        'Ticket #10': { id: 'Ticket #10', titulo: 'Pruebas consumiendo APIs', descripción: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quas? Quis nesciunt ratione nostrum, nisi unde totam reiciendis asperiores labore, at porro dolore minus nobis voluptates amet delectus ad dicta." },
    },
};

function listaProyectos() {
    const [data, setData] = useState(initialData);

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const sourceContainer = data.containers[result.source.droppableId];
        const destinationContainer = data.containers[result.destination.droppableId];
        const draggedItemId = result.draggableId;

        // Obtén los objetos de los elementos arrastrados y soltados
        const draggedItem = data.items[draggedItemId];
        const sourceIndex = result.source.index;
        const destinationIndex = result.destination.index;

        // Elimina el elemento de la fuente
        sourceContainer.items.splice(sourceIndex, 1);

        // Inserta el elemento en el destino
        destinationContainer.items.splice(destinationIndex, 0, draggedItemId);

        // Actualiza el estado de datos
        setData({ ...data });
    };

    return (
        <>
            <NavBar />
            <div className='flex mt-8 pr-8'>
                <MenuList />
                <div className="w-5/6 flex justify-center space-x-12">
                    <DragDropContext onDragEnd={onDragEnd}>
                        {Object.keys(data.containers).map((containerId, i) => {
                            const container = data.containers[containerId];
                            const items = container.items.map((itemId) => data.items[itemId]);

                            return (
                                <div key={containerId} className="w-1/4 border-2 border-gray-400 p-2 rounded-lg bg-gray-100"
                                    style={{ maxHeight: "84vh" }}>
                                    <div className='flex items-center'>
                                        {i != 0 ? (
                                            <h2 className="text-lg w-full text-center font-bold">{container.title}</h2>
                                        ) : (
                                            <>
                                                <h2 className="text-lg w-full text-center font-bold">{container.title}</h2>
                                                <button className='w-7 h-6 bg-gray-400 rounded-full text-xl font-bold flex items-center justify-center pb-1 mr-1 hover:bg-blue-700 hover:text-white'>
                                                    +
                                                </button>
                                            </>
                                        )}
                                    </div>
                                    <div className=''>
                                        <Droppable droppableId={containerId} key={containerId} className="w-full" >
                                            {(provided) => (
                                                <ul
                                                    ref={provided.innerRef}
                                                    {...provided.droppableProps}
                                                    className="mt-4 space-y-2 overflow-y-auto"
                                                     style={{ maxHeight: "72vh", height: "72vh" }}
                                                >
                                                    {items.map((item, index) => (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}
                                                        >
                                                            {(provided) => (
                                                                <li
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    className="bg-white p-2 rounded cursor-pointer shadow-md hover:shadow-xl"
                                                                >
                                                                    <p className='text-sm font-semibold text-center mb-2'>
                                                                        {item.id}
                                                                    </p>
                                                                    <p className='text-xs font-semibold mb-2'>
                                                                        {item.titulo}
                                                                    </p>
                                                                    <p className='text-xs'>
                                                                        {item.descripción}
                                                                    </p>
                                                                    <div className='w-full h-5 mt-4'>
                                                                        <div className='flex items-center'>
                                                                            <img className='h-5' src={dialog} alt="" />
                                                                            <img className='h-5' src={clip} alt="" />
                                                                        </div>
                                                                        <div>
                                                                            <img src="" alt="" />
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </ul>
                                            )}
                                        </Droppable>
                                    </div>

                                </div>
                            );
                        })}
                    </DragDropContext>
                </div>
            </div>
        </>
    );
}

export default listaProyectos;
