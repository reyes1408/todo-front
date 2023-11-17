import React, {useEffect} from 'react';
import NavProyectos from './NavProyectos';
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

        <div className="justify-center uppercase">
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={"dayGridMonth"}
            dayHeaderFormat={{ weekday: 'long', omitCommas: true, omitSuffix: true, }}
            dayHeaderContent={(args) => args.text.toUpperCase()} //Para poner mayuscula los dias
            headerToolbar={{
                start: "today prev,next",
                center: "title",
                end: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            locale="es"
            height={"72vh"} //Tamaño del calendario
            //weekends={false}  //Ocultar los fines de semana
            events={[
                { title: 'event 1', date: '2023-11-16' },
                { title: 'event 2', date: '2023-11-16' },
                { title: 'event 3', date: '2023-11-16' },
                { title: 'event 4', date: '2023-11-16' }
            ]}
        />
        </div>
    </div>
  );
};

export default CalendarioComp;
