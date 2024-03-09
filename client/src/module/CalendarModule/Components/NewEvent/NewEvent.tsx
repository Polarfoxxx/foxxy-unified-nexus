import DatePicker from "react-datepicker";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


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
    slotInfo: Type_for_slotInfo,
    setNewEventContent: React.Dispatch<React.SetStateAction<JSX.Element | null>>
}

function NewEvent(props: Type_for_NewEvent): JSX.Element {
    const [newEvent, setNewEvent] = React.useState<any>({ title: "", start: "", end: "" });
    const [selectDate, setSelectDate] = React.useState<number>();
    const [startDate, setStartDate] = React.useState<any>(new Date());
    const [allEvents, setAllEvents] = React.useState(events);
    const divRef = React.useRef<HTMLDivElement | null>(null)


    React.useEffect(() => {
        console.log(props.slotInfo.start.toLocaleDateString());
        setSelectDate(props.slotInfo.start.getTimezoneOffset())

    }, [props.slotInfo])

    const handleClickRemoveWindowEvent = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>): void => {
        if (e.target === e.currentTarget) {
            props.setNewEventContent(null);
        }
    }

    return (
        <div
            id="divs"
            ref={divRef}
            onClick={(e) => handleClickRemoveWindowEvent(e)}
            className=" absolute w-screen h-screen bg-black bg-opacity-20 z-40 ">
            <div className=" w-4/6 h-72 absolute rounded-3xl overflow-hidden m-auto left-0 right-0 top-0 bottom-0 bg-black z-50">
                <div className=" w-full h-1/6 bg-slate-200 flex justify-center items-center ">
                    <div>
                        <h1 className=" text-4xl">New event</h1>
                    </div>
                    <div>

                        <button onClick={(e) => handleClickRemoveWindowEvent(e)}><FontAwesomeIcon icon={faCircleXmark} /></button>
                    </div>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Add Title"
                        style={{ width: "20%", marginRight: "10px" }}
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                    <DatePicker
                        value={props.slotInfo.start.toLocaleDateString()}
                        placeholderText="Start Date"
                        selected={newEvent.start}
                        onChange={(start) => setNewEvent({ ...newEvent, start })} />
                    <DatePicker
                        value={props.slotInfo.end.toLocaleDateString()}
                        placeholderText="End Date"
                        selected={newEvent.end}
                        onChange={(end) => setNewEvent({ ...newEvent, end })} />
                    <h1>{selectDate}</h1>
                    <button

                        style={{ marginTop: "10px" }}>
                        Add Event
                    </button>
                </div>
            </div>
        </div>

    );
};

export default NewEvent