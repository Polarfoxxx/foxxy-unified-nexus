import React from "react";
import { Calendar, dateFnsLocalizer, DateLocalizer, Event } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import skSK from 'date-fns/locale/sk'; // Import slovenské lokalizace


function LittleCalendar(): JSX.Element {
    const [currentDate, setCurrentDate] = React.useState("");


    React.useEffect(() => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const dateFormat = `${day}. ${month}. ${year}`;
        setCurrentDate(dateFormat);
    }, [])




    const locales = {
        'sk': skSK, // Použití slovenské lokalizace
    };

    const localizer: DateLocalizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
    });


    return (
        <div className=" w-full h-full bg-thems-littleComponent_Background flex items-center justify-center flex-col">
            <div className=" w-full h-[20%] flex items-center justify-center">
                <h1 className=" text-[30px]">
                    YOU CALENDAR EVENT
                </h1>
            </div>
            <div className=" w-full h-[20%] flex items-center justify-center">
                {currentDate}
            </div>
            <div className=" w-full h-[100%] flex items-center justify-center">
                <Calendar
                    localizer={localizer}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: "100%", width: "100%" }}
                    className="hover-effect-calendar"></Calendar>
            </div>
        </div>
    );
};



export default LittleCalendar;