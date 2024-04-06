import { Calendar, dateFnsLocalizer, DateLocalizer, Event } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./style/calendar_style.css"
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import React from 'react'
import NewEvent from '../NewEvent/NewEvent';
import skSK from 'date-fns/locale/sk'; // Import slovenské lokalizace
import { loadEvent_API } from '../../../apis/index.';
import { Container } from '../../../ContainerModule';
import { Type_for_newEventFrom_DB } from '../NewEvent/type';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface MyEvent extends Event {
  title: string;
  start: Date;
  end: Date;
}

const locales = {
  'sk': skSK, // Použití slovenské lokalizace
};


let formats = {
  timeGutterFormat: 'HH:mm',
}

const localizer: DateLocalizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events: MyEvent[] = [
  {
    title: "Important Appointment",
    start: new Date(2024, 2, 11, 14, 30), // 10. března 2024 v 14:30
    end: new Date(2024, 2, 14, 15, 30),   // 10. března 2024 v 15:30
  }
];


function CalendarMod(): JSX.Element {
  const { appData, setAppData } = React.useContext(Container.Context);
  const [newEventContent, setNewEventContent] = React.useState<JSX.Element | null>(null);

  React.useEffect(() => {
    loadEvents();
  }, []);

  async function loadEvents() {
    const USER = appData.userLogData.userName;
    try {
      const LOAD = await loadEvent_API(USER);
      if (LOAD && LOAD.data) {
        const TRANSLATE_DATA: Type_for_newEventFrom_DB[] = LOAD.data.map(item => {
          const START_DATE = new Date(item.start);
          const END_DATE = new Date(item.end);
          return { start: START_DATE, end: END_DATE, title: item.title, comment: item.comment };
        });

        setAppData(prevAppData => ({
          ...prevAppData,
          allEvents: TRANSLATE_DATA
        }));

      } else {
        console.log("Chyba: Neplatné údaje získané zo servera");
      }
    } catch (error) {
      console.log("Chyba pri načítavaní udalostí:", error);
    };
  };

  const handleEventClick = (event: MyEvent) => {
    console.log(event);
  };

  const handleClickNewEvent = () => {
    setNewEventContent(<NewEvent setNewEventContent={setNewEventContent} />);
  };

  /* casove overovanie platnosti udalosti a alert */
  React.useEffect(() => {
    let timeInterval = setInterval(() => {
      const ALL_EVENTS = appData.allEvents;
      const CURRENT_TIME = new Date();

      ALL_EVENTS.forEach((item) => {
        const START_EVENT = item.start
        if (START_EVENT.getFullYear() === CURRENT_TIME.getFullYear() &&
        START_EVENT.getMonth() === CURRENT_TIME.getMonth() &&
        START_EVENT.getDate() === CURRENT_TIME.getDate() &&
        START_EVENT.getHours() === CURRENT_TIME.getHours() &&
        START_EVENT.getMinutes() === CURRENT_TIME.getMinutes()) {
          toast(`Event time ${item.title} comment ${item.comment} at ${item.start.getHours()}`);
        };
      });
    }, 60000);

    return (() => {
      clearInterval(timeInterval)
    })
  }, [appData.allEvents.length]);


  return (
    <div className=' w-full h-full flex items-center justify-center relative flex-col gap-5'>
      <div className='sticky top-3 w-full h-9 flex justify-end items-center  z-50'>
        <div className=' bg-thems-minBackg_content w-[250px] h-full flex justify-center items-center rounded-[25px]'>
          <button
            className=' w-48 h-[25px] text-thems-color_button border border-slate-400 bg-thems-background_button flex justify-center items-center hover:bg-thems-background_button_hover rounded-[20px]'
            onClick={handleClickNewEvent}>
            New event
          </button>
        </div>
      </div>
      <Calendar
        formats={formats}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        events={appData.allEvents}
        style={{ height: 650, width: "90%" }}
        className="hover-effect-calendar"
        onSelectEvent={handleEventClick} />
      {/* -------- */}
      {newEventContent}
      <ToastContainer
        position="top-right"
        autoClose={60000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
      {/* -------- */}
    </div>

  )

}

export default CalendarMod;