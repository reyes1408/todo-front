import React from "react";
import { Link } from "react-router-dom";
import iconoCalendario from "../assets/iconoCalendario.png";
import iconoHistorial from "../assets/iconoHistorial.png";
import iconoPerfil from "../assets/iconoPerfil.png";
import iconoProyectos from "../assets/iconoProyectos.png";
import ImgLogo from "../components/ImgLogo";
import BotonMenu from "../components/BotonMenu";

const Menu = () => {

  const botonesmenu = [
    { imagen:iconoProyectos, nombre:"Proyectos"},
    { imagen:iconoHistorial, nombre:"Historial"},
    { imagen:iconoCalendario, nombre:"Calendario"},
    { imagen:iconoPerfil, nombre:"Perfil"}
  ]

  return (
    <div className="h-screen flex justify-center items-center font-sans bg-gradient-to-b from-blue-500 to-gray-300 bg-fixed">
      <div className="flex w-screen" style={{ height: "84vh" }}>
        <div className="w-1/3"></div>
        <div className="w-1/3 h-full">
          <div className="flex items-center justify-center">
          <h1 className="font-normal text-6xl font-concert-one text-white pb-10">// TODO</h1>
          </div>
          <div className="grid grid-cols-2 gap-3 justify-center items-center">
            {
              botonesmenu.map((botonmenu) => (
                <Link to={`/${botonmenu.nombre.toLowerCase()}`}>
                  <div className="bg-gray-100 rounded-lg flex items-center justify-center">
                    <BotonMenu 
                      imagen={botonmenu.imagen} 
                      nombre={botonmenu.nombre}
                    />
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
        <div className="w-1/3"></div>
      </div>
    </div>
  );
};

export default Menu;
