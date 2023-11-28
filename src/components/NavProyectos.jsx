import React from "react";

const NavProyectos = () => {
  return (
    <div className="flex mb-5">
      <div className="w-1/2">
        <p className="font-bold italic text-xl">mi-proyecto/ {/*Aqui pasaremos el nombre del proyecto como props*/}</p>
      </div>
      <div className="w-1/2 flex flex-row-reverse gap-5">
        <input type="text" placeholder="Buscar proyecto" className="w-60 text-xs px-4 py-1 rounded border border-gray-400 outline-none focus:border-blue-500" />
        <select className="w-60 text-xs inline-block px-5 py-1 rounded border border-gray-400 text-black outline-none focus:border-blue-500">
          <option value="proyecto1">mi-proyecto</option>
          <option value="proyecto2">mi-proyecto</option>
          <option value="proyecto3">mi-proyecto</option>
        </select>
      </div>
    </div>
  );
};


export default NavProyectos;
