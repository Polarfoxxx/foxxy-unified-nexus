import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import "./style/calendarModule_style.css"
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import "react-big-calendar/lib/css/react-big-calendar.css";
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import skSK from "./cal"
import React from 'react'
import NewEvent from '../NewEvent/NewEvent';

import "react-datepicker/dist/react-datepicker.css";

const locales = {
  'sk-SK': skSK, // slovenčina (Slovensko)
  // prípadne ďalšie lokality
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})
const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2024, 3, 3),
    end: new Date(2024, 3, 30),
  },
  {
    title: "Vacation",
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
];
function CalendarModule(): JSX.Element {

  const [newEventContent, setNewEventContent] = React.useState<JSX.Element | null>(null);


  const handleSelectSlot = (slotInfo: { start: Date, end: Date }) => {
    // slotInfo obsahuje informácie o vybranom dátume
    console.log('Vybraný deň:', slotInfo.start);

    setNewEventContent(<NewEvent slotInfo={slotInfo} setNewEventContent= {setNewEventContent} />)
    // Tu môžete vykonať ďalšie akcie na základe kliknutia na deň v kalendári
  };


  return (
    <div className=' w-full h-full flex items-center justify-center relative'>
      {newEventContent}
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        events={events}
        style={{ height: 400, width: "90%" }}
        selectable
        onSelectSlot={handleSelectSlot}
        className="hover-effect-calendar"

      />
    </div>

  )

}

export default CalendarModule;