import React from "react";
import NavBar from "../components/NavBar";
import MenuList from "../components/MenuList";
import HistorialComp from "../components/HistorialComp";

const Historial = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div class="flex mt-8">
        <MenuList />

        <div class="w-full pr-8">
          <HistorialComp />
        </div>
      </div>
    </div>
  );
};

export default Historial;
