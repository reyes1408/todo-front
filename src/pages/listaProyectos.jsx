
import NavBar from '../components/NavBar';
import MenuList from '../components/MenuList';

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialData = {
    containers: {
        'container-1': {
            title: 'Por hacer',
            items: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6', 'item-7', 'item-8', 'item-9', 'item-10', 'item-11', 'item-12', 'item-13', 'item-14', 'item-15', 'item-16', 'item-17', 'item-18',],
        },
        'container-2': {
            title: 'Haciendo',
            items: [],
        },
        'container-3': {
            title: 'En revisión',
            items: [],
        },
        'container-4': {
            title: 'Hecho',
            items: [],
        },
    },
    items: {
        'item-1': { id: 'item-1', content: 'Ticket 1' },
        'item-2': { id: 'item-2', content: 'Ticket 2' },
        'item-3': { id: 'item-3', content: 'Ticket 3' },
        'item-4': { id: 'item-4', content: 'Ticket 4' },
        'item-5': { id: 'item-5', content: 'Ticket 5' },
        'item-6': { id: 'item-6', content: 'Ticket 6' },
        'item-7': { id: 'item-7', content: 'Ticket 7' },
        'item-8': { id: 'item-8', content: 'Ticket 8' },
        'item-9': { id: 'item-9', content: 'Ticket 9' },
        'item-10': { id: 'item-10', content: 'Ticket 10' },
        'item-11': { id: 'item-11', content: 'Ticket 11' },
        'item-12': { id: 'item-12', content: 'Ticket 12' },
        'item-13': { id: 'item-13', content: 'Ticket 13' },
        'item-14': { id: 'item-14', content: 'Ticket 14' },
        'item-15': { id: 'item-15', content: 'Ticket 15' },
        'item-16': { id: 'item-16', content: 'Ticket 16' },
        'item-17': { id: 'item-17', content: 'Ticket 17' },
        'item-18': { id: 'item-18', content: 'Ticket 18' },
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
                        {Object.keys(data.containers).map((containerId) => {
                            const container = data.containers[containerId];
                            const items = container.items.map((itemId) => data.items[itemId]);

                            return (
                                <div key={containerId} className="w-1/4 border-2 p-4 rounded-lg overflow-y-auto"
                                    style={{ maxHeight: "84vh" }}>
                                    <h2 className="text-lg font-bold">{container.title}</h2>
                                    <div>
                                        <Droppable droppableId={containerId} key={containerId} className="h-10">
                                            {(provided) => (
                                                <ul
                                                    ref={provided.innerRef}
                                                    {...provided.droppableProps}
                                                    className="mt-4 space-y-2"
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
                                                                    className="bg-blue-200 p-2 rounded cursor-pointer"
                                                                >
                                                                    {item.content}
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
