import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { useInputValue } from "foxxy_input_value";
import { TypeForInputsObject } from "foxxy_input_value/dist/hooks/types/types";
import { addEventAPI } from "../../../apis/index.";
import { Type_for_NewEvent, Type_for_newEventFor_API } from "./type";
import { Type_for_newMessageFor_API } from "../../../MessageModule";
import { Container } from "../../../ContainerModule";
import { NewRequest } from "../../../utils";

function NewEvent(props: Type_for_NewEvent): JSX.Element {
    const { appData, setAppData } = React.useContext(Container.Context);
    const [newEvent, setNewEvent] = React.useState<any>({ title: "", comment: "", start: "", end: "" });
    const { handleSubmit, reset } = useInputValue();

    const handleClickRemoveWindowEvent = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>): void => {
        if (e.target === e.currentTarget) {
            props.setNewEventContent(null);
        };
    };
    const submit = (v: TypeForInputsObject["v"]): void => {
        const NEW_REQ = new NewRequest({
            startDate_event: v[0].inputValues.toString(),
            endDate_event: v[1].inputValues.toString(),
            name_Event: v[2].inputValues.toString(),
            comment_Event: v[3].inputValues.toString(),
        });

        const SAVE_DATA: Type_for_newMessageFor_API | Type_for_newEventFor_API | string = NEW_REQ.create();
        if (typeof SAVE_DATA !== "string" && "event" in SAVE_DATA) {
            saveData(SAVE_DATA); reset(); props.setNewEventContent(null);
            setAppData(prevAppData => ({
                ...prevAppData,
                allEvents: [...appData.allEvents, SAVE_DATA.event]
            }));
        } else {
            alert(SAVE_DATA)
        };
    };


    async function saveData(SAVE_DATA: Type_for_newEventFor_API) {
        const USER = appData.userLogData.userName;
        try {
            const SAVE = await addEventAPI({ USER, SAVE_DATA });
            console.log(SAVE);
        }
        catch (error) {
            console.log(error);
        };
    };

    return (
        <div
            onClick={handleClickRemoveWindowEvent}
            className=" fixed w-[100vw] h-[100%] bg-white bg-opacity-90 z-40 top-0 left-0">
            <div className=" w-[1000px] h-72 absolute border border-thems-inputBorder  rounded-3xl m-auto left-0 right-0 top-0 bottom-0 bg-thems-background_newEventContent overflow-hidden">
                <form
                    onSubmit={(e) => handleSubmit(e, submit)}
                    className=" w-full h-full flex justify-center items-center flex-col  ">
                    <label
                        className=" w-full h-full flex justify-center items-center bg-thems-minBackg_content">
                        <h2 className=" text-[22px] text-white ">
                            Set new event
                        </h2>
                    </label>
                    <div className=" w-full h-full flex justify-around items-center flex-row border-t-2 ">
                        <div className="w-full h-full flex justify-center items-center flex-row gap-3">
                            <h4>
                                Set start event:
                            </h4>
                            <DatePicker
                                autoComplete="false"
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                timeCaption="Čas"
                                dateFormat="dd.MM.yyyy HH:mm"
                                name="startDate"
                                className=" w-80 h-7 rounded pl-3 pr-3 text-center border border-thems-inputBorder "
                                placeholderText="Start Date"
                                selected={newEvent.start}
                                onChange={(start) => setNewEvent({ ...newEvent, start })} />
                        </div>
                        <div className=" w-3/3 h-full flex justify-center items-center ">
                            <FontAwesomeIcon size="2xl" icon={faRightLong} />
                        </div>
                        <div className="w-full h-full flex justify-center items-center flex-row gap-3">

                            <DatePicker
                                autoComplete="false"
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                timeCaption="Čas"
                                dateFormat="dd.MM.yyyy HH:mm"
                                name="endDate"
                                className=" w-80 h-7 rounded pl-3 pr-3 text-center  border border-thems-inputBorder"
                                placeholderText="End Date"
                                selected={newEvent.end}
                                onChange={(end) => setNewEvent({ ...newEvent, end })} />
                            <h4>
                                Set end event:
                            </h4>
                        </div>
                    </div>
                    <div className=" w-full h-full flex flex-col justify-center items-center gap-5 p-3 border-t-2">
                        <div className="w-3/4 flex items-center justify-center flex-row gap-3">
                            <h4>
                                Set Name event for easy indetification.
                            </h4>
                            <input
                                name="name event"
                                type="text"
                                placeholder="Add Title"
                                className=" w-56 h-7 rounded pl-3 pr-3 text-center  border border-thems-inputBorder"
                            />
                        </div>
                        <div className="w-3/4 flex items-center justify-center flex-row gap-3">
                            <h4>
                                Set comment for event.
                            </h4>
                            <input
                                name="name event"
                                type="text"
                                placeholder="Comment"
                                className=" w-3/4 h-7 rounded pl-3 pr-3 text-center  border border-thems-inputBorder"
                            />
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

export default NewEvent;
