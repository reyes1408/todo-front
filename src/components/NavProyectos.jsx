import React from "react";

const NavProyectos = () => {
  return (
    <div>
      <div className="mt-8">
            <h1 className="inline-block font-extrabold italic my-4 pr-80 pb-6 text-xl">mi-proyecto</h1>
            <div className="inline-block space-x-6 pl-80">
                <select className="w-52 inline-block px-5 py-2 rounded-lg border-2 border-gray-400 text-black bg-gray-200">
                    <option value="proyecto1">mi-proyecto</option>
                    <option value="proyecto2">mi-proyecto</option>
                    <option value="proyecto3">mi-proyecto</option>
                </select>
                <input type="text" placeholder="Buscar proyecto" className="w-72 px-4 py-2 rounded-lg border-2 border-gray-400 bg-gray-200"/>
            </div>
        </div>
    </div>
  );
};

export default NavProyectos;
