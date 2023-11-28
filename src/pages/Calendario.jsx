import React from "react";
import NavBar from "../components/NavBar";
import MenuList from "../components/MenuList";
import CalendarioComp from "../components/CalendarioComp";

const Calendario = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div class="flex mt-8 pr-8">
          <MenuList />
        
        <div class="w-full">
          <CalendarioComp />
        </div>
      </div>
    </div>
  );
};

export default Calendario;
