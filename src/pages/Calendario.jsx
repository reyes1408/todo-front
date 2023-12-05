import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MenuList from "../components/MenuList";
import NavProyectos from '../components/NavProyectos';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es'; // Importa el idioma español

const Calendario = () => {

  const [eventos, setEventos] = useState(
    [
      //{ title: 'Login', start: '2023-11-18', color: '#FA84D9', textColor: '#202124' },
    ]
  )

  const obtenerTickets = async () => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            id: "6565b24744550649e952be8c" //id del proyecto
          }
        )
      }

      const datos = await fetch('http://localhost:3000/api/ticket/calendar', options);
      const datoss = await datos.json();

      if (datos.ok) {
        //const datos = await data.json(); // Extraer los datos del cuerpo de la respuesta
        console.log(datoss.formatCalendar);
        setEventos(datoss);
      }

    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    }
  };

  useEffect(() => {
    //fetch para rellenar los contenedores con los tickets de la base de datos.
    const fetchData = async () => {
      try {
        await obtenerTickets();
      } catch (error) {
        console.error('Error en useEffect:', error);
      }
    };

    FullCalendar.globalLocales = [esLocale];

    fetchData();
  }, [])

  return (
    <div>
      <NavBar />

      <div class="flex mt-8 pr-8">
        <MenuList />

        <div class="w-full">

          <NavProyectos />

          <div className="justify-center uppercase">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView={"dayGridMonth"}
              dayHeaderFormat={{ dayPopoverFormat: { month: 'long', day: 'numeric', year: 'numeric' }, weekday: 'long', omitCommas: true, omitSuffix: true, }}
              dayHeaderContent={(args) => args.text.toUpperCase()} //Para poner mayuscula los dias
              dayPopoverFormat={
                { month: 'long', day: 'numeric', year: 'numeric' }
              }
              headerToolbar={{
                start: "prev,next",
                center: "title",
                end: "",

              }}
              locale="es"
              height={"76vh"}

              events={
                eventos.formatCalendar
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendario;
