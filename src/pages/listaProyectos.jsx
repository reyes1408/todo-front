import NavBar from '../components/NavBar';
import MenuList from '../components/MenuList';
import Modal from '../components/Modal-CrearTicket'

import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import dialog from '../assets/charla.png'
import clip from '../assets/clip-de-papel.png'

function listaProyectos() {
    
    const obtenerTickets = async () => {
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

            const datos = await fetch('http://localhost:3000/api/project/ticket/find', options);
            const datoss = await datos.json();

            if (datos.ok) {
                //const datos = await data.json(); // Extraer los datos del cuerpo de la respuesta
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
                await obtenerTickets();
            } catch (error) {
                console.error('Error en useEffect:', error);
            }
        };

        fetchData();
    }, [])

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const [data, setData] = useState({

        "containers": {
            "container-1": {
                "title": "Por hacer",
                "items": []
            },
            "container-2": {
                "title": "Haciendo",
                "items": []
            },
            "container-3": {
                "title": "En revisión",
                "items": []
            },
            "container-4": {
                "title": "Hecho",
                "items": []
            }
        },
        "items": {

        }
    });

    var lastcontainer = '';

    const updateEstatusTicket = async (idticket, estatus) => {
        
        if (lastcontainer == estatus) {
            return;
        }
        let st = '';
        switch (estatus) {
            case 'Por hacer':
                
                st = 'todo';
                break;
            case 'Haciendo':
                
                st ='doing'
                break;
            case 'En revisión':
                
                st = 'check';
                break;
            case 'Hecho':
                
                st ='done';
                break;
        
            default:
                alert('Algo salio mal');
                break;
        }
        
        lastcontainer= estatus; // verifica el estatus si no es repetido

        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        id_ticket: idticket,
                        estatus: st,
                    }
                )
            }

            const datos = await fetch('http://localhost:3000/api/ticket/update', options);
            
            if (datos.ok) {
               //const datoss = await datos.json();
                console.log('estatus actualizado');
            }

        } catch (error) {
            console.error('Error al obtener las tareas:', error);
        }
    }

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
        updateEstatusTicket(draggedItemId, destinationContainer.title);
    };

    return (
        <>
            {
                isOpen && (<Modal setIsOpen={setIsOpen} />)
            }
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
                                                <button
                                                    className='w-7 h-6 bg-gray-400 rounded-full text-xl font-bold flex items-center justify-center pb-1 mr-1 hover:bg-blue-700 hover:text-white'
                                                    onClick={openModal}
                                                >
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
                                                    {items ? (items.map((item, index) => (
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
                                                                    onDoubleClick={() => alert(JSON.stringify(item))  }
                                                                >
                                                                    <p className='text-sm font-semibold text-center mb-2'>
                                                                        Ticket #{index}
                                                                    </p>
                                                                    <p className='text-xs font-semibold mb-2'>
                                                                        {item.titulo}
                                                                    </p>
                                                                    <p className='text-xs'>
                                                                        {item.descripcion}
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
                                                    ))) : (<p>Sin tickets</p>)
                                                    }
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