import React from "react";
import NavBar from "../componentes/NavBar";
import MenuList from "../componentes/MenuList";
import HistorialComp from "../componentes/HistorialComp";

const Historial = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div class="flex">
        <div>
          <MenuList />
        </div>

        <div class="w-auto">
            <HistorialComp />
        </div>
      </div>
    </div>
  );
};

export default Historial;
