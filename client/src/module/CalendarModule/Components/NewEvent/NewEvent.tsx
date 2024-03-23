import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

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

type Type_for_slotInfo = { start: Date, end: Date }

type Type_for_NewEvent = {
    setNewEventContent: React.Dispatch<React.SetStateAction<JSX.Element | null>>
}

function NewEvent(props: Type_for_NewEvent): JSX.Element {
    const [newEvent, setNewEvent] = React.useState<any>({ title: "", start: "", end: "" });
    const [selectDate, setSelectDate] = React.useState<number>();
    const [startDate, setStartDate] = React.useState<any>(new Date());
    const [allEvents, setAllEvents] = React.useState(events);


    const handleClickRemoveWindowEvent = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>): void => {
        if (e.target === e.currentTarget) {
            props.setNewEventContent(null);
        }
    }


    return (
        <div
            onClick={handleClickRemoveWindowEvent}
            className=" fixed w-screen h-screen bg-white bg-opacity-60 z-40 ">
            <div className=" w-4/6 h-72 absolute rounded-3xl m-auto left-0 right-0 top-0 bottom-0 ">
                <form
                    className=" w-full h-full flex justify-center items-center flex-col  rounded-2xl overflow-hidden bg-thems-background_newEventContent">
                    <label
                        className=" w-full h-full bg-thems-background_newEventHeader flex justify-center items-center">
                        <h2 className=" text-2xl font-bold bg-thems-background_newEventHeader text-thems-defaultTextColor">
                            New event
                        </h2>
                    </label>
                    <div className=" w-full h-full flex justify-around items-center flex-row border-t-2 ">
                        <div className="w-full h-full flex justify-center items-center flex-row gap-3">
                            <h4>Set start event:</h4>
                            <DatePicker
                                className=" w-80 h-7 rounded pl-3 pr-3 text-center"
                                placeholderText="Start Date"
                                selected={newEvent.start}
                                onChange={(start) => setNewEvent({ ...newEvent, start })} />
                        </div>
                        <div className=" w-3/3 h-full flex justify-center items-center ">
                            <FontAwesomeIcon size="2xl" icon={faRightLong} />
                        </div>
                        <div className="w-full h-full flex justify-center items-center flex-row gap-3">
                            <h4>
                                Set end event:
                                </h4>
                            <DatePicker
                                className=" w-80 h-7 rounded pl-3 pr-3 text-center"
                                placeholderText="End Date"
                                selected={newEvent.end}
                                onChange={(end) => setNewEvent({ ...newEvent, end })} />
                        </div>
                    </div>

                    <div className=" w-full h-full flex flex-col justify-center items-center gap-5 p-3 border-t-2">
                        <div className="w-3/4 flex items-center justify-center">
                        <h4>
Set Name event for easy indetification.
                            </h4>
                            <input
                                name="name event"
                                type="text"
                                placeholder="Add Title"
                                className=" w-56 h-7 rounded pl-3 pr-3 text-center"
                                value={newEvent.title}
                                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                        </div>
                        <div className="w-3/4 flex items-center justify-center">
                        
                            <input
                                name="name event"
                                type="text"
                                placeholder="Comment"
                                className=" w-3/4 h-7 rounded pl-3 pr-3 text-center"
                                value={newEvent.title}
                                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                        </div>
                    </div>
                    <div className=" w-full h-full flex justify-center items-center">
                        <button
                            type="submit"
                            className="  w-32 h-6 rounded-md flex items-center justify-center bg-thems-background_button hover:bg-thems-background_button_hover">
                            Add Event
                        </button>
                    </div>
                </form>
            </div>

        </div>

    );
};

export default NewEvent
