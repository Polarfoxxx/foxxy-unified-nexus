import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import "react-big-calendar/lib/css/react-big-calendar.css";
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import skSK from "./cal"
import React from 'react'
import DatePicker from "react-datepicker";

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
    start: new Date(2021, 6, 0),
    end: new Date(2021, 6, 0),
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
const MyCalendar = () => {
  const [newEvent, setNewEvent] = React.useState<any>({ title: "", start: "", end: "" });
  const [startDate, setStartDate] = React.useState<any>(new Date());
  const [allEvents, setAllEvents] = React.useState(events);


  const handleSelectSlot = (slotInfo: { start: Date, end: Date }) => {
    // slotInfo obsahuje informácie o vybranom dátume
    console.log('Vybraný deň:', slotInfo.start);
    
    // Tu môžete vykonať ďalšie akcie na základe kliknutia na deň v kalendári
  };


  return (
    <div>
      <div>
        <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
        <DatePicker placeholderText="Start Date" selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
        <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
        <button style={{ marginTop: "10px" }}>
          Add Event
        </button>
      </div>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        events={events}
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot}
      />
    </div>

  )

}

export default MyCalendar