import React from "react";

const NavProyectos = () => {
  return (
<<<<<<< Updated upstream
    <div className="flex lg:flex-row lg:pl-7 mb-5">
      <div className="lg:w-1/2">
        <p className="font-bold italic lg:text-xl">mi-proyecto</p>
      </div>
      <div className="lg:w-auto flex flex-col lg:flex-row lg:gap-5">
        <input
          type="text"
          placeholder="Buscar proyecto"
          className="w-full lg:w-60 text-xs px-4 py-1 rounded border border-gray-400 outline-none focus:border-blue-500 mb-2 lg:mb-0"
        />
        <select
          className="w-full lg:w-60 text-xs px-5 py-1 rounded border border-gray-400 text-black outline-none focus:border-blue-500"
        >
=======
    <div className="flex mb-5">
      <div className="w-1/2">
        <p className="font-bold italic text-xl">mi-proyecto</p>
      </div>
      <div className="w-1/2 flex flex-row-reverse gap-5">
        <input type="text" placeholder="Buscar proyecto" className="w-60 text-xs px-4 py-1 rounded border border-gray-400 outline-none focus:border-blue-500" />
        <select className="w-60 text-xs inline-block px-5 py-1 rounded border border-gray-400 text-black outline-none focus:border-blue-500">
>>>>>>> Stashed changes
          <option value="proyecto1">mi-proyecto</option>
          <option value="proyecto2">mi-proyecto</option>
          <option value="proyecto3">mi-proyecto</option>
        </select>
      </div>
    </div>
  );
};


export default NavProyectos;
