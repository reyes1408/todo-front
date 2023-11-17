import React from 'react';
import NavProyectos from './NavProyectos';
import colaboradoresJ from '../img/colaboradoresJ.png';
import colaboradoresG from '../img/colaboradoresG.png';
import colaboradoresM from '../img/colaboradoresM.png';

const HistorialComp = () => {
    const data = [
        { name: 'Creacion de modulo login', imageUrl: colaboradoresJ},
        { name: 'Creación de módulo Proyectos', imageUrl: colaboradoresG},
        { name: 'Autenticación de login con cuenta Goolge', imageUrl: colaboradoresM},
        { name: 'Componentes draggable en módulo proyectos', imageUrl: colaboradoresJ},
        { name: 'Nombre del ticket', imageUrl: colaboradoresJ},
        { name: 'Nombre del ticket', imageUrl: colaboradoresG},
        { name: 'Nombre del ticket', imageUrl: colaboradoresM},
        { name: 'Nombre del ticket', imageUrl: colaboradoresJ},
        { name: 'Nombre del ticket', imageUrl: colaboradoresG},
        { name: 'Nombre del ticket', imageUrl: colaboradoresM},
        // Agrega más datos según sea necesario
      ];
  return (
    <div>
        <div>
            <NavProyectos />
        </div>

        <div className="h-96 overflow-auto">
            <table className="min-w-full h-screen bg-white shadow-md rounded my-6 border-separate border border-slate-500 ...">
            <thead>
            <tr className="border-b">
                <th className="text-xl py-4 text-left font-bold">00 tareas terminadas</th>
            </tr>
        </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 border-b">
                        <td className="flex justify-between items-center py-3 px-4 border border-slate-700 ...">{item.name}
                            <img className="w-8 h-8" alt="" src={item.imageUrl}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default HistorialComp;
