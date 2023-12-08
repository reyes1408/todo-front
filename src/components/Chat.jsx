import enviar from '../assets/enviar.png';
//npm i socket.io-client (versión para react)
import io from 'socket.io-client'
import { useState, useEffect } from 'react'
import axios from 'axios'
//Conexión para escuchar y enviar eventos
const socket = io('http://localhost:4000')

const Chat = ({ setIsOpenChat, isOpenChat }) => {

    // const [nickname, setNickname] = useState('');
    const [disabled, setDisabled] = useState(false);

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [storedMessages, setStoredMessages] = useState([]);
    const [firstTime, setfirstTime] = useState(false);

    const [selectedColaborador, setSelectedColaborador] = useState('');
    const [colaboradores, setColaboradores] = useState([]);

    const url = "http://localhost:4000/api/"

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

    useEffect(() => {
        const receivedMessage = (message) => {
            //console.log(message)
            setMessages([...messages, message])

        }
        socket.on('message', receivedMessage)

        //Desuscribimos el estado del componente cuando ya no es necesario utilizarlo
        return () => {
            socket.off('message', receivedMessage)
        }


    }, [messages]);

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

            } else {
                console.error('Error en la respuesta del servidor:', data.status, data.statusText);
            }
        } catch (error) {
            console.error('Error en getColab:', error);
        }
    };

    //Cargamos los mensajes guardados en la BDD la primera vez
    if (!firstTime) {
        axios.get(url + "messages").then(res => {
            setStoredMessages(res.data.messages);
        })
        setfirstTime(true)
    }

    const handlerSubmit = (e) => {
        //Evitamos recargar la página
        e.preventDefault()

        //Enviamos el mensaje sólo si se ha establecido un nickname
        if (selectedColaborador !== '') {
            //console.log(message)
            //Enviamos el mensaje al servidor
            socket.emit('message', message, selectedColaborador)

            //Nuestro mensaje
            const newMessage = {
                body: message,
                from: selectedColaborador
            }
            //Añadimos el mensaje y el resto de mensajes enviados
            setMessages([...messages, newMessage])
            //Limpiamos el mensaje
            setMessage('')

            //Petición http por POST para guardar el artículo:
            axios.post(url + 'save', {
                message: message,
                from: selectedColaborador
            })

        } else {
            alert('Para enviar mensajes debes establecer un nickname!!!')
        }

    }

    const nicknameSubmit = (e) => {
        e.preventDefault()
        setSelectedColaborador(selectedColaborador)
        setDisabled(true)
    }

    const closeModal = () => {
        setIsOpenChat(false);
    };

    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpenChat ? 'bg-black bg-opacity-50' : 'hidden'}`}>
            <div className="absolute bg-white p-6 rounded-lg w-3/4">
                <button
                    className="float-right text-gray-500 hover:text-blue-700 font-bold font-concert-one"
                    onClick={closeModal}
                >
                    X
                </button>
                <div className="container mt-8 w-full">
                    <form onSubmit={nicknameSubmit}>
                        <div className="flex mb-3">
                            {/* <input
                                type="text"
                                className="border outline-none rounded py-0 px-3 mr-2 w-full"
                                id="nickname"
                                placeholder="Usuario"
                                disabled={disabled}
                                onChange={e => setNickname(e.target.value)}
                                value={nickname}
                                required
                            /> */}
                            <select
                                className="w-full mr-2 text-sm inline-block py-2 rounded border border-gray-300 text-black outline-none focus:border-blue-500"
                                placeholder={'Selecciona un colaborador'}
                                value={selectedColaborador}
                                onChange={(e) => setSelectedColaborador(e.target.value)}
                            >
                                <option value="" disabled>
                                    Selecciona un colaborador
                                </option>
                                {colaboradores.length > 0 ? (
                                    colaboradores.map((c) => (

                                        <option key={c.colaborador._id} value={c.colaborador.nombre}>
                                            {c.colaborador.nombre}
                                        </option>
                                    ))
                                ) : (
                                    <option value="" disabled>
                                        Cargando colaboradores...
                                    </option>
                                )}
                            </select>
                            {/* <button
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                                type="submit"
                                id="btn-nickname"
                                disabled={disabled}
                            >
                                Establecer
                            </button> */}
                        </div>
                    </form>

                    <div className="mt-3 mb-3 shadow border-0 bg-gray-100 overflow-y-auto h-96 max-h-96 rounded">

                        {storedMessages.length === 0 ? (
                            <div className="flex justify-center p-3 items-center h-full">
                                <p className="text-gray-500 text-xl font-medium">Chat vacío</p>
                            </div>
                        ) : (
                            <>
                                <small className="block text-center text-gray-700">Chat grupal</small>
                                {storedMessages.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`flex p-3 ${message.from === selectedColaborador ? "justify-end" : "justify-start"}`}
                                    >
                                        <div
                                            className={`mb-3 shadow p-2 rounded-b-lg border-1 ${message.from === selectedColaborador
                                                ? "bg-green-300 rounded-tl-lg"
                                                : "bg-white rounded-tr-lg"
                                                }`}
                                        >
                                            <div className="">
                                                <small className="block font-semibold text-gray-700">
                                                    {message.from}: {message.message}
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {messages.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`flex p-3 ${message.from === selectedColaborador ? "justify-end" : "justify-start"}`}
                                    >
                                        <div
                                            className={` mb-3 shadow p-2 rounded-b-lg border-1 ${message.from === selectedColaborador
                                                ? "bg-green-300 rounded-tl-lg"
                                                : "bg-white rounded-tr-lg"
                                                }`}
                                        >
                                            <div className="">
                                                <small className="block text-gray-700 font-semibold">
                                                    {message.from}: {message.body}
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>


                    <form onSubmit={handlerSubmit}>
                        <div className="flex">
                            <input
                                type="text"
                                className="border rounded py-0 px-3 mr-2 w-full outline-none text-sm font-semibold"
                                placeholder="Mensaje..."
                                onChange={e => setMessage(e.target.value)}
                                value={message}
                            />
                            <button
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-2 rounded"
                                type="submit"
                            >
                                <img src={enviar} alt="" className='w-5 h-5' />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Chat;
