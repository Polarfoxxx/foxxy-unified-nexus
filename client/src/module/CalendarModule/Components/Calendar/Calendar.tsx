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
import { Type_for_newEventFrom_DB } from '../NewEvent/type';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { dayAndHoliday } from '../../../apis/ninjasAPIS/dayAndHolidaysAPI';
import { Holiday } from '../Holiday';

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


  return (
    <div className='w-full h-full flex flex-row items-center justify-center  bg-thems-calendarContent_background shadow-miniApp '>
      {/* event----------------------------------------------------------------------- */}
      <div className=' w-full h-full bg-transparent flex justify-center items-center flex-col '>
        <div className=' w-full h-[10%] flex items-center justify-start pl-7 gap-1'>
          <span className=' w-auto h-[55px] bg-thems-minBackg_content rounded-[10px] text-white font-oswald text-[45px] p-4 leading-[55px] flex items-center justify-center'>
            YOU
          </span>
          <h1 className=' text-[40px]'>
            calendar
          </h1>
        </div>
        <div className=' w-full h-full '>
          <NewEvent />
        </div>
        <div className=' w-full h-[30%] overflow-hidden p-4'>
          <Holiday />
        </div>
        <div className=' w-full h-[30%]'>

        </div>
      </div>
      {/* calendar--------------------------------------------------------------------- */}
      <div className='w-full h-full flex items-center justify-center flex-col gap-5 bg-transparen  p-4 '>
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