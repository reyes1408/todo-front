import React, { useEffect } from 'react';
<<<<<<< Updated upstream
import NavProyectos from '../components/NavProyectos';
=======
import NavProyectos from './NavProyectos';
>>>>>>> Stashed changes
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es'; // Importa el idioma español

const CalendarioComp = () => {
  useEffect(() => {
    // El español es el idioma por defecto
    FullCalendar.globalLocales = [esLocale];
  }, []);

  return (
    <div>
      <div>
        <NavProyectos />
      </div>
<<<<<<< Updated upstream
  
      <div className="lg:pl-7 lg:flex lg:justify-center uppercase">
        <div className="lg:w-full xl:w-full">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={"dayGridMonth"}
            dayHeaderFormat={{
              dayPopoverFormat: { month: 'long', day: 'numeric', year: 'numeric' },
              weekday: 'long',
              omitCommas: true,
              omitSuffix: true,
            }}
            dayHeaderContent={(args) => args.text.toUpperCase()}
            dayPopoverFormat={{ month: 'long', day: 'numeric', year: 'numeric' }}
            headerToolbar={{
              start: "prev,next",
              center: "title",
              end: "",
            }}
            locale="es"
            height={"76vh"}
            events={[
              { title: 'Creación de Login - Miguel (Con M de Master)', start: '2023-11-18', end: '2023-11-21', color: '#FA84D9', textColor: '#202124' },
              { title: 'Creación de APIs - Gabriel', start: '2023-11-18', end: '2023-11-23', color: '#FFBD70', textColor: '#202124' },
              { title: 'Crecion de modulo registro - Jordi', start: '2023-11-19', end: '2023-11-25', color: '#AFFF70', textColor: '#202124' },
            ]}
          />
        </div>
=======

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

          events={[
            { title: 'Creación de Login - Miguel (Con M de Master)', start: '2023-11-18', end: '2023-11-21', color: '#FA84D9', textColor: '#202124' },
            { title: 'Creación de APIs - Gabriel', start: '2023-11-18', end: '2023-11-23', color: '#FFBD70', textColor: '#202124' },
            { title: 'Crecion de modulo registro - Jordi', start: '2023-11-19', end: '2023-11-25', color: '#AFFF70', textColor: '#202124' },
          ]}
        />
>>>>>>> Stashed changes
      </div>
    </div>
  );
  
};

export default CalendarioComp;
