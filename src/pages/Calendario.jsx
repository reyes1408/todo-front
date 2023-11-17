import React from "react";
import NavBar from "../componentes/NavBar";
import MenuList from "../componentes/MenuList";
import CalendarioComp from "../componentes/CalendarioComp";

const Calendario = () => {
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
          <CalendarioComp />
        </div>
      </div>
    </div>
  );
};

export default Calendario;
