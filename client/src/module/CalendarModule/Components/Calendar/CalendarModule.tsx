import { Calendar, dateFnsLocalizer, DateLocalizer, Event } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./style/calendarModule_style.css"
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import React from 'react'
import NewEvent from '../NewEvent/NewEvent';
import skSK from 'date-fns/locale/sk'; // Import slovenské lokalizace


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
  },
  {
    title: "kjbjkbkbkj",
    start: new Date(2024, 2, 11, 16, 30), // 10. března 2024 v 14:30
    end: new Date(2024, 2, 11, 18, 30),   // 10. března 2024 v 15:30
  },
  {
    title: "Conference",
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
];
function CalendarModule(): JSX.Element {
  const [date, setDate] = React.useState<Date>();
  const [newEventContent, setNewEventContent] = React.useState<JSX.Element | null>(null);


  const handleEventClick = (event: MyEvent) => {
    console.log(event);

  }

  const handleClickNewEvent = () => {
    setNewEventContent(<NewEvent setNewEventContent={setNewEventContent} />)
  }



  return (
    <div className=' w-full h-full flex items-center justify-center relative flex-col gap-5'>
      <div className=' w-full h-7 flex justify-end items-center '>
        <button
          className=' w-48 h-7 text-thems-color_button border border-slate-400 bg-thems-background_button flex justify-center items-center hover:bg-thems-background_button_hover rounded-md'
          onClick={handleClickNewEvent}>New eveent</button>
      </div>
      <Calendar
        formats={formats}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        events={events}
        style={{ height: 650, width: "90%" }}
        className="hover-effect-calendar"
        onSelectEvent={handleEventClick} />
      {/* -------- */}
      {newEventContent}
      {/* -------- */}
    </div>

  )

}

export default CalendarModule;