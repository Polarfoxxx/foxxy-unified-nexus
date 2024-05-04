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
import { Container } from '../../../ContainerModule';
import { Type_for_newEventFrom_DB } from '../NewEvent/type';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import miniContentStyle from './style/minContent_style';

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
  const [newEventContent, setNewEventContent] = React.useState<JSX.Element | null>(null);
  const [allEvents, setAllEvents] = React.useState<Type_for_newEventFrom_DB[]>([]);

 /*  React.useEffect(() => {
    if (appData.allEvents.length > 0) {
      const TRANSLATE_DATA: Type_for_newEventFrom_DB[] = appData.allEvents.map(item => {
        const START_DATE = new Date(item.start);
        const END_DATE = new Date(item.end);
        return { start: START_DATE, end: END_DATE, title: item.title, comment: item.comment };
      });
      setAllEvents(TRANSLATE_DATA)
    };
  }, [JSON.stringify(appData.allEvents)]); */


  const handleEventClick = (event: MyEvent) => {
    console.log(event);
  };

  const handleClickNewEvent = () => {
    setNewEventContent(<NewEvent
      setNewEventContent={
        setNewEventContent
      } />);
  };


  /* casove overovanie platnosti udalosti a alert */
  /*   React.useEffect(() => {
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
    }, [appData.allEvents.length]); */

    /* mini style */
    React.useEffect(() => {
      miniContentStyle()
    },[])

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='w-full h-full flex items-center justify-center flex-col gap-5 bg-thems-calendarContent_background  p-4'>
        <div
          id='calendarNewEvent'
          className='relative top-3 w-full h-9 flex justify-end items-center'>
          <div className='relative bg-thems-minBackg_content w-[250px] h-full flex justify-center items-center rounded-[25px]'>
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
          events={allEvents}
          style={{ height: 650, width: "100%" }}
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
    </div>





  )

}

export default CalendarMod;