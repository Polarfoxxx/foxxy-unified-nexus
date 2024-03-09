import DatePicker from "react-datepicker";
import React from "react";

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

    React.useEffect(() => {
        console.log(props.slotInfo.start.toLocaleDateString());
        setSelectDate(props.slotInfo.start.getTimezoneOffset())

    }, [props.slotInfo])

    const handleClickRemoveWindowEvent = (): void => {
        props.setNewEventContent(null)
    }

    return (
        <div
            onClick={handleClickRemoveWindowEvent}
            className=" fixed w-screen h-screen bg-black bg-opacity-20 z-40 ">
            <div className=" w-4/6 h-72 absolute rounded-3xl m-auto left-0 right-0 top-0 bottom-0 bg-black z-50">
                <input
                    type="text"
                    placeholder="Add Title"
                    style={{ width: "20%", marginRight: "10px" }}
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker
                    placeholderText="Start Date"
                    selected={newEvent.start}
                    onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker
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

    );
};

export default NewEvent