import React, { useState, useEffect } from 'react';

const Modal = ({ setIsOpen }) => {

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [selectedColaborador, setSelectedColaborador] = useState('');
    const [colaboradores, setColaboradores] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                await getColab();
            } catch (error) {
                console.error('Error en useEffect:', error);
            }
        };
        fetchData();
    }, []);

    const getColab = async () => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: "6565b24744550649e952be8c" //id del proyecto
        }),
    };

    try {
        const data = await fetch('http://localhost:3000/api/project/colab/all', options);
        
        if (data.ok) {
            const datos = await data.json();
            setColaboradores(datos);
            console.log(colaboradores);
        }else {
            console.error('Error en la respuesta del servidor:', data.status, data.statusText);
        }
    } catch (error) {
        //console.error('Error en getColab:', error);
    }
};


    const closeModal = () => {
        setIsOpen(false);
    };

    const enviarDatos = async () => {
        try {
            const proyecto = {
                id_responsable: selectedColaborador,
                titulo: titulo,
                descripcion: descripcion,
                fecha_inicio: ""
            }

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(proyecto)
            }

            const id = "6565b24744550649e952be8c"

            const data = await fetch('http://localhost:3000/api/ticket/register/6565b24744550649e952be8c', options);

            alert(JSON.stringify(data.json()));
            if (data.ok) {
                alert('Se creo un nuevo ticket')
            }

            closeModal();
        } catch (error) {
            alert('Error al crear el proyecto')
            console.log(error)
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
            <div className="bg-white rounded shadow-lg p-10 px-14 w-96 relative">
                <button
                    className="float-right text-gray-500 hover:text-blue-700 font-bold font-concert-one"
                    onClick={closeModal}
                >
                    X
                </button>
                <div className=' w-full mb-14 flex items-center justify-center'>
                    <h1 className="text-2xl">Nuevo Ticket</h1>
                </div>

                <form onSubmit={enviarDatos}>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-2 text-sm outline-none mb-4 focus:border-blue-500"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        placeholder='Nombre de ticket'
                        required
                    />
                    <textarea
                        className="w-full border border-gray-300 rounded p-2 text-sm outline-none mb-4 focus:border-blue-500"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        placeholder='Descripción'
                    />
                    <select
                        className="w-full text-sm inline-block py-2 rounded border border-gray-300 text-black outline-none focus:border-blue-500"
                        value={selectedColaborador}
                        onChange={(e) => setSelectedColaborador(e.target.value)}
                    >
                        {colaboradores.length > 0 ? (
                            colaboradores.map((c) => (

                                <option key={c.colaborador._id} value={c.colaborador._id}>
                                    {c.colaborador.nombre}
                                </option>
                            ))
                        ) : (
                            <option value="" disabled>
                                Cargando colaboradores...
                            </option>
                        )}
                    </select>

                    {/* <select className="w-full text-sm inline-block py-2 rounded border border-gray-300 text-black outline-none focus:border-blue-500" >
                        {
                            /*colaboradores.map((colaborador) => (
                                <option key={colaborador._id}  value={colaborador._id}>{colaborador.nombre}</option>
                            ))*
                        }
                    </select> */}
                    <button
                        className="bg-blue-800 hover:bg-blue-700 text-white py-1 rounded w-full mt-12"
                    >
                        Aceptar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Modal;
